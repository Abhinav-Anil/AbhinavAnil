"use client"

import type React from "react"

import { useState, useRef } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Footer from "@/components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  const handleNavigation = (section: string) => {
    setActiveSection(section)

    const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      about: aboutRef,
      experience: experienceRef,
      projects: projectsRef,
      skills: skillsRef,
    }

    const targetRef = refs[section]
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background text-foreground">
        <Navigation activeSection={activeSection} setActiveSection={handleNavigation} />
        <Hero />
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  )
}
