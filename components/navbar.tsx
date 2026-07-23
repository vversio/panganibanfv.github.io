"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link as ScrollLink } from "react-scroll"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "ABOUT", to: "about" },
    { name: "PROJECTS", to: "projects" },
    { name: "CONTACT", to: "contact" },
  ]

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        className={`pointer-events-auto flex items-center justify-between px-2 py-2 rounded-full transition-all duration-300 border ${
          scrolled ? "glass" : "bg-transparent border-transparent"
        }`}
        style={{ width: "100%", maxWidth: "800px" }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="pl-6 font-mono text-xs text-foreground tracking-widest uppercase">
          FRANCIS / 26
        </div>
        
        <div className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-xs font-sans font-bold tracking-[0.2em] text-foreground hover:text-accent cursor-pointer transition-colors"
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>

        <ScrollLink
          to="contact"
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer bg-accent text-accent-foreground px-6 py-2 rounded-full text-xs font-sans font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors"
        >
          CONNECT
        </ScrollLink>
      </motion.nav>
    </div>
  )
}
