"use client"

import { Card } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-950 to-black relative overflow-hidden">
      {/* Background overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent" />

      {/* Main interface container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="flex gap-8 max-w-7xl w-full">
          {/* Character Profile Panel */}
          <div className="flex-1 max-w-2xl">
            <Card className="bg-black/80 border-2 border-red-500 shadow-2xl shadow-red-500/50 backdrop-blur-sm">
              <div className="relative">
                {/* Header bar */}
                <div className="bg-red-500/20 border-b border-red-500 p-2">
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
                  </div>
                </div>

                {/* Bottom info bar */}
                <div className="bg-red-500/10 border-t border-red-500/50 p-2 flex justify-between items-center">
                  <span className="text-red-400 text-xs font-mono">MODEL: LUKE</span>
                  <span className="text-red-400 text-xs font-mono">FIA DATABASE</span>
                  <span className="text-red-400 text-xs font-mono">REV: 2.1.4</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Incident Report Panel */}
          <div className="w-96">
            <Card className="bg-black/80 border-2 border-red-500 shadow-2xl shadow-red-500/50 backdrop-blur-sm h-fit">
              <div className="relative">
                {/* Header */}
                <div className="bg-red-500/20 border-b border-red-500 p-3">
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
                </div>
              </div>
            </Card>

            {/* Additional badge/logo */}
            <div className="mt-4 flex justify-end">
              <div className="w-16 h-16 border-2 border-red-500 bg-black/80 flex items-center justify-center">
                <div className="text-red-400 font-mono text-xs text-center">
                  <div>NET</div>
                  <div>WATCH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />
    </div>
  )
}
