import { Card } from "@/components/ui/card"

export function CharacterProfile() {
  return (
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
        <svg
          className="absolute bottom-0 z-20"
          style={{ height: '500px', width: '8px', top: '110px', right: '-7px', position: 'absolute' }}
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
        <svg className="absolute bottom-0 left-0 w-[350px] h-8 z-20" viewBox="0 0 350 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="16" width="350" height="16" fill="#1a0000" />
          <polygon points="0,16 20,0 330,0 350,16" fill="#1a0000" />
        </svg>
        <Card className="w-[350px] h-[600px] bg-black/80 border-2 border-red-500 shadow-none rounded-none relative overflow-visible">
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
          </div>
        </Card>
      </div>
    </div>
  )
} 