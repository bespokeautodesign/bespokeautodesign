import { pipeline, env } from '@huggingface/transformers';

// Configure transformers.js
env.allowLocalModels = false;
env.useBrowserCache = false;

const MAX_IMAGE_DIMENSION = 1024;

function resizeImageIfNeeded(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, image: HTMLImageElement) {
  let width = image.naturalWidth;
  let height = image.naturalHeight;

  if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
    if (width > height) {
      height = Math.round((height * MAX_IMAGE_DIMENSION) / width);
      width = MAX_IMAGE_DIMENSION;
    } else {
      width = Math.round((width * MAX_IMAGE_DIMENSION) / height);
      height = MAX_IMAGE_DIMENSION;
    }

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0, width, height);
    return true;
  }

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);
  return false;
}

export const changeCarColor = async (imageElement: HTMLImageElement, targetColor: string): Promise<string> => {
  try {
    console.log('Starting car color change process...');
    
    // Create canvas for processing
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) throw new Error('Could not get canvas context');
    
    // Resize and draw image
    resizeImageIfNeeded(canvas, ctx, imageElement);
    
    // Get image data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    // Convert target color to RGB
    const targetRGB = hexToRgb(targetColor);
    if (!targetRGB) throw new Error('Invalid target color');
    
    // Process each pixel
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // Check if this pixel is part of the car body (not windows, wheels, etc.)
      if (isCarBodyPixel(r, g, b)) {
        // Calculate luminance to preserve lighting
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        const luminanceFactor = luminance / 255;
        
        // Apply new color while preserving lighting
        data[i] = Math.round(targetRGB.r * luminanceFactor);     // Red
        data[i + 1] = Math.round(targetRGB.g * luminanceFactor); // Green
        data[i + 2] = Math.round(targetRGB.b * luminanceFactor); // Blue
        // Alpha channel (data[i + 3]) remains unchanged
      }
    }
    
    // Put the modified image data back
    ctx.putImageData(imageData, 0, 0);
    
    // Return as data URL
    return canvas.toDataURL('image/png', 1.0);
  } catch (error) {
    console.error('Error changing car color:', error);
    throw error;
  }
};

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function isCarBodyPixel(r: number, g: number, b: number): boolean {
  // This function determines if a pixel is part of the car body that should be recolored
  // We need to be very precise to exclude background, headlights, windows, etc.
  
  const brightness = (r + g + b) / 3;
  const saturation = Math.max(r, g, b) - Math.min(r, g, b);
  
  // Exclude very dark pixels (wheels, tires, shadows, windows)
  if (brightness < 50) return false;
  
  // Exclude very bright pixels (headlights, reflections, chrome)
  if (brightness > 220) return false;
  
  // Exclude pixels that are too close to pure black (tires, shadows)
  if (r < 30 && g < 30 && b < 30) return false;
  
  // Exclude pixels that are too close to pure white (headlights, reflections)
  if (r > 230 && g > 230 && b > 230) return false;
  
  // Exclude blue-ish pixels (likely sky/background)
  if (b > r + 30 && b > g + 30) return false;
  
  // Exclude very saturated pixels (already colored elements, lights)
  if (saturation > 80) return false;
  
  // Exclude pixels with very low saturation (likely chrome, glass, or background)
  if (saturation < 10 && brightness > 180) return false;
  
  // Target mid-range brightness with some color variation (typical car paint)
  if (brightness >= 50 && brightness <= 220 && saturation >= 10 && saturation <= 80) {
    // Additional check: exclude very blue or very white pixels (sky, clouds)
    const blueRatio = b / (r + g + b);
    const whiteBalance = Math.abs(r - g) + Math.abs(g - b) + Math.abs(r - b);
    
    // Exclude if too blue (sky) or too balanced and bright (clouds/background)
    if (blueRatio > 0.4 || (whiteBalance < 30 && brightness > 150)) return false;
    
    return true;
  }
  
  return false;
}

export const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};
