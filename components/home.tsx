"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Link as ScrollLink } from "react-scroll"

export default function Home() {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden pt-20">

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 text-center w-full px-4 flex flex-col items-center"
      >
        <h1 className="font-display text-[12vw] leading-[0.85] text-foreground tracking-tighter m-0 whitespace-nowrap uppercase">
          FRANCIS
        </h1>
        <h1 className="font-display text-[12vw] leading-[0.85] text-accent tracking-tighter m-0 whitespace-nowrap uppercase">
          PANGANIBAN
        </h1>

        <div className="mt-16 flex flex-col md:flex-row items-center gap-8 md:gap-16 font-mono text-sm tracking-widest uppercase text-foreground/70">
          <div className="flex flex-col items-center border-foreground/20 md:pl-16">
            <span className="text-accent mb-1">ROLE</span>
            <span>AI/SOFTWARE ENGINEER</span>
          </div>

          <div className="flex flex-col items-center border-foreground/20 md:pl-16">
            <span className="text-accent mb-1">LOCATION</span>
            <span>TAGAYTAY, PH</span>
          </div>
        </div>
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
            className="p-2 rounded-full cursor-pointer text-foreground hover:text-accent transition-colors"
          >
            <ChevronDown size={32} strokeWidth={1.5} />
          </motion.div>
        </ScrollLink>
      </motion.div>
    </section>
  )
}
