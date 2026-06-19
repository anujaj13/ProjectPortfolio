'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PROJECTS } from '@/lib/data'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface PageProps {
  params: {
    id: string
  }
}

const complexityColors = {
  Critical: 'bg-red-100 text-red-700 border-red-300',
  High: 'bg-orange-100 text-orange-700 border-orange-300',
  Medium: 'bg-cyan-100 text-cyan-700 border-cyan-300',
}

const techCategoryColors = {
  rpa: 'bg-accent-primary/10 text-accent-primary border-accent-primary/30',
  platform: 'bg-accent-tertiary/10 text-accent-tertiary border-accent-tertiary/30',
  integration: 'bg-accent-secondary/10 text-accent-secondary border-accent-secondary/30',
  analytics: 'bg-purple-100 text-purple-700 border-purple-300',
}

export default function CaseStudy({ params }: PageProps) {
  const projectId = parseInt(params.id, 10)
  const project = PROJECTS.find(p => p.id === projectId)
  
  if (!project) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold font-poppins mb-4">Project Not Found</h1>
            <Link href="/" className="text-accent-primary hover:underline">
              Back to Portfolio
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const relatedProjects = PROJECTS.filter(
    p => p.id !== projectId && p.domain.split('/')[0] === project.domain.split('/')[0]
  ).slice(0, 2)

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="relative min-h-[60vh] pt-32 pb-16 px-6 overflow-hidden flex items-center border-b border-gray-200">
        <div className="absolute inset-0 opacity-3" style={{
          backgroundImage: `
            linear-gradient(rgba(79,70,229,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,70,229,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto w-full"
        >
          <Link href="/" className="text-accent-primary hover:text-accent-primary/80 transition mb-6 inline-block font-space-mono text-sm">
            ← Back to Projects
          </Link>
          
          <div className="flex items-start gap-6 mb-8">
            <span className="text-6xl">{project.icon}</span>
            <div className="flex-1">
              <div className="flex gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full font-space-mono text-xs font-bold border ${complexityColors[project.complexity]}`}>
                  {project.complexity}
                </span>
                <span className="px-3 py-1 rounded-full font-space-mono text-xs font-bold bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/25">
                  ● {project.status.split('—')[1].trim()}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-3 text-gray-900">
                {project.title}
              </h1>
              <p className="text-lg text-gray-600">{project.subtitle}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="md:col-span-2 space-y-12">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold font-poppins mb-4 text-accent-primary">Challenge</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{project.challenge}</p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-3xl font-bold font-poppins mb-4 text-accent-primary">Solution</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{project.solution}</p>
              </motion.div>

              {/* Outcome */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold font-syne mb-4 text-accent-secondary">Outcome</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{project.outcome}</p>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold font-syne mb-6 text-gray-900">Tech Stack</h2>
                <div className="grid grid-cols-2 gap-3">
                  {project.technologies.map((tech, i) => (
                    <div
                      key={i}
                      className={`px-4 py-3 rounded-lg border font-space-mono text-sm ${techCategoryColors[tech.category]}`}
                    >
                      <span className="font-bold">◆</span> {tech.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project info box */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="sticky top-32 bg-white border border-gray-200 rounded-xl p-6 space-y-6"
              >
                <div>
                  <p className="font-space-mono text-xs text-gray-600 uppercase tracking-wider mb-2">Client Type</p>
                  <p className="text-lg font-syne text-gray-900">{project.client_type}</p>
                </div>

                <div>
                  <p className="font-space-mono text-xs text-gray-600 uppercase tracking-wider mb-2">Domain</p>
                  <p className="text-lg font-syne text-accent-primary">{project.domain}</p>
                </div>

                <div>
                  <p className="font-space-mono text-xs text-gray-600 uppercase tracking-wider mb-2">Status</p>
                  <p className="text-lg font-syne text-accent-secondary">{project.status}</p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="font-space-mono text-xs text-gray-600 uppercase tracking-wider mb-3">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs text-gray-700 font-space-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 px-6 border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold font-syne mb-12 text-gray-900"
            >
              Related <span className="text-accent-primary">Projects</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {relatedProjects.map((p) => (
                <Link key={p.id} href={`/projects/${p.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -4 }}
                    className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-accent-primary/50 hover:bg-accent-primary/5 transition cursor-pointer"
                  >
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <span className="text-3xl">{p.icon}</span>
                      <span className={`px-2 py-1 rounded text-xs font-bold border ${complexityColors[p.complexity]}`}>
                        {p.complexity}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold font-syne text-gray-900 group-hover:text-accent-primary transition">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">{p.subtitle}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
