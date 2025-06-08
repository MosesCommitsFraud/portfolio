"use client"

import { CharacterProfile } from "@/components/CharacterProfile"
import { IncidentReport } from "@/components/IncidentReport"

export default function Page() {
  return (
    <>
      {/* 2. Remove the gradient classes from this div */}
      <div className="min-h-screen relative overflow-hidden main-vision-mask">
        <div className="relative z-10 flex items-center justify-center min-h-screen w-full px-8">
          <div className="flex -space-x-18" style={{ transform: 'translateX(-37.5px)' }}>
            <CharacterProfile />
            <IncidentReport />
          </div>
        </div>
      </div>
    </>
  )
}