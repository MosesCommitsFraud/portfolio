import { Card } from "@/components/ui/card"

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
            <defs>
              {/* Brighter radial glow in all directions */}
              <filter id="radial-glow" x="-800%" y="-500%" width="1700%" height="1100%" filterUnits="objectBoundingBox">
                {/* Outer glow layer - much brighter and extends further */}
                <feGaussianBlur stdDeviation="40" result="glow1" />
                <feFlood floodColor="#ff3b3b" floodOpacity="0.15" result="color1" />
                <feComposite in="color1" in2="glow1" operator="in" result="coloredGlow1" />

                {/* Medium glow layer */}
                <feGaussianBlur stdDeviation="20" result="glow2" />
                <feFlood floodColor="#ff3b3b" floodOpacity="0.4" result="color2" />
                <feComposite in="color2" in2="glow2" operator="in" result="coloredGlow2" />

                {/* Inner glow layer */}
                <feGaussianBlur stdDeviation="12" result="glow3" />
                <feFlood floodColor="#ff3b3b" floodOpacity="0.8" result="color3" />
                <feComposite in="color3" in2="glow3" operator="in" result="coloredGlow3" />

                {/* Close glow layer */}
                <feGaussianBlur stdDeviation="6" result="glow4" />
                <feFlood floodColor="#ff3b3b" floodOpacity="1.0" result="color4" />
                <feComposite in="color4" in2="glow4" operator="in" result="coloredGlow4" />

                <feMerge>
                  <feMergeNode in="coloredGlow1" />
                  <feMergeNode in="coloredGlow2" />
                  <feMergeNode in="coloredGlow3" />
                  <feMergeNode in="coloredGlow4" />
                </feMerge>
              </filter>

              {/* Brighter radial pulse */}
              <filter
                id="radial-pulse"
                x="-900%"
                y="-600%"
                width="1900%"
                height="1300%"
                filterUnits="objectBoundingBox"
              >
                <feGaussianBlur result="pulse">
                  <animate attributeName="stdDeviation" values="25;40;25" dur="4s" repeatCount="indefinite" />
                </feGaussianBlur>
                <feFlood floodOpacity="0.4" result="pulseColor">
                  <animate
                    attributeName="flood-color"
                    values="#ff3b3b;#ff5555;#ff3b3b"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </feFlood>
                <feComposite in="pulseColor" in2="pulse" operator="in" />
              </filter>
            </defs>

            {/* Position the light bar in center of expanded viewBox */}
            <g transform="translate(95, 0)">
              {/* Background pulse glow - radiates in all directions */}
              <polygon points="1,0 9,8 9,592 1,600" fill="#ff3b3b" filter="url(#radial-pulse)" />

              {/* Main glow layer - radiates in all directions */}
              <polygon points="1,0 9,8 9,592 1,600" fill="#ff3b3b" filter="url(#radial-glow)" />

              {/* Sharp, unblurred main shape */}
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
      <div
        className="h-[280px] z-50 px-4 font-mono text-black -mt-59"
        style={{
          width: '625.5px', // 275px + 0.5px + 350px
          background: '#ff3b3b',
          clipPath: 'polygon(100% 86%, 100% 91%, 96% 100%, 0 100%, 0 86%)',
        }}
      >
        <span className="font-bold text-xs absolute left-4 top-4">MODEL LINE: 12.12AA</span>
        <span className="font-bold text-xs absolute left-1/2 top-4 -translate-x-1/2">FIA DATABASE</span>
        <span className="text-right text-[10px] leading-tight absolute right-4 top-4">
          IMAGE NAME: NUX-131010<br />
          IMAGE TYPE: ARM LINUX KERNEL IMAGE<br />
          (LZO COMPRESSED)<br />
          LOAD ADDRESS: 0x02000000
        </span>
      </div>
    </div>
  )
} 