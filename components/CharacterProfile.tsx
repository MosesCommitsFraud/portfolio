import { Card } from "@/components/ui/card"
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function CharacterProfile() {
  return (
    <div className="flex flex-col w-full overflow-visible">
      <div className="flex gap-0.5">
        {/* New Middle Card */}
        <Card className="w-[275px] h-[600px] bg-black/80 border-2 border-red-500 shadow-none rounded-none relative overflow-visible">
          <div className="relative">
            <div className="p-6 h-full">
              {/* Character Image */}
              <div className="w-full h-full bg-gradient-to-b from-red-500/30 to-red-900/50 border border-red-500/50 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=320&width=256"
                  alt="Character Portrait"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </Card>

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
                fill="#ff3b3b"
                opacity="0.4"
                className="blur-[20px]"
              />
              <polygon
                points="1,0 9,8 9,592 1,600"
                fill="#ff3b3b"
                opacity="0.6"
                className="blur-[10px]"
              />
              {/* Main shape */}
              <polygon points="1,0 9,8 9,592 1,600" fill="#ff3b3b" opacity="1.0" />
            </g>
          </svg>
        </div>

        <Card className="w-[350px] h-[600px] bg-black/80 border-2 border-red-500 shadow-none rounded-none relative overflow-visible z-20">
          <div className="relative">
            <div className="p-6 h-full">
              {/* Character Info */}
              <div className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="text-red-400 text-sm font-mono uppercase tracking-wider mb-1">NAME</div>
                    <div className="text-red-300 text-xl font-mono font-bold">SONG SO MI</div>
                    <div className="w-full h-px bg-gradient-to-r from-red-500 to-transparent mt-1" />
                  </div>

                  <div>
                    <div className="text-red-400 text-sm font-mono uppercase tracking-wider mb-1">CODENAME</div>
                    <div className="text-red-300 text-lg font-mono">SONGBIRD</div>
                    <div className="w-full h-px bg-gradient-to-r from-red-500 to-transparent mt-1" />
                  </div>

                  <div>
                    <div className="text-red-400 text-sm font-mono uppercase tracking-wider mb-1">AFFILIATION</div>
                    <div className="text-red-300 text-lg font-mono">FIA</div>
                    <div className="w-full h-px bg-gradient-to-r from-red-500 to-transparent mt-1" />
                  </div>

                  <div>
                    <div className="text-red-400 text-sm font-mono uppercase tracking-wider mb-1">RECRUITMENT</div>
                    <div className="text-red-300 text-lg font-mono">SOLOMON REED; NEW YORK, NY</div>
                    <div className="w-full h-px bg-gradient-to-r from-red-500 to-transparent mt-1" />
                  </div>

                  <div>
                    <div className="text-red-400 text-sm font-mono uppercase tracking-wider mb-1">DATE OF BIRTH</div>
                    <div className="text-red-300 text-lg font-mono">12/29/2045</div>
                    <div className="w-full h-px bg-gradient-to-r from-red-500 to-transparent mt-1" />
                  </div>

                  <div>
                    <div className="text-red-400 text-sm font-mono uppercase tracking-wider mb-1">
                      LAST POSITION HELD
                    </div>
                    <div className="text-red-300 text-lg font-mono">N/A</div>
                    <div className="w-full h-px bg-gradient-to-r from-red-500 to-transparent mt-1" />
                  </div>
                </div>
                {/* Barcode SVG placeholder */}
                <svg className="mt-4 w-32 h-6" viewBox="0 0 128 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="0" width="128" height="24" fill="#1a0000" />
                  <rect x="8" y="4" width="4" height="16" fill="#ff3b3b" />
                  <rect x="16" y="4" width="2" height="16" fill="#ff3b3b" />
                  <rect x="22" y="4" width="6" height="16" fill="#ff3b3b" />
                  <rect x="32" y="4" width="2" height="16" fill="#ff3b3b" />
                  <rect x="38" y="4" width="4" height="16" fill="#ff3b3b" />
                  <rect x="46" y="4" width="2" height="16" fill="#ff3b3b" />
                  <rect x="52" y="4" width="8" height="16" fill="#ff3b3b" />
                  <rect x="64" y="4" width="2" height="16" fill="#ff3b3b" />
                  <rect x="70" y="4" width="4" height="16" fill="#ff3b3b" />
                  <rect x="78" y="4" width="2" height="16" fill="#ff3b3b" />
                  <rect x="84" y="4" width="6" height="16" fill="#ff3b3b" />
                  <rect x="94" y="4" width="2" height="16" fill="#ff3b3b" />
                  <rect x="100" y="4" width="4" height="16" fill="#ff3b3b" />
                </svg>
              </div>
            </div>
          </div>
        </Card>
      </div>
      </div>
      
      {/* Bottom Info Bar - Red with slanted right edge and text */}
      <div className="relative w-[625.5px] h-[280px] -mt-59 opacity-90">
        <div
          className="absolute inset-0 font-mono text-black"
          style={{
            background: '#ff3b3b',
            clipPath: 'polygon(100% 86%, 100% 91%, 96% 100%, 0 100%, 0 86%)',
          }}
        >
          <div className="absolute inset-0">
            <span className="absolute left-[4px] top-[243px] text-[11px]">MODEL LINE: 12.12AA</span>
            <span className="absolute left-[263px] top-[243px] text-[14px]">FIA DATABASE</span>
            <span className="absolute left-[500px] top-[246px] text-[6px] leading-tight">
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
                style={{ opacity: 0.4 }}
              />
            </div>
            <div className="absolute inset-0">
              <img 
                src="/protocol.svg" 
                alt="Protocol" 
                className="w-full h-full object-contain blur-[10px]"
                style={{ opacity: 0.6 }}
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
      </div>
      <span className="absolute left-[550px] top-[772px] text-[6.5px] leading-tight" style={{ color: '#ff3b3b' }}>
        ONLY CC35 CERTIFIED<br />
        AND DHSF 5TH CLASS OFFICERS<br />
        ARE ALLOWED TO MANIPULATE,<br />
        ACCESS OR DISABLE THIS DEVICE
      </span>
    </div>
  )
} 