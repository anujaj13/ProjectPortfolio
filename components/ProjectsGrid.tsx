'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/lib/data'
import ProjectCard from './ProjectCard'

interface ProjectsGridProps {
  projects: Project[]
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [selectedComplexity, setSelectedComplexity] = useState<string>('All')
  const [selectedDomain, setSelectedDomain] = useState<string>('All')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const domains = useMemo(() => {
    const unique = new Set(projects.map(p => p.domain.split('/')[0].trim()))
    return ['All', ...Array.from(unique).sort()]
  }, [projects])

  const filtered = useMemo(() => {
    return projects.filter(project => {
      const complexityMatch = selectedComplexity === 'All' || project.complexity === selectedComplexity
      const domainMatch = selectedDomain === 'All' || project.domain.toLowerCase().includes(selectedDomain.toLowerCase())
      const searchMatch = searchTerm === '' || (
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(t => t.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      return complexityMatch && domainMatch && searchMatch
    })
  }, [projects, selectedComplexity, selectedDomain, searchTerm])

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-space-mono text-sm text-accent-primary uppercase tracking-widest mb-4">
            03 — Featured Projects
          </p>
          <h2 className="text-5xl md:text-6xl font-bold font-syne text-gray-900">
            Automation <span className="text-accent-primary">Portfolio</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <input
              type="text"
              placeholder="🔍 Search projects, tech, tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-accent-primary/50 focus:bg-accent-primary/5 transition font-space-mono text-sm"
            />
            
            {/* Domain filter */}
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-accent-primary/50 font-space-mono text-sm"
            >
              {domains.map(domain => (
                <option key={domain} value={domain}>{domain}</option>
              ))}
            </select>

            {/* Complexity filter */}
            <select
              value={selectedComplexity}
              onChange={(e) => setSelectedComplexity(e.target.value)}
              className="px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-accent-primary/50 font-space-mono text-sm"
            >
              <option value="All">All Complexities</option>
              <option value="Critical">Critical</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
            </select>
          </div>

          {/* Results count */}
          <div className="font-space-mono text-xs text-gray-600 uppercase tracking-wider">
            Showing {filtered.length} of {projects.length} projects
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-400 text-lg">No projects match your filters. Try adjusting your search.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
