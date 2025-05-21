"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ChevronDown } from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import { useState, useEffect } from "react"

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Delay showing content to allow for initial typing animation
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen px-4 text-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl z-10 glass p-8 rounded-xl shadow-lg"
      >
        <h1 className="mb-4 text-4xl font-bold md:text-6xl text-violet-900 dark:text-white">
          Hi, I&apos;m <span className="text-violet-700 dark:text-violet-300">Francis Panganiban</span>
        </h1>
        <div className="h-16 mb-8 text-xl md:text-2xl text-violet-800 dark:text-violet-200">
          <TypeAnimation
            sequence={[
              "Aspiring Software Engineer",
              1000,
              "Focused on AI & Machine Learning",
              1000,
              "Building innovative solutions",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <p className="text-violet-700 dark:text-violet-100">
            Welcome to my portfolio. Scroll down to learn more about my projects and skills.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 z-10"
      >
        <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="p-2 rounded-full cursor-pointer text-violet-700 dark:text-gold-400 hover:bg-violet-100/50 dark:hover:bg-violet-800/50"
          >
            <ChevronDown size={24} />
          </motion.div>
        </ScrollLink>
      </motion.div>
    </section>
  )
}
