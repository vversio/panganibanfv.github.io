"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  type: string
  images?: string[]
}

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projects: Project[] = [
    {
      id: "01",
      title: "CineGrid",
      description: "A full-stack movie-tracking web application with real-time database synchronization and user authentication.",
      tags: ["React", "Supabase"],
      type: "FULL-STACK",
      images: ["/cinegrid.png", "/cinegrid_2.png"]
    },
    {
      id: "02",
      title: "Autonomous Quant Edge",
      description: "A self-healing ETL pipeline that autonomously bypasses rate-limiting and normalizes unstructured data into a relational database using a local LLM as a parsing agent.",
      tags: ["n8n", "Qwen"],
      type: "DATA ENGINEERING",
      images: ["/quantedge.png", "/quantedge_2.png"]
    },
    {
      id: "03",
      title: "PocketPT",
      description: "An AI-driven physical therapy mobile app with real-time pose tracking and pain detection. Delivers custom rehabilitation plans.",
      tags: ["Flutter", "Python"],
      type: "AI APPLICATION",
      images: ["/pocketpt.png", "/pocketpt_2.png"]
    },
    {
      id: "04",
      title: "StatMind",
      description: "An autonomous machine learning agent using a local LLM backend to execute multi-step workflows from feature engineering to model comparison.",
      tags: ["Ollama", "Streamlit"],
      type: "AI ENGINEERING"
    },
    {
      id: "05",
      title: "Proxmox Homelab",
      description: "Bare-metal Linux server running multiple LXC containers and Docker services with secure cross-container communication and ufw firewall rules.",
      tags: ["Proxmox", "LXC"],
      type: "INFRASTRUCTURE"
    },
    {
      id: "06",
      title: "Marine Litter Forecasting",
      description: "Forecasts trash accumulation using regression and classifies severity using a Decision Tree model to inform coastal waste policy.",
      tags: ["Python", "ML"],
      type: "MACHINE LEARNING"
    },
  ]

  const openGallery = (project: Project) => {
    if (project.images && project.images.length > 0) {
      setExpandedProject(project)
      setCurrentImageIndex(0)
    }
  }

  const closeGallery = () => {
    setExpandedProject(null)
  }

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = offset.x
    
    if (swipe < -50 && expandedProject?.images) {
      // Swipe left, go to next
      setCurrentImageIndex((prev) => Math.min(prev + 1, expandedProject.images!.length - 1))
    } else if (swipe > 50 && expandedProject?.images) {
      // Swipe right, go to prev
      setCurrentImageIndex((prev) => Math.max(prev - 1, 0))
    }
  }

  return (
    <>
      <section id="projects" className="py-32 relative">
        <div className="container px-4 mx-auto max-w-5xl relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
            <div>
              <h2 className="font-mono text-sm tracking-widest text-accent uppercase mb-4">
                02 / The Work
              </h2>
              <h3 className="font-display text-4xl text-foreground tracking-tight">
                SELECTED PROJECTS
              </h3>
            </div>
          </div>

          <div className="flex flex-col">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-white/5 hover:border-accent/50 transition-colors"
              >
                <div className="md:col-span-2 flex flex-col justify-start pt-2">
                  <div className="font-mono text-xs text-foreground/40 mt-2 md:mt-0">PROJ / {project.id}</div>
                </div>
                
                <div className="md:col-span-7 flex flex-col">
                  <h4 className="font-display text-2xl text-foreground mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>

                  {project.images && project.images.length > 0 && (
                    <div 
                      className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 my-4 group-hover:border-accent/30 transition-colors cursor-pointer"
                      onClick={() => openGallery(project)}
                    >
                      <Image 
                        src={project.images[0]} 
                        alt={project.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="font-mono text-xs tracking-widest uppercase text-white bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm">
                          View Gallery ({project.images.length})
                        </span>
                      </div>
                    </div>
                  )}

                  <p className="font-body text-sm text-foreground/70 leading-relaxed mb-4 mt-2">
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-white/5 text-foreground/80 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-3 flex md:justify-end items-start mt-4 md:mt-0 pt-1">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-accent border border-accent/30 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Fullscreen Gallery Modal */}
      <AnimatePresence>
        {expandedProject && expandedProject.images && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button 
              onClick={closeGallery}
              className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors z-[110]"
            >
              <X size={32} />
            </button>

            {/* Gallery Info */}
            <div className="absolute top-8 left-8 z-[110]">
              <h4 className="font-display text-2xl text-white mb-2">{expandedProject.title}</h4>
              <p className="font-mono text-xs tracking-widest text-white/50 uppercase">{expandedProject.type}</p>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full max-w-5xl aspect-video px-4 md:px-12 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={handleDragEnd}
                  className="absolute inset-4 md:inset-12 cursor-grab active:cursor-grabbing"
                >
                  <Image 
                    src={expandedProject.images[currentImageIndex]} 
                    alt={`${expandedProject.title} Image ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows (Desktop) */}
              {currentImageIndex > 0 && (
                <button 
                  onClick={() => setCurrentImageIndex(prev => prev - 1)}
                  className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors z-[110]"
                >
                  <ChevronLeft size={24} />
                </button>
              )}
              {currentImageIndex < expandedProject.images.length - 1 && (
                <button 
                  onClick={() => setCurrentImageIndex(prev => prev + 1)}
                  className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors z-[110]"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>

            {/* Instagram-style Indicators */}
            <div className="absolute bottom-12 flex gap-2 z-[110]">
              {expandedProject.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImageIndex === idx ? "bg-accent scale-125" : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <div className="absolute bottom-6 font-mono text-[10px] text-white/40 tracking-widest">
              SWIPE TO EXPLORE
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
