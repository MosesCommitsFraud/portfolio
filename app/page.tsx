"use client"

import { Card } from "@/components/ui/card"
import { MugshotBox } from "@/components/MugshotBox"

export default function Page() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-950 to-black relative overflow-hidden main-vision-mask">
        {/* Background overlay effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent" />

        {/* Main interface container */}
        <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
          <div className="flex gap-8 max-w-7xl w-full">
            {/* Character Profile Panel */}
            <div className="flex-1 max-w-2xl relative">
              {/* Neon trapezoid bar, intense glow, 5/6 height, right side, correct shape */}
              <svg
                className="absolute bottom-0 z-20"
                style={{ height: '83.33%', width: '8px', top: 'calc(16.67% - 135px)', right: '-7px', position: 'absolute' }}
                viewBox="0 0 10 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="glow" x="-20" y="-20" width="50" height="1010" filterUnits="userSpaceOnUse">
                    <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#ff3b3b" floodOpacity="0.85" />
                  </filter>
                </defs>
                {/* Trapezoid: thinner, mirrored vertically */}
                <polygon
                  points="1,0 9,8 9,592 1,600"
                  fill="#ff3b3b"
                  filter="url(#glow)"
                  opacity="1.0"
                />
              </svg>
              {/* Bottom SVG shape */}
              <svg className="absolute bottom-0 left-0 w-full h-8 z-20" viewBox="0 0 400 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="16" width="400" height="16" fill="#1a0000" />
                <polygon points="0,16 20,0 380,0 400,16" fill="#1a0000" />
              </svg>
              <Card className="bg-black/80 border-2 border-red-500 shadow-none rounded-none relative overflow-visible">
                <div className="relative">
                  {/* Header bar */}
                  <div className="bg-red-500/20 border-b border-red-500 p-2 rounded-none">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-red-400 text-xs font-mono uppercase tracking-wider">
                          PSYCHO-PSYCHOLOGICAL ANALYSIS
                        </span>
                      </div>
                      <span className="text-red-400 text-xs font-mono">FIA DATABASE</span>
                    </div>
                  </div>

                  <div className="p-6 flex gap-6">
                    {/* Character Image */}
                    <div className="w-64 h-80 bg-gradient-to-b from-red-500/30 to-red-900/50 border border-red-500/50 flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=320&width=256"
                        alt="Character Portrait"
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>

                    {/* Character Info */}
                    <div className="flex-1 space-y-4">
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
                          <div className="text-red-400 text-sm font-mono uppercase tracking-wider mb-1">
                            DATE OF BIRTH
                          </div>
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

                  {/* Bottom info bar */}
                  <div className="bg-red-500/10 border-t border-red-500/50 p-2 flex justify-between items-center rounded-none">
                    <span className="text-red-400 text-xs font-mono">MODEL: LUKE</span>
                    <span className="text-red-400 text-xs font-mono">FIA DATABASE</span>
                    <span className="text-red-400 text-xs font-mono">REV: 2.1.4</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Incident Report Panel */}
            <MugshotBox title="PSYCHO-PSYCHOLOGICAL ANALYSIS" date="LAMBDA: 02/02/2019">
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
            </MugshotBox>
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
