'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import About from '@/components/About'
import ProjectsGrid from '@/components/ProjectsGrid'
import ContactModal from '@/components/ContactModal'
import Footer from '@/components/Footer'
import { DEVELOPER, PROJECTS } from '@/lib/data'

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <Header onContactClick={() => setIsContactOpen(true)} />
      <Hero developer={DEVELOPER} onContactClick={() => setIsContactOpen(true)} />
      <StatsBar stats={DEVELOPER.stats} />
      <About developer={DEVELOPER} />
      <ProjectsGrid projects={PROJECTS} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <Footer />
    </main>
  )
}
