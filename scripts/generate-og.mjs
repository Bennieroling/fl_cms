#!/usr/bin/env node

import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get project root
const projectRoot = join(__dirname, '..');

// Get environment variables for customization
const customTitle = process.env.OG_TITLE || 'C.M.S Laboral';
const customStrapline = process.env.OG_STRAPLINE || 'Gestión profesional de la salud laboral';

async function generateOGImage() {
  try {
    console.log('📸 Generating Open Graph image...');
    
    // Read the SVG template
    const svgPath = join(projectRoot, 'assets', 'og-template.svg');
    let svgContent = readFileSync(svgPath, 'utf-8');
    
    // Replace placeholders if custom values are provided
    if (customTitle !== 'C.M.S Laboral') {
      svgContent = svgContent.replace('C.M.S Laboral', customTitle);
    }
    
    if (customStrapline !== 'Gestión profesional de la salud laboral') {
      svgContent = svgContent.replace('Gestión profesional de la salud laboral', customStrapline);
    }
    
    // Convert SVG to PNG using Sharp
    const outputPath = join(projectRoot, 'public', 'og-image.png');
    
    await sharp(Buffer.from(svgContent))
      .resize(1200, 630)
      .jpeg({
        quality: 85,
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath);
    
    console.log(`✅ Open Graph image generated: ${outputPath}`);
    console.log('📐 Dimensions: 1200x630px');
    console.log('🎨 Format: JPEG (85% quality)');
    
    // Generate dark version
    const darkOutputPath = join(projectRoot, 'public', 'og-image-dark.jpg');
    
    // Create a dark version by modifying the SVG
    const darkSvgContent = svgContent
      .replace('#0066cc', '#1e40af') // Darker blue
      .replace('#004499', '#1e3a8a') // Even darker blue
      .replace('rgba(255,255,255,0.95)', 'rgba(30,41,59,0.95)') // Dark card
      .replace('rgba(248,250,252,0.95)', 'rgba(15,23,42,0.95)') // Darker card
      .replace('#1e293b', '#f1f5f9') // Light text
      .replace('#64748b', '#cbd5e1') // Light subtitle
      .replace('#475569', '#94a3b8') // Light strapline
      .replace('#94a3b8', '#64748b'); // Light location
    
    await sharp(Buffer.from(darkSvgContent))
      .resize(1200, 630)
      .jpeg({
        quality: 85,
        progressive: true,
        mozjpeg: true
      })
      .toFile(darkOutputPath);
    
    console.log(`✅ Dark Open Graph image generated: ${darkOutputPath}`);
    
    // Generate stats
    const stats = await sharp(outputPath).stats();
    const fileSize = (await sharp(outputPath).toBuffer()).length;
    
    console.log('📊 Image stats:');
    console.log(`   File size: ${Math.round(fileSize / 1024)}KB`);
    console.log(`   Channels: ${stats.channels}`);
    console.log(`   Dominant color: RGB(${stats.dominant.r}, ${stats.dominant.g}, ${stats.dominant.b})`);
    
  } catch (error) {
    console.error('❌ Error generating Open Graph image:', error);
    process.exit(1);
  }
}

// Run the generation
generateOGImage();