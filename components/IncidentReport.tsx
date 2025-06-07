import { Card } from "@/components/ui/card"

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
          points="0,0 450,0 450,550 400,600 0,600" 
          fill="#2b0607"
          opacity="1"
        />
        
        {/* Outer border polygon (red) */}
        <polygon
          points="0,0 450,0 450,565 415,600 0,600"
          stroke="#ff5750"
          strokeWidth="2"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        
        {/* Top border glow */}
        <line
          x1="5" y1="0" x2="445" y2="0"
          stroke="#ff5750"
          strokeWidth="12"
          opacity="0.4"
          className="blur-[6px]"
          strokeLinecap="round"
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
        <div className="pl-[15px] pr-[12px] py-6 h-full">
          {/* Analysis Info */}
          <div className="space-y-4 text-red-400">
            <div className="space-y-3">
              <div>
                <div className="text-sm font-mono uppercase tracking-widest -mt-1.5">PSYCHO-PSYCHOLOGICAL ANALYSIS</div>
                <div className="relative inline-block">
                  <span className="absolute left-0 top-0 blur-[2px] opacity-40 text-[#ff5750] pointer-events-none select-none font-bold text-xl font-mono">LAMBDA: 02/02/2019</span>
                  <span className="relative text-xl font-mono font-bold">LAMBDA: 02/02/2019</span>
                </div>
                <div className="w-full h-px bg-red-400 mt-2.5" />
              </div>

              <div>
                <div className="text-sm font-mono uppercase tracking-widest -mt-1.5">INCIDENT REPORT</div>
                <div className="relative inline-block">
                  <span className="absolute left-0 top-0 blur-[1px] opacity-40 text-[#ff5750] pointer-events-none select-none font-bold text-lg font-mono">AGENT: SONG SO MI</span>
                  <span className="relative text-lg font-mono font-bold">AGENT: SONG SO MI</span>
                </div>
                <div className="text-red-400 text-sm font-mono leading-relaxed mt-2">
                  REF: 2077.02.14
                  <br />
                  LOC: DOGTOWN
                </div>
                <div className="w-full h-px bg-red-400 mt-2.5" />
              </div>

              <div>
                <div className="text-sm font-mono uppercase tracking-widest -mt-1.5">INCIDENT</div>
                <div className="relative inline-block">
                  <span className="absolute left-0 top-0 blur-[2px] opacity-40 text-[#ff5750] pointer-events-none select-none font-bold text-lg font-mono">ATTEMPTED BLACKWALL BREACH</span>
                  <span className="relative text-lg font-mono font-bold">ATTEMPTED BLACKWALL BREACH</span>
                </div>
                <div className="w-full h-px bg-red-400 mt-2.5" />
              </div>

              <div>
                <div className="text-sm font-mono uppercase tracking-widest -mt-1.5">
                  ENTITY RESPONSIBLE
                </div>
                <div className="relative inline-block">
                  <span className="absolute left-0 top-0 blur-[2px] opacity-40 text-[#ff5750] pointer-events-none select-none font-bold text-lg font-mono">UNKNOWN</span>
                  <span className="relative text-lg font-mono font-bold">UNKNOWN</span>
                </div>
                <div className="w-full h-px bg-red-400 mt-2.5" />
              </div>

              <div>
                <div className="text-sm font-mono uppercase tracking-widest -mt-1.5">SUMMARY</div>
                <div 
                  className="text-red-400 text-md font-mono mt-2"
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
    </div>
  )
} 