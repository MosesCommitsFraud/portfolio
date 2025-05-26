"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Terminal, User, Code, Mail, Github, Linkedin, ExternalLink } from "lucide-react"

export function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")

  const projects = [
    {
      title: "Neural Network Dashboard",
      description: "Real-time AI monitoring system with cyberpunk aesthetics",
      tech: ["React", "TypeScript", "WebGL"],
      status: "ACTIVE",
    },
    {
      title: "Quantum Data Processor",
      description: "High-performance data visualization tool",
      tech: ["Next.js", "D3.js", "WebAssembly"],
      status: "DEPLOYED",
    },
    {
      title: "Holographic Interface",
      description: "3D interactive user interface prototype",
      tech: ["Three.js", "React", "Shaders"],
      status: "BETA",
    },
  ]

  const skills = [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js",
    "Python",
    "WebGL/Three.js",
    "Cybersecurity",
    "AI/ML",
    "Blockchain",
  ]

  return (
    <div className="min-h-screen bg-black text-cyan-400 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-magenta-500/20" />
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="border border-cyan-500/10" />
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-cyan-500/30 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-cyan-400" />
              <span className="font-mono text-xl font-bold">NETRUNNER.DEV</span>
            </div>
            <nav className="flex space-x-6">
              {["about", "projects", "skills", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`font-mono uppercase tracking-wider transition-colors hover:text-magenta-400 ${
                    activeSection === section ? "text-magenta-400" : "text-cyan-400"
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 container mx-auto px-6 py-12">
        {activeSection === "about" && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h1 className="text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-magenta-400 to-yellow-400">
                ALEX CHEN
              </h1>
              <p className="text-xl text-cyan-300 font-mono">FULL-STACK NETRUNNER</p>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400 mx-auto" />
            </div>

            <Card className="bg-black/60 border-cyan-500/30 backdrop-blur-sm">
              <div className="p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <User className="w-5 h-5 text-cyan-400" />
                  <span className="font-mono text-cyan-400 uppercase tracking-wider">Bio.exe</span>
                </div>
                <p className="text-cyan-300 leading-relaxed font-mono">
                  {"> "} Experienced full-stack developer specializing in cutting-edge web technologies.
                  <br />
                  {"> "} Passionate about creating immersive digital experiences and cyberpunk aesthetics.
                  <br />
                  {"> "} Currently exploring the intersection of AI, blockchain, and human-computer interaction.
                </p>
              </div>
            </Card>
          </div>
        )}

        {activeSection === "projects" && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-mono font-bold text-cyan-400 mb-8">{"> "} ACTIVE_PROJECTS.LOG</h2>
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-black/60 border-cyan-500/30 backdrop-blur-sm hover:border-magenta-400/50 transition-colors"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-mono font-bold text-cyan-400">{project.title}</h3>
                      <Badge
                        variant="outline"
                        className={`font-mono ${
                          project.status === "ACTIVE"
                            ? "border-green-400 text-green-400"
                            : project.status === "DEPLOYED"
                              ? "border-cyan-400 text-cyan-400"
                              : "border-yellow-400 text-yellow-400"
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-cyan-300 mb-4 font-mono">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-magenta-500/20 text-magenta-300 border-magenta-500/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      ACCESS PROJECT
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === "skills" && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-mono font-bold text-cyan-400 mb-8">{"> "} SKILL_MATRIX.DAT</h2>
            <Card className="bg-black/60 border-cyan-500/30 backdrop-blur-sm">
              <div className="p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <Code className="w-5 h-5 text-cyan-400" />
                  <span className="font-mono text-cyan-400 uppercase tracking-wider">Core Abilities</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="p-4 border border-cyan-500/30 bg-black/40 hover:border-magenta-400/50 transition-colors"
                    >
                      <span className="font-mono text-cyan-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeSection === "contact" && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-mono font-bold text-cyan-400 mb-8">{"> "} ESTABLISH_CONNECTION.EXE</h2>
            <Card className="bg-black/60 border-cyan-500/30 backdrop-blur-sm">
              <div className="p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="font-mono text-cyan-400 uppercase tracking-wider">Contact Protocols</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5 text-magenta-400" />
                    <span className="font-mono text-cyan-300">alex.chen@netrunner.dev</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Github className="w-5 h-5 text-magenta-400" />
                    <span className="font-mono text-cyan-300">github.com/alexchen</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Linkedin className="w-5 h-5 text-magenta-400" />
                    <span className="font-mono text-cyan-300">linkedin.com/in/alexchen</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-cyan-500 to-magenta-500 text-black font-mono font-bold hover:from-cyan-400 hover:to-magenta-400">
                    INITIATE CONTACT
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </main>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
