const fs = require('fs').promises;
const path = require('path');

function getBaseFileName(fileName) {
    // Remove extension
    const nameWithoutExt = path.parse(fileName).name;
    // Remove trailing numbers and underscores
    return nameWithoutExt.replace(/[_\d]+$/, '');
}

async function processGalleryImages() {
    const READY_PAINTINGS_DIR = path.join(process.cwd(), 'assets', 'Galerie', 'compressed', 'Ready Paintings');
    
    try {
        // Check if Ready Paintings directory exists
        await fs.access(READY_PAINTINGS_DIR);
    } catch {
        console.error(`Error: Ready Paintings directory not found at ${READY_PAINTINGS_DIR}`);
        return null;
    }

    try {
        // Read all files from Ready Paintings directory
        const files = await fs.readdir(READY_PAINTINGS_DIR);
        const imageFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file));

        // Group related images
        const imageGroups = new Map();
        imageFiles.forEach(file => {
            const baseFileName = getBaseFileName(file);
            if (!imageGroups.has(baseFileName)) {
                imageGroups.set(baseFileName, []);
            }
            imageGroups.get(baseFileName).push(
                `/assets/Portefolio/compressed/Ready Paintings/${file}`
            );
        });

        // Generate gallery items using first image from each group
        const galleryItems = Array.from(imageGroups.entries()).map(([baseFileName, images]) => ({
            image: images[0], // Use first image as main image
            title: baseFileName,
            description: `Description for ${baseFileName}`, // Replace with actual descriptions
            date: 'Mars 2024',
            fullDescription: `Full description for ${baseFileName}` // Replace with actual descriptions
        }));

        // Generate related images object
        const relatedImages = {};
        imageGroups.forEach((images, baseFileName) => {
            relatedImages[baseFileName] = images;
        });

        return { galleryItems, relatedImages };
    } catch (error) {
        console.error('Error processing images:', error);
        return null;
    }
}

function generateJsCode({ galleryItems, relatedImages }) {
    if (!galleryItems || !relatedImages) return null;

    let jsCode = 'const galleryItems = [\n';
    
    galleryItems.forEach(item => {
        jsCode += `    {
        image: '${item.image}',
        title: '${item.title}',
        description: '${item.description}',
        date: '${item.date}',
        fullDescription: '${item.fullDescription}'
    },\n`;
    });
    
    jsCode += '];\n\n';
    
    // Generate related images object
    jsCode += 'const relatedImages = {\n';
    Object.entries(relatedImages).forEach(([title, images]) => {
        jsCode += `    '${title}': [\n`;
        images.forEach(img => {
            jsCode += `        '${img}',\n`;
        });
        jsCode += '    ],\n';
    });
    jsCode += '};';
    
    return jsCode;
}

async function main() {
    console.log('Starting image processing...');
    const data = await processGalleryImages();
    
    if (data) {
        const jsCode = generateJsCode(data);
        const outputPath = path.join(process.cwd(), 'updated_gallery.js');
        
        await fs.writeFile(outputPath, jsCode);
        
        console.log(`\nSuccess! Gallery code has been generated and saved to: ${outputPath}`);
        console.log('\nNext steps:');
        console.log('1. Review the generated code in "updated_gallery.js"');
        console.log('2. Update the descriptions and dates in the gallery items as needed');
        console.log('3. Copy the contents into your gallery.js file');
    }
}

main().catch(console.error);