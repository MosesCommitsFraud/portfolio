import { Card } from "@/components/ui/card"
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import BarcodeStrip from "./BarcodeStrip";

export function CharacterProfile() {
  return (
    <div className="flex flex-col w-full overflow-visible">
      <div className="flex gap-0.5 overflow-visible">
        {/* Character Card with Left-side Protrusion */}
        <div className="relative w-[275px] h-[600px] rounded-none overflow-visible">
          {/* Polygon box positioned absolutely */}
          <div className="absolute -left-[44px] top-0 w-[40px] h-[600px]">
            <div
              className="absolute inset-0 font-mono text-black"
              style={{
                background: '#ff5750',
                clipPath: 'polygon(0 0, 100% 0, 100% 11.4%, 91% 12.4%, 91% 86.9%, 100% 87.8%, 100% 100%, 90% 100%, 60% 100%, 30% 98.5%, 5% 98.5%, 0 98%, 0 0)',
              }}
            />
          </div>
          {/* SVG for custom shape with left-side protrusion and consistent border */}
          <svg
            className="absolute -top-[20px] left-[-24px] w-[319px] h-[620px] z-0"
            viewBox="-24.5 -21 321 622"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="top-glow" x="-20" y="-20" width="320" height="40" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#ff5750" floodOpacity="0.7" />
              </filter>
              <clipPath id="mugshot-clip">
                <polygon points="0,0 275,0 275,600 0,600 0,525 -4,519 -4,75 0,69 0,0" />
              </clipPath>
            </defs>
            <image
              href="/mugshot.png"
              x="-4" y="0"
              width="279"
              height="600"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#mugshot-clip)"
              opacity="1"
              style={{ objectFit: 'cover' }}
            />
            {/* Outer border polygon (red) */}
            <polygon
              points="0,0 275,0 275,600 0,600 0,525 -4,519 -4,75 0,69 0,0"
              stroke="#ff5750"
              strokeWidth="2"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
            {/* Top border glow, perfectly centered for even outward/inward spread */}
            <line
              x1="5" y1="0" x2="270" y2="0"
              stroke="#ff5750"
              strokeWidth="12"
              opacity="0.4"
              className="blur-[6px]"
              strokeLinecap="round"
            />
            {/* Tight, bright halo on the border */}
            <polyline
              points="0,0 275,0"
              stroke="#ff5750"
              strokeWidth="4"
              fill="none"
              opacity="0.5"
            />
            {/* Crisp, thin top border line */}
            <polyline
              points="0,0 275,0"
              stroke="#ff5750"
              strokeWidth="2"
              fill="none"
              opacity="1"
            />
          </svg>
          {/* Content container, no padding, image is already background */}
        </div>

        <div className="relative">
        {/* Neon trapezoid bar, intense glow, 5/6 height, right side, correct shape */}
        <div className="absolute overflow-visible z-30">
          <svg
            className="absolute overflow-visible"
            style={{
              height: "500px",
              width: "200px",
              top: "100px",
              right: "-453px",
              position: "absolute",
            }}
            viewBox="0 0 200 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            overflow="visible"
          >
            <g transform="translate(95, 0)">
              {/* Glowing effect layers */}
              <polygon
                points="1,0 9,8 9,592 1,600"
                fill="#ff5750"
                opacity="0.4"
                className="blur-[20px]"
              />
              <polygon
                points="1,0 9,8 9,592 1,600"
                fill="#ff5750"
                opacity="0.6"
                className="blur-[10px]"
              />
              {/* Main shape */}
              <polygon points="1,0 9,8 9,592 1,600" fill="#ff5750" opacity="1.0" />
            </g>
          </svg>
        </div>

        <Card className="w-[350px] h-[600px] border-2 shadow-none rounded-none relative overflow-visible z-20" style={{ borderColor: '#ff5750', background: '#2b0607' }}>
          <div className="relative">
            <div className="p-6 h-full">
              {/* Character Info */}
              <div className="space-y-4 text-red-400">
                <div className="space-y-3">
                  <div>
                    {/* Barcode strip above the name, left-aligned with 10px padding */}
                    <div className="-mt-8 mb-5 pl-[-10px] -ml-1">
                      <BarcodeStrip />
                    </div>
                    <div className="text-sm font-mono uppercase tracking-widest -mt-1.5">NAME</div>
                    <div className="relative inline-block">
                      <span className="absolute left-0 top-0 blur-[2px] opacity-40 text-[#ff5750] pointer-events-none select-none font-bold text-xl font-mono">SONG SO MI</span>
                      <span className="relative text-xl font-mono font-bold">SONG SO MI</span>
                    </div>
                    <div className="w-full h-px bg-red-400 mt-2.5" />
                  </div>

                  <div>
                    <div className="text-sm font-mono uppercase tracking-widest -mt-1.5">CODENAME</div>
                    <div className="relative inline-block">
                      <span className="absolute left-0 top-0 blur-[2px] opacity-40 text-[#ff5750] pointer-events-none select-none font-bold text-xl font-mono">SONGBIRD</span>
                      <span className="relative text-xl font-mono font-bold">SONGBIRD</span>
                    </div>
                    <div className="w-full h-px bg-red-400 mt-2.5" />
                  </div>

                  <div>
                    <div className="text-sm font-mono uppercase tracking-widest -mt-1.5">AFFILIATION</div>
                    <div className="relative inline-block">
                      <span className="absolute left-0 top-0 blur-[2px] opacity-40 text-[#ff5750] pointer-events-none select-none font-bold text-xl font-mono">FIA</span>
                      <span className="relative text-xl font-mono font-bold">FIA</span>
                    </div>
                    <div className="w-full h-px bg-red-400 mt-2.5" />
                  </div>

                  <div>
                    <div className="text-sm font-mono uppercase tracking-widest -mt-1.5">RECRUITMENT</div>
                    <div className="relative inline-block">
                      <span className="absolute left-0 top-0 blur-[2px] opacity-40 text-[#ff5750] pointer-events-none select-none font-bold text-xl font-mono">SOLOMON REED; NEW YORK, NY</span>
                      <span className="relative text-xl font-mono font-bold">SOLOMON REED; NEW YORK, NY</span>
                    </div>
                    <div className="w-full h-px bg-red-400 mt-2.5" />
                  </div>

                  <div>
                    <div className="text-sm font-mono uppercase tracking-widest -mt-1.5">DATE OF BIRTH</div>
                    <div className="relative inline-block">
                      <span className="absolute left-0 top-0 blur-[2px] opacity-40 text-[#ff5750] pointer-events-none select-none font-bold text-xl font-mono">12/29/2045</span>
                      <span className="relative text-xl font-mono font-bold">12/29/2045</span>
                    </div>
                    <div className="w-full h-px bg-red-400 mt-2.5" />
                  </div>

                  <div>
                    <div className="text-sm font-mono uppercase tracking-widest -mt-1.5">
                      LAST POSITION HELD
                    </div>
                    <div className="relative inline-block">
                      <span className="absolute left-0 top-0 blur-[2px] opacity-40 text-[#ff5750] pointer-events-none select-none font-bold text-xl font-mono">N/A</span>
                      <span className="relative text-xl font-mono font-bold">N/A</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      </div>
      
      {/* Bottom Info Bar - Red with slanted right edge and text */}
      <div className="relative w-[625.5px] h-[290px] -mt-59 opacity-90">
        <div
          className="absolute inset-0 font-mono text-black"
          style={{
            background: '#ff5750',
            clipPath: 'polygon(100% 83%, 100% 91%, 96% 100%, 0 100%, 0 83%)',
          }}
        >
          <div className="absolute inset-0">
            <span className="absolute left-[4px] top-[243px] text-[11px]">MODEL LINE: 12.12AA</span>
            <span className="absolute left-[263px] top-[243px] text-[14px]">FIA DATABASE</span>
            <span className="absolute left-[480px] top-[245.5px] text-[8px] leading-tight">
              IMAGE NAME: NUX-131010<br />
              IMAGE TYPE: ARM LINUX KERNEL IMAGE<br />
              (LZO COMPRESSED)<br />
              LOAD ADDRESS: 0x02000000
            </span>
          </div>
        </div>
      </div>

      {/* Protocol SVG with glow effect */}
      <div className="relative w-[50px] h-[220px] -mt-20">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[60px] h-[60px]">
            {/* Glow effect layers */}
            <div className="absolute inset-0">
              <img 
                src="/protocol.svg" 
                alt="Protocol" 
                className="w-full h-full object-contain blur-[20px]"
                style={{ opacity: 0.2 }}
              />
            </div>
            <div className="absolute inset-0">
              <img 
                src="/protocol.svg" 
                alt="Protocol" 
                className="w-full h-full object-contain blur-[10px]"
                style={{ opacity: 0.4 }}
              />
            </div>
            {/* Main image */}
            <img 
              src="/protocol.svg" 
              alt="Protocol" 
              className="w-full h-full object-contain relative z-10"
              style={{ opacity: 1.0 }}
            />
          </div>
        </div>
        {/* Warning text positioned relative to protocol.svg */}
        <span className="absolute left-[56px] top-[93px] text-[7px] leading-tight w-[200px]" style={{ color: '#ff5750' }}>
          ONLY CC35 CERTIFIED<br />
          AND DHSF 5TH CLASS OFFICERS<br />
          ARE ALLOWED TO MANIPULATE,<br />
          ACCESS OR DISABLE THIS DEVICE.
        </span>
      </div>
    </div>
  )
} 