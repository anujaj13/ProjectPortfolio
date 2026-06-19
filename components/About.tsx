'use client'

import { motion } from 'framer-motion'
import { Developer } from '@/lib/data'

interface AboutProps {
  developer: Developer
}

export default function About({ developer }: AboutProps) {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-space-mono text-sm text-accent-primary uppercase tracking-widest mb-4">
            02 — About Me
          </p>
          <h2 className="text-5xl md:text-6xl font-bold font-syne text-gray-900">
            The Developer <span className="text-accent-primary">Behind the Bots</span>
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: About text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              {developer.about}
            </p>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-bold font-syne text-gray-900 mb-4">Technology Arsenal</h3>
              <div className="flex flex-wrap gap-3">
                {developer.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="px-4 py-2 bg-accent-primary/10 border border-accent-primary/25 rounded-full font-space-mono text-xs text-accent-primary hover:bg-accent-primary/15 transition"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-200 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold font-syne text-accent-primary uppercase tracking-widest mb-8">
              Certifications
            </h3>

            <div className="space-y-6">
              {developer.certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-accent-primary flex-shrink-0 mt-2" />
                  <div>
                    <p className="text-gray-800 font-syne font-semibold">{cert}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
