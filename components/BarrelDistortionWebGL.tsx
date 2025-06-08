// components/BarrelDistortionWebGL.tsx
"use client"

import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { domToCanvas } from 'modern-screenshot';

// The Scene component now uses a standard meshBasicMaterial for debugging
function Scene({ sourceCanvas }: { sourceCanvas: HTMLCanvasElement }) {
  const texture = useMemo(() => {
    const tex = new THREE.CanvasTexture(sourceCanvas);
    // Good practice for non-power-of-two textures
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    return tex;
  }, [sourceCanvas]);
  
  // The texture needs to be updated when the canvas content changes.
  // This is already handled by useMemo dependency array.

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      {/* Using the simplest material to display the texture */}
      <meshBasicMaterial map={texture} transparent={true} />
    </mesh>
  );
}

export function BarrelDistortionWebGL({
  children,
  curvature = 0.1, // Curvature is not used in this debug version, but kept for later
  enabled = true,
}: {
  children: React.ReactNode,
  curvature?: number,
  enabled?: boolean,
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sourceCanvas, setSourceCanvas] = useState<HTMLCanvasElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!enabled || !containerRef.current) return;

    // We're using window.onload to ensure all page content,
    // including images, is fully loaded before we take the screenshot.
    const capture = async () => {
      try {
        const canvas = await domToCanvas(containerRef.current!, {
          scale: 2,
          backgroundColor: 'transparent',
          width: containerRef.current!.offsetWidth,
          height: containerRef.current!.offsetHeight,
          pixelRatio: window.devicePixelRatio,
        });
        setSourceCanvas(canvas);
      } catch (error) {
        console.error("Failed to capture content:", error);
      } finally {
        setIsReady(true);
      }
    };

    if (document.readyState === 'complete') {
        capture();
    } else {
        window.addEventListener('load', capture, { once: true });
        return () => window.removeEventListener('load', capture);
    }
  }, [enabled]);

  return (
    <div className="relative w-full h-full">
      {/* Original content for capture, fades out smoothly */}
      <div
        ref={containerRef}
        style={{
          opacity: isReady ? 0 : 1,
          transition: 'opacity 0.5s ease-out',
        }}
      >
        {children}
      </div>

      {/* WebGL canvas fades in */}
      {sourceCanvas && (
        <div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
          style={{
              opacity: isReady ? 1 : 0,
              transition: 'opacity 0.5s ease-out',
              transitionDelay: '0.5s', // Fade in after the other content fades out
          }}
        >
          <Canvas orthographic camera={{ zoom: 1, position: [0, 0, 100] }}>
            {/* The Scene no longer needs the curvature prop for this test */}
            <Scene sourceCanvas={sourceCanvas} />
          </Canvas>
        </div>
      )}
    </div>
  );
}