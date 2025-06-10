// components/CurvedWrapper.tsx
"use client";

import React from 'react';

interface CurvedWrapperProps {
  children: React.ReactNode;
  enabled?: boolean;
  // Controls the amount of curvature. Higher numbers = more curve.
  // Good values are between 50 and 150.
  curvature?: number;
}

export function CurvedWrapper({
  children,
  enabled = true,
  curvature = 100,
}: CurvedWrapperProps) {
  
  if (!enabled) {
    return <>{children}</>;
  }

  const filterId = "barrel-distortion-filter";

  return (
    <>
      {/* This SVG element defines the filter. It can be placed anywhere in the
        component and will be invisible.
      */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id={filterId}>
            {/* This creates the displacement map from a gradient */}
            <feImage href="#barrel-gradient" result="map" />
            
            {/* This is the core of the effect. It uses the "map" to displace
              the pixels of the source graphic (your content).
              The `scale` attribute controls the intensity of the curve.
              xChannelSelector="R" means the horizontal displacement is controlled
              by the Red channel of the map.
            */}
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="map" 
              scale={curvature}
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>

          {/* This is the gradient used as our displacement map.
            - It goes from bright (pushing pixels right) to dark (pulling pixels left).
            - The green channel is kept at 50% grey so there is no vertical distortion.
          */}
          <linearGradient id="barrel-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff8080" />
            <stop offset="50%" stopColor="#808080" />
            <stop offset="100%" stopColor="#008080" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* We apply the filter to the div wrapping your children.
        The `style` attribute directly references the filter by its ID.
      */}
      <div style={{ filter: `url(#${filterId})` }}>
        {children}
      </div>
    </>
  );
}