"use client"

import { motion } from "framer-motion"
import { useState } from "react"

type Project = {
  id: number
  title: string
  description: string
  tags: string[]
}

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "PocketPT – AI-Driven Physical Therapy App",
      description:
        "A 3-phase injury recovery app with real-time pose tracking and pain detection using CNN and LSTM. Delivers custom rehabilitation plans using decision trees.",
      tags: ["Python", "Firebase", "React", "Pose Estimation", "ML"],
    },
    {
      id: 2,
      title: "Marine Litter Forecasting App",
      description:
        "Forecasts trash accumulation using regression and classifies severity using a Decision Tree model. Built to inform coastal waste policy with real environmental data.",
      tags: ["Python", "JavaScript", "ML", "Linear Regression"],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="container px-4 mx-auto max-w-4xl relative z-10">
        <motion.h2
          className="mb-12 text-3xl font-bold text-center text-violet-800 dark:text-violet-200 md:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="overflow-hidden glass rounded-lg shadow-lg"
              variants={item}
              layoutId={`project-${project.id}`}
              onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderColor: "hsl(45, 100%, 50%)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-violet-700 dark:text-violet-300">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium text-violet-700 dark:text-violet-200 bg-violet-100/60 dark:bg-violet-800/60 rounded-full border border-violet-200/50 dark:border-violet-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.p
                  className="text-violet-800 dark:text-violet-100"
                  initial={{ height: "4.5rem", overflow: "hidden" }}
                  animate={{
                    height: expandedId === project.id ? "auto" : "4.5rem",
                    overflow: expandedId === project.id ? "visible" : "hidden",
                  }}
                >
                  {project.description}
                </motion.p>
                <div className="mt-4 text-sm text-gold-600 dark:text-gold-400">
                  {expandedId === project.id ? "Click to collapse" : "Click to expand"}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
