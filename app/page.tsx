"use client"

import { Card } from "@/components/ui/card"
import { CharacterProfile } from "@/components/CharacterProfile"
import { IncidentReport } from "@/components/IncidentReport"

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
            <IncidentReport />
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
