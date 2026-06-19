'use client'

import { motion } from 'framer-motion'
import { Developer } from '@/lib/data'

interface StatsBarProps {
  stats: Developer['stats']
}

export default function StatsBar({ stats }: StatsBarProps) {
  const statsArray = [
    { label: 'Projects Delivered', value: stats.projects_delivered, color: 'text-accent-primary' },
    { label: 'Bots in Production', value: stats.bots_in_production, color: 'text-gray-900' },
    { label: 'Annual Hours Saved', value: stats.annual_hours_saved, color: 'text-accent-secondary' },
    { label: 'Accuracy Rate', value: stats.accuracy_rate, color: 'text-gray-900' },
    { label: 'Cost Savings', value: stats.cost_savings, color: 'text-accent-tertiary' },
    { label: 'Uptime SLA', value: stats.uptime, color: 'text-gray-900' },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-light-50 via-light-100 to-light-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {statsArray.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-accent-primary/50 hover:bg-accent-primary/5 transition shadow-sm"
            >
              <div className={`text-3xl md:text-4xl font-bold font-poppins mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="font-space-mono text-xs text-gray-600 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
