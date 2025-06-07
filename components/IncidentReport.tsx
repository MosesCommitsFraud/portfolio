import { Card } from "@/components/ui/card"

export function IncidentReport() {
  return (
    <div className="w-96 relative">
      {/* Bottom SVG shape */}
      <svg className="absolute bottom-0 left-0 w-full h-8 z-20" viewBox="0 0 400 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="16" width="400" height="16" fill="#1a0000" />
        <polygon points="0,16 20,0 380,0 400,16" fill="#1a0000" />
      </svg>
      <Card className="bg-black/80 border-2 border-red-500 shadow-none rounded-none h-fit relative overflow-visible">
        <div className="relative">
          {/* Header */}
          <div className="bg-red-500/20 border-b border-red-500 p-3 rounded-none">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-xs font-mono uppercase tracking-wider">
                PSYCHO-PSYCHOLOGICAL ANALYSIS
              </span>
            </div>
            <div className="text-red-400 text-xs font-mono mt-1">LAMBDA: 02/02/2019</div>
          </div>

          <div className="p-4 space-y-4">
            <div>
              <div className="text-red-400 text-sm font-mono uppercase tracking-wider mb-2">INCIDENT REPORT</div>
              <div className="text-red-300 text-xs font-mono leading-relaxed">
                AGENT: SONG SO MI
                <br />
                REF: 2077.02.14
                <br />
                LOC: DOGTOWN
              </div>
            </div>

            <div>
              <div className="text-red-400 text-sm font-mono uppercase tracking-wider mb-2">INCIDENT</div>
              <div className="text-red-300 text-lg font-mono font-bold">ATTEMPTED BLACKWALL BREACH</div>
              <div className="w-full h-px bg-gradient-to-r from-red-500 to-transparent mt-1" />
            </div>

            <div>
              <div className="text-red-400 text-sm font-mono uppercase tracking-wider mb-2">
                ENTITY RESPONSIBLE
              </div>
              <div className="text-red-300 text-lg font-mono">UNKNOWN</div>
              <div className="w-full h-px bg-gradient-to-r from-red-500 to-transparent mt-1" />
            </div>

            <div>
              <div className="text-red-400 text-sm font-mono uppercase tracking-wider mb-2">SUMMARY</div>
              <div className="text-red-300 text-xs font-mono leading-relaxed">
                MONITORING OF TRAFFIC AROUND NODE 6470 ALPHA REVEALED
                <br />A NUMBER OF ABNORMALITIES.
                <br />
                <br />
                AGENT RAPIDSRE REPORTED A DIS-B (BLACKWALL BREACH)
                <br />
                WITH POSSIBLE KAT-0 (UNAUTHORIZED DATA TRANSFER).
                <br />
                FURTHER INVESTIGATION UNCOVERED MULTIPLE OTHER
                <br />
                POSSIBLE ABUSES OF AUTHORITY. THE SCALE OF THIS ACTIVITY
                <br />
                REMAINS UNKNOWN.
                <br />
                <br />
                LOGS AND DATA ANALYSIS TRANSCRIPTS ARE AVAILABLE IN
                <br />
                DATABANK RT-552.
              </div>
            </div>
            {/* Barcode SVG */}
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
      </Card>
      {/* Additional badge/logo as SVG */}
      <div className="mt-4 flex justify-end">
        <svg className="w-16 h-16 border-2 border-red-500 bg-black/80 p-2" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" stroke="#ff3b3b" strokeWidth="2" fill="#1a0000" />
          <text x="32" y="36" textAnchor="middle" fill="#ff3b3b" fontFamily="monospace" fontSize="12">NET</text>
          <text x="32" y="50" textAnchor="middle" fill="#ff3b3b" fontFamily="monospace" fontSize="12">WATCH</text>
        </svg>
      </div>
    </div>
  )
} 