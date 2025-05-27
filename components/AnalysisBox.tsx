import { Card } from "@/components/ui/card"

interface AnalysisBoxProps {
  title: string
  date?: string
  children: React.ReactNode
}

export function AnalysisBox({ title, date, children }: AnalysisBoxProps) {
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
                {title}
              </span>
            </div>
            {date && (
              <div className="text-red-400 text-xs font-mono mt-1">{date}</div>
            )}
          </div>

          <div className="p-4 space-y-4">
            {children}
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