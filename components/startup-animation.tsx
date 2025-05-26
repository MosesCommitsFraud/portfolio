"use client"

import { useState, useEffect } from "react"

export function StartupAnimation() {
  const [currentStep, setCurrentStep] = useState(0)
  const [text, setText] = useState("")

  const bootSequence = [
    "INITIALIZING NEURAL INTERFACE...",
    "LOADING PERSONALITY MATRIX...",
    "ESTABLISHING SECURE CONNECTION...",
    "WELCOME TO THE NET, SAMURAI.",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < bootSequence.length - 1) {
          return prev + 1
        }
        return prev
      })
    }, 800)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (currentStep < bootSequence.length) {
      let index = 0
      const typeInterval = setInterval(() => {
        setText(bootSequence[currentStep].slice(0, index))
        index++
        if (index > bootSequence[currentStep].length) {
          clearInterval(typeInterval)
        }
      }, 50)

      return () => clearInterval(typeInterval)
    }
  }, [currentStep])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-cyan-500/20" />
          ))}
        </div>
      </div>

      {/* Glitch overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent animate-pulse" />

      <div className="text-center z-10">
        {/* Logo/Title */}
        <div className="mb-8">
          <h1 className="text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-400 glitch-text">
            PORTFOLIO.EXE
          </h1>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-4 animate-pulse" />
        </div>

        {/* Boot sequence */}
        <div className="space-y-4 min-h-[200px]">
          {bootSequence.map((line, index) => (
            <div
              key={index}
              className={`font-mono text-lg transition-opacity duration-500 ${
                index <= currentStep ? "opacity-100" : "opacity-30"
              } ${index === currentStep ? "text-cyan-400" : index < currentStep ? "text-green-400" : "text-gray-600"}`}
            >
              {index === currentStep ? (
                <span>
                  {"> "}
                  {text}
                  <span className="animate-pulse">_</span>
                </span>
              ) : index < currentStep ? (
                <span>
                  {"> "}
                  {line} ✓
                </span>
              ) : (
                <span>
                  {"> "}
                  {line}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-8 w-96 mx-auto">
          <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-magenta-400 transition-all duration-1000 ease-out"
              style={{ width: `${((currentStep + 1) / bootSequence.length) * 100}%` }}
            />
          </div>
          <div className="text-cyan-400 font-mono text-sm mt-2">
            {Math.round(((currentStep + 1) / bootSequence.length) * 100)}% COMPLETE
          </div>
        </div>
      </div>

      <style jsx>{`
        .glitch-text {
          animation: glitch 2s infinite;
        }
        
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
      `}</style>
    </div>
  )
}
