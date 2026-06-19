'use client'

import { motion } from 'framer-motion'
import { Project } from '@/lib/data'
import Link from 'next/link'

interface ProjectCardProps {
  project: Project
  index: number
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

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <Link href={`/projects/${project.id}`}>
        <div className="h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-accent-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/10 cursor-pointer flex flex-col">
          {/* Accent bar */}
          <div
            className="h-1 w-full"
            style={{ background: `linear-gradient(90deg, ${project.accent_color}, transparent)` }}
          />

          {/* Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex justify-between items-start gap-4 mb-4">
              <span className="text-4xl">{project.icon}</span>
              <div className="flex gap-2">
                <span className={`px-3 py-1 rounded-full font-space-mono text-xs font-bold border ${complexityColors[project.complexity]}`}>
                  {project.complexity}
                </span>
                <span className="px-3 py-1 rounded-full font-space-mono text-xs font-bold bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/25">
                  ● Live
                </span>
              </div>
            </div>
            <div className="font-space-mono text-xs text-accent-primary mb-2 uppercase tracking-wider">
              {project.domain.split('/')[0]}
            </div>
            <h3 className="text-xl font-bold font-poppins text-gray-900 group-hover:text-accent-primary transition">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{project.subtitle}</p>
          </div>

          {/* Body */}
          <div className="p-6 flex-1 flex flex-col">
            <p className="text-sm text-gray-700 line-clamp-3 mb-4">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-lg font-space-mono text-xs border ${techCategoryColors[tech.category]}`}
                >
                  {tech.name}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-3 py-1 rounded-lg font-space-mono text-xs bg-gray-100 border border-gray-300 text-gray-700">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="font-space-mono text-xs text-gray-600 uppercase mb-1">Challenge</div>
                <p className="text-xs text-gray-700 line-clamp-2">{project.challenge.substring(0, 60)}…</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="font-space-mono text-xs text-gray-600 uppercase mb-1">Outcome</div>
                <p className="text-xs text-gray-700 line-clamp-2">{project.outcome.substring(0, 60)}…</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100">
              {project.tags.slice(0, 3).map((tag, i) => (
                <span key={i} className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs text-gray-700 font-space-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 group-hover:bg-accent-primary/10 transition">
            <span className="text-sm font-poppins font-semibold text-accent-primary group-hover:text-accent-primary transition">
              View Case Study ↗
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
