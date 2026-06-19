'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          {/* Brand */}
          <div className="text-2xl font-bold font-poppins">
            <span className="text-gray-900">Anuj</span>
            <span className="text-accent-primary">.</span>
            <span className="text-gray-900">dev</span>
          </div>

          {/* Links */}
          <div className="flex gap-8 font-space-mono text-sm text-gray-600">
            <a href="https://github.com/anujaj13/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-primary transition">GitHub</a>
            <a href="https://www.linkedin.com/in/anuj-a-j/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-primary transition">LinkedIn</a>
            <a href="mailto:anuj2020.ak@gmail.com" className="hover:text-accent-primary transition">Email</a>
          </div>

          {/* Credit */}
          <div className="font-space-mono text-xs text-gray-500">
            Built with <span className="text-accent-primary">Next.js</span> & Tailwind
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-gray-200 text-center font-space-mono text-xs text-gray-500"
        >
          <p>© 2025 Anuj Kumar. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
