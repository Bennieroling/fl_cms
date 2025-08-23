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
      
      // Generate WebP
      const webpPath = join(publicDir, `hero-${suffix}.webp`);
      await sharp(sourceImage)
        .resize(width, Math.round(width * 0.5625), { // 16:9 aspect ratio
          fit: 'cover',
          position: 'center'
        })
        .webp({
          quality: 85,
          effort: 6
        })
        .toFile(webpPath);
      
      console.log(`✅ Generated: hero-${suffix}.webp (${width}px)`);
      
      // Generate JPEG fallback
      const jpegPath = join(publicDir, `hero-${suffix}.jpg`);
      await sharp(sourceImage)
        .resize(width, Math.round(width * 0.5625), {
          fit: 'cover',
          position: 'center'
        })
        .jpeg({
          quality: 82,
          progressive: true,
          mozjpeg: true
        })
        .toFile(jpegPath);
      
      console.log(`✅ Generated: hero-${suffix}.jpg (${width}px)`);
    }
    
    // Get file sizes for reporting
    const stats = await Promise.all([
      sharp(join(publicDir, 'hero-640.webp')).metadata(),
      sharp(join(publicDir, 'hero-640.jpg')).metadata(),
      sharp(join(publicDir, 'hero-1280.webp')).metadata(), 
      sharp(join(publicDir, 'hero-1280.jpg')).metadata()
    ]);
    
    console.log('\n📊 Optimization Summary:');
    console.log(`📱 Mobile (640px): ${Math.round(stats[0].size/1024)}KB WebP, ${Math.round(stats[1].size/1024)}KB JPEG`);
    console.log(`🖥️  Desktop (1280px): ${Math.round(stats[2].size/1024)}KB WebP, ${Math.round(stats[3].size/1024)}KB JPEG`);
    console.log('\n🚀 Hero images optimized successfully!');
    
  } catch (error) {
    console.error('❌ Error optimizing images:', error);
    process.exit(1);
  }
}

// Run optimization
optimizeHeroImages();