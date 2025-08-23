#!/usr/bin/env node

import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const publicDir = join(projectRoot, 'public');
const sourceImage = join(publicDir, 'hero-source.jpg');

// Create public directory if it doesn't exist
if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

// Check if source image exists
if (!existsSync(sourceImage)) {
  console.error('❌ Source image not found at:', sourceImage);
  console.log('📝 Please add hero-source.jpg to the /public directory');
  process.exit(1);
}

async function optimizeHeroImages() {
  try {
    console.log('🖼️  Starting hero image optimization...');
    
    const sizes = [
      { width: 640, suffix: '640' },
      { width: 1280, suffix: '1280' }
    ];

    for (const size of sizes) {
      const { width, suffix } = size;
      const aspectRatio = 0.5625; // 16:9 aspect ratio
      
      // Generate AVIF (highest compression)
      const avifPath = join(publicDir, `hero-${suffix}.avif`);
      await sharp(sourceImage)
        .resize(width, Math.round(width * aspectRatio), {
          fit: 'cover',
          position: 'center'
        })
        .avif({
          quality: width === 640 ? 50 : 45, // More aggressive for larger images
          effort: 9 // Maximum compression effort
        })
        .toFile(avifPath);
      
      console.log(`✅ Generated: hero-${suffix}.avif (${width}px)`);
      
      // Generate WebP
      const webpPath = join(publicDir, `hero-${suffix}.webp`);
      await sharp(sourceImage)
        .resize(width, Math.round(width * aspectRatio), {
          fit: 'cover',
          position: 'center'
        })
        .webp({
          quality: width === 640 ? 70 : 65, // More aggressive compression
          effort: 6
        })
        .toFile(webpPath);
      
      console.log(`✅ Generated: hero-${suffix}.webp (${width}px)`);
      
      // Generate JPEG fallback
      const jpegPath = join(publicDir, `hero-${suffix}.jpg`);
      await sharp(sourceImage)
        .resize(width, Math.round(width * aspectRatio), {
          fit: 'cover',
          position: 'center'
        })
        .jpeg({
          quality: 75, // More aggressive for better performance
          progressive: true,
          mozjpeg: true
        })
        .toFile(jpegPath);
      
      console.log(`✅ Generated: hero-${suffix}.jpg (${width}px)`);
    }
    
    // Get file sizes for reporting
    const stats = await Promise.all([
      sharp(join(publicDir, 'hero-640.avif')).metadata(),
      sharp(join(publicDir, 'hero-640.webp')).metadata(),
      sharp(join(publicDir, 'hero-640.jpg')).metadata(),
      sharp(join(publicDir, 'hero-1280.avif')).metadata(),
      sharp(join(publicDir, 'hero-1280.webp')).metadata(), 
      sharp(join(publicDir, 'hero-1280.jpg')).metadata()
    ]);
    
    console.log('\n📊 Optimization Summary:');
    console.log(`📱 Mobile (640px): ${Math.round(stats[0].size/1024)}KB AVIF, ${Math.round(stats[1].size/1024)}KB WebP, ${Math.round(stats[2].size/1024)}KB JPEG`);
    console.log(`🖥️  Desktop (1280px): ${Math.round(stats[3].size/1024)}KB AVIF, ${Math.round(stats[4].size/1024)}KB WebP, ${Math.round(stats[5].size/1024)}KB JPEG`);
    console.log('\n🚀 Hero images optimized successfully!');
    
  } catch (error) {
    console.error('❌ Error optimizing images:', error);
    process.exit(1);
  }
}

// Run optimization
optimizeHeroImages();