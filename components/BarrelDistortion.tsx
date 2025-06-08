"use client"

import React, { useRef, useEffect, useState, useCallback } from 'react';

interface BarrelDistortionProps {
  children: React.ReactNode;
  curvature?: number;
  enabled?: boolean;
}

export function BarrelDistortion({ 
  children, 
  curvature: initialCurvature = 0.15, 
  enabled = true 
}: BarrelDistortionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sourceCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [debug, setDebug] = useState<string>('Ready');
  const [isProjected, setIsProjected] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [curvature, setCurvature] = useState(initialCurvature);
  const [curveType, setCurveType] = useState<'horizontal' | 'cylindrical'>('cylindrical');

  // Horizontal curved monitor (simple edge push)
  const applyHorizontalCurve = useCallback((imageData: ImageData, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const outputData = ctx.createImageData(canvas.width, canvas.height);
    const { width, height } = canvas;
    const centerX = width / 2;
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const normalizedX = (x - centerX) / centerX;
        const curveFactor = 1 - curvature * normalizedX * normalizedX;
        const sourceX = centerX + normalizedX * centerX * curveFactor;
        const sourceY = y;
        
        if (sourceX >= 0 && sourceX < width && sourceY >= 0 && sourceY < height) {
          const sourceIndex = (Math.round(sourceY) * width + Math.round(sourceX)) * 4;
          const targetIndex = (y * width + x) * 4;
          
          if (sourceIndex >= 0 && sourceIndex < imageData.data.length - 3) {
            outputData.data[targetIndex] = imageData.data[sourceIndex];
            outputData.data[targetIndex + 1] = imageData.data[sourceIndex + 1];
            outputData.data[targetIndex + 2] = imageData.data[sourceIndex + 2];
            outputData.data[targetIndex + 3] = imageData.data[sourceIndex + 3];
          }
        }
      }
    }

    ctx.putImageData(outputData, 0, 0);
  }, [curvature]);

  // Cylindrical projection (sitting inside cylinder - edges wrap toward you)
  const applyCylindricalProjection = useCallback((imageData: ImageData, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const outputData = ctx.createImageData(canvas.width, canvas.height);
    const { width, height } = canvas;
    const centerX = width / 2;
    const centerY = height / 2;
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        // Horizontal distance from center (-1 to 1)
        const normalizedX = (x - centerX) / centerX;
        // Vertical distance from center (-1 to 1) 
        const normalizedY = (y - centerY) / centerY;
        
        // Calculate horizontal distance for wrap-around effect
        const horizontalDistance = Math.abs(normalizedX);
        
        // Cylindrical projection: sitting inside cylinder
        // Edges wrap toward you (get closer) as they approach corners
        const wrapFactor = 1 + curvature * horizontalDistance * horizontalDistance;
        
        // Apply wrap-around to BOTH x and y coordinates (edges come toward you)
        const sourceX = centerX + normalizedX * centerX / wrapFactor;
        const sourceY = centerY + normalizedY * centerY / wrapFactor;
        
        if (sourceX >= 0 && sourceX < width && sourceY >= 0 && sourceY < height) {
          const sourceIndex = (Math.round(sourceY) * width + Math.round(sourceX)) * 4;
          const targetIndex = (y * width + x) * 4;
          
          if (sourceIndex >= 0 && sourceIndex < imageData.data.length - 3) {
            outputData.data[targetIndex] = imageData.data[sourceIndex];
            outputData.data[targetIndex + 1] = imageData.data[sourceIndex + 1];
            outputData.data[targetIndex + 2] = imageData.data[sourceIndex + 2];
            outputData.data[targetIndex + 3] = imageData.data[sourceIndex + 3];
          }
        }
      }
    }

    ctx.putImageData(outputData, 0, 0);
  }, [curvature]);

  // High quality capture with better settings
  const captureSource = async (): Promise<boolean> => {
    if (!containerRef.current) return false;

    setDebug('Capturing source (high quality)...');
    
    try {
      const modernScreenshot = await import('modern-screenshot');
      
      // High quality capture settings
      const sourceCanvas = await modernScreenshot.domToCanvas(containerRef.current, {
        scale: 2, // Higher resolution for better quality
        backgroundColor: '#2b0607',
        style: {
          // Preserve text rendering quality
          'text-rendering': 'optimizeLegibility',
          'font-smooth': 'always',
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },
        // Better handling of layout
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
        // Ensure pixel-perfect capture
        pixelRatio: window.devicePixelRatio || 1,
      });
      
      sourceCanvasRef.current = sourceCanvas;
      setDebug('High quality source captured!');
      return true;
      
    } catch (error) {
      setDebug(`Capture failed: ${error}`);
      console.error('Capture error details:', error);
      return false;
    }
  };

  // Apply distortion with bilinear interpolation for quality
  const applyDistortionWithInterpolation = useCallback(() => {
    if (!canvasRef.current || !sourceCanvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;
    const sourceCanvas = sourceCanvasRef.current;
    
    // Use original container size, not the scaled capture size
    const rect = containerRef.current!.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    // Enable high quality rendering
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Scale down the high-res capture to match display size, then apply distortion
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d')!;
    tempCanvas.width = rect.width;
    tempCanvas.height = rect.height;
    
    // Scale down high-res capture to display size with high quality
    tempCtx.imageSmoothingEnabled = true;
    tempCtx.imageSmoothingQuality = 'high';
    tempCtx.drawImage(sourceCanvas, 0, 0, rect.width, rect.height);
    
    // Get scaled image data
    const imageData = tempCtx.getImageData(0, 0, rect.width, rect.height);

    // Apply the selected curve type
    if (curveType === 'horizontal') {
      applyHorizontalCurve(imageData, canvas, ctx);
    } else {
      applyCylindricalProjection(imageData, canvas, ctx);
    }

    setDebug(`${curveType} curve applied (${curvature.toFixed(2)}) - HQ`);
  }, [curvature, curveType, applyHorizontalCurve, applyCylindricalProjection]);

  // Main function
  const createCurvedProjection = async () => {
    setIsProcessing(true);

    try {
      const success = await captureSource();
      if (success) {
        applyDistortionWithInterpolation();
        setIsProjected(true);
      } else {
        setIsProjected(false);
      }
    } catch (error) {
      setDebug(`Error: ${error}`);
      setIsProjected(false);
    } finally {
      setIsProcessing(false);
    }
  };

  // Re-apply distortion when settings change
  useEffect(() => {
    if (sourceCanvasRef.current && isProjected) {
      applyDistortionWithInterpolation();
    }
  }, [curvature, curveType, applyDistortionWithInterpolation, isProjected]);

  // Auto-trigger initial capture
  useEffect(() => {
    if (enabled) {
      const timer = setTimeout(createCurvedProjection, 1500);
      return () => clearTimeout(timer);
    } else {
      setIsProjected(false);
    }
  }, [enabled]);

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <div className="relative w-full h-full">
      <div 
        ref={containerRef}
        className={`w-full h-full transition-opacity duration-500 ${isProjected ? 'invisible' : 'visible'}`}
      >
        {children}
      </div>
      
      <canvas
        ref={canvasRef}
        className={`absolute top-0 left-0 pointer-events-none z-40 transition-opacity duration-500 ${isProjected ? 'opacity-100' : 'opacity-0'}`}
      />
      
      {/* Status */}
      <div className="absolute top-4 left-4 z-50 bg-black/95 text-cyan-400 font-mono text-xs p-3 rounded border border-cyan-400">
        <div className="space-y-1">
          <div>Status: {debug}</div>
          <div>Mode: {curveType} (HQ)</div>
          <div>Processing: {isProcessing ? 'Yes' : 'No'}</div>
          <div>Projected: {isProjected ? 'Yes' : 'No'}</div>
          <div>Curvature: {curvature.toFixed(2)}</div>
          <div className="text-cyan-300 mt-1">
            {curveType === 'cylindrical' ? '🥽 Inside Cylinder' : '📺 Curved Monitor'}
          </div>
        </div>
      </div>
      
      {/* Controls */}
      <div className="absolute top-4 right-4 z-50 bg-black/95 text-cyan-400 font-mono text-xs p-3 rounded border border-cyan-400 space-y-2">
        <button
          onClick={createCurvedProjection}
          disabled={isProcessing}
          className="block w-full bg-cyan-600 text-white px-3 py-1 rounded hover:bg-cyan-700 disabled:opacity-50"
        >
          {isProcessing ? 'CAPTURING HQ...' : 'CAPTURE HQ'}
        </button>
        
        <div className="space-y-1">
          <div>Curve Type:</div>
          <select 
            value={curveType} 
            onChange={(e) => setCurveType(e.target.value as any)}
            className="w-full bg-black border border-cyan-400 text-cyan-400 text-xs p-1 rounded"
          >
            <option value="horizontal">Curved Monitor</option>
            <option value="cylindrical">Inside Cylinder</option>
          </select>
        </div>
        
        <div className="space-y-1">
          <div>Curvature: {curvature.toFixed(2)}</div>
          <input
            type="range"
            min="0"
            max="0.4"
            step="0.01"
            value={curvature}
            onChange={(e) => setCurvature(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        
        <div className="text-xs text-cyan-300 space-y-1">
          <div>• 0.05 = Subtle</div>
          <div>• 0.15 = Standard</div>
          <div>• 0.30 = Immersive</div>
        </div>
      </div>
    </div>
  );
}