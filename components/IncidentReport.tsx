import { Card } from "@/components/ui/card"
import BarcodeStrip from "./BarcodeStrip"

export function IncidentReport() {
  // Spacing variables for easy adjustment
  const lineSpacing = "4px"; // Space between lines within a paragraph
  const paragraphSpacing = "6px"; // Space between paragraphs

  return (
    <div className="relative w-[450px] h-[600px] overflow-visible">
      {/* SVG for custom 5-corner polygon shape */}
      <svg
        className="absolute top-0 left-0 w-[450px] h-[600px] z-0"
        viewBox="0 0 450 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Background fill */}
        <polygon 
          points="0,0 450,0 450,565 415,600 0,600" 
          fill="#2b0607"
          opacity="1"
        />
        
        {/* Border segments with consistent visual thickness */}
        {/* Top border */}
        <line
          x1="0" y1="0" x2="450" y2="0"
          stroke="#ff5750"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        
        {/* Right border */}
        <line
          x1="450" y1="0" x2="450" y2="565"
          stroke="#ff5750"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        
        {/* Diagonal corner - reduced stroke width for visual consistency */}
        <line
          x1="450" y1="565" x2="415" y2="600"
          stroke="#ff5750"
          strokeWidth="1.4"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
        />
        
        {/* Bottom border */}
        <line
          x1="415" y1="600" x2="0" y2="600"
          stroke="#ff5750"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        
        {/* Left border */}
        <line
          x1="0" y1="600" x2="0" y2="0"
          stroke="#ff5750"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        
        {/* Tight, bright halo on the top border */}
        <polyline
          points="0,0 450,0"
          stroke="#ff5750"
          strokeWidth="4"
          fill="none"
          opacity="0.5"
        />
        
        {/* Crisp, thin top border line */}
        <polyline
          points="0,0 450,0"
          stroke="#ff5750"
          strokeWidth="2"
          fill="none"
          opacity="1"
        />
      </svg>

      {/* Content container - absolutely positioned to break layout constraints */}
      <div className="absolute top-0 left-0 w-[446px] h-[600px] z-10">
        <div className="pl-[19px] pr-[16px] py-6 h-full">
          {/* Analysis Info */}
          <div className="space-y-4 text-red-400">
            <div className="space-y-3">
              <div>
                {/* Barcode strip above the title */}
                <div className="-mt-2 mb-1">
                  <BarcodeStrip />
                </div>
                
                {/* Intercepted text */}
                <div className="text-red-400 text-[10px] font-mono uppercase tracking-wider -mt-1">
                  INTERCEPTED BY THE FIA SURVEILLANCE STATION
                </div>
                
                {/* Lambda date */}
                <div className="text-red-400 text-[10px] font-mono mb-6 -mt-0.5">
                  LAMBDA 8, 12/22/2076
                </div>
                
                <div className="text-xl font-mono font-bold uppercase -mt-1.5">INCIDENT REPORT</div>
                <div className="text-red-400 text-[6px] font-mono leading-relaxed tracking-[1.25px]">
                  THREAT LEVEL: 8
                  <br />
                  INCIDENT NO. 83475348
                  <br />
                  LOCATION: DOGTOWN
                </div>
                <div className="h-px bg-red-400 mt-2.5 -mx-[19px] ml-[-5px] mr-[130px]" />
              </div>

              <div>
                <div className="text-sm font-mono uppercase tracking-widest -mt-1.5">INCIDENT</div>
                <div className="relative inline-block">
                  <span className="absolute left-0 top-0 blur-[2px] opacity-40 text-[#ff5750] pointer-events-none select-none font-bold text-xl font-mono">ATTEMPTED BLACKWALL BREACH</span>
                  <span className="relative text-xl font-mono font-bold">ATTEMPTED BLACKWALL BREACH</span>
                </div>
                <div className="h-px bg-red-400 mt-2.5 -mx-[19px] ml-[-5px] mr-[-5px]" />
              </div>

              <div>
                <div className="text-sm font-mono uppercase tracking-widest -mt-1.5">
                  ENTITY RESPONSIBLE
                </div>
                <div className="relative inline-block">
                  <span className="absolute left-0 top-0 blur-[2px] opacity-40 text-[#ff5750] pointer-events-none select-none font-bold text-xl font-mono">UNKNOWN</span>
                  <span className="relative text-xl font-mono font-bold">UNKNOWN</span>
                </div>
                <div className="h-px bg-red-400 mt-2.5 -mx-[19px] ml-[-5px] mr-[-5px]" />
              </div>

              <div>
                <div className="text-sm font-mono uppercase tracking-widest -mt-1.5">SUMMARY</div>
                <div 
                  className="text-red-400 text-md font-mono mt-0.5"
                  style={{ 
                    lineHeight: `calc(1em + ${lineSpacing})`,
                  }}
                >
                  <div>
                    MONITORING OF TRAFFIC AROUND NODE 6470 ALPHA REVEALED A NUMBER OF ABNORMALITIES.
                  </div>
                  <div style={{ marginTop: paragraphSpacing }}>
                    AGENT RAPIDSRE REPORTED A DIS-B (BLACKWALL BREACH) WITH POSSIBLE KAT-0 (UNAUTHORIZED DATA TRANSFER).
                  </div>
                  <div style={{ marginTop: paragraphSpacing }}>
                    FURTHER INVESTIGATION UNCOVERED MULTIPLE OTHER POSSIBLE ABUSES OF AUTHORITY AND SYSTEM VULNERABILITIES. THE SCALE OF THIS ACTIVITY REMAINS UNKNOWN.
                  </div>
                  <div style={{ marginTop: paragraphSpacing }}>
                    LOGS AND DATA ANALYSIS TRANSCRIPTS ARE AVAILABLE IN DATABANK RT-552.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Netwatch box - forced to actual right edge with transform */}
      <div 
        className="absolute w-[110px] h-[110px] z-20"
        style={{ 
          top: '13px', 
          left: '327px',
          transform: 'translateX(0)'
        }}
      >
        <div className="w-full h-full bg-[#2b0607] border-2 flex items-center justify-center" style={{ borderColor: '#ff5750' }}>
          <img 
            src="/Netwatch.svg" 
            alt="Netwatch" 
            className="w-[100px] h-[100px] object-contain"
          />
        </div>
      </div>
    </div>
  )
} 