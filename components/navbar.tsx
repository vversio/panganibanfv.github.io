"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link as ScrollLink } from "react-scroll"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center py-4 transition-all duration-300 ${
        scrolled
          ? "bg-white/50 dark:bg-violet-950/50 backdrop-blur-md shadow-md border-b border-violet-200/50 dark:border-violet-800/30"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex space-x-8">
        {navLinks.map((link) => (
          <ScrollLink
            key={link.name}
            to={link.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="relative px-2 py-1 text-violet-700 dark:text-violet-200 cursor-pointer group"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 dark:bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
          </ScrollLink>
        ))}
      </div>
    </motion.nav>
  )
}
