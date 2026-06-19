'use client'

import { motion } from 'framer-motion'
import { Developer } from '@/lib/data'

interface HeroProps {
  developer: Developer
  onContactClick: () => void
}

export default function Hero({ developer, onContactClick }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `
              linear-gradient(rgba(79,70,229,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(79,70,229,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Glowing orbs */}
        <motion.div
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-10 w-96 h-96 bg-accent-primary/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-accent-secondary/8 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-8">
          <span className="px-4 py-2 bg-accent-primary/10 border border-accent-primary/25 rounded-full font-space-mono text-xs text-accent-primary tracking-widest">
            ⚡ AUTOMATION ANYWHERE · RPA DEVELOPER
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl lg:text-8xl font-bold font-poppins mb-6 leading-relaxed"
        >
          <span className="text-gray-900">{developer.name.split(' ')[0]}</span>
          <br />
          <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
            {developer.name.split(' ')[1]}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.div variants={itemVariants} className="mb-6">
          <p className="text-lg md:text-2xl text-accent-primary font-poppins font-semibold">
            {developer.title} · {developer.experience_years}+ Years
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8 leading-relaxed"
        >
          {developer.tagline}
        </motion.p>

        {/* Certifications */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-12">
          {developer.certifications.map((cert, i) => (
            <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg font-space-mono text-xs text-gray-300 hover:bg-accent-primary/10 hover:border-accent-primary/30 transition">
              ✓ {cert.split(' ')[0]}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex gap-4">
          <a
            href="https://github.com/anujaj13/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-accent-primary text-white font-poppins font-bold rounded-lg hover:shadow-lg hover:shadow-accent-primary/50 transition transform hover:scale-105"
          >
            View My Work
          </a>
          <button
            onClick={onContactClick}
            className="px-8 py-4 border border-accent-primary/50 text-accent-primary font-poppins font-bold rounded-lg hover:bg-accent-primary/10 transition"
          >
            Get in Touch
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
