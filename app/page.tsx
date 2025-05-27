"use client"

import { Card } from "@/components/ui/card"
import { AnalysisBox } from "@/components/AnalysisBox"
import { CharacterProfile } from "@/components/CharacterProfile"

export default function Page() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-950 to-black relative overflow-hidden main-vision-mask">
        {/* Background overlay effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent" />

        {/* Main interface container */}
        <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
          <div className="flex gap-8 max-w-7xl w-half">
            {/* Character Profile Panel */}
            <CharacterProfile />

            {/* Incident Report Panel */}
            <AnalysisBox title="PSYCHO-PSYCHOLOGICAL ANALYSIS" date="LAMBDA: 02/02/2019">
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
            </AnalysisBox>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .main-vision-mask {
          mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, white 90%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, white 90%, transparent 100%);
        }
      `}</style>
    </>
  )
}
