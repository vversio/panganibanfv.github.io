"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface TypedHeadingProps {
  text: string
  className?: string
  delay?: number
}

export default function TypedHeading({ text, className = "", delay = 0 }: TypedHeadingProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView && !isTyping) {
      setIsTyping(true)

      // Reset text before typing
      setDisplayedText("")

      // Start typing after delay
      const timeout = setTimeout(() => {
        let currentIndex = 0
        const typingInterval = setInterval(() => {
          if (currentIndex <= text.length) {
            setDisplayedText(text.substring(0, currentIndex))
            currentIndex++
          } else {
            clearInterval(typingInterval)
            setIsTyping(false)
            controls.start({ opacity: 1 })
          }
        }, 100) // Typing speed

        return () => clearInterval(typingInterval)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [inView, text, isTyping, controls, delay])

  return (
    <motion.h2 ref={ref} className={`${className} relative`} initial={{ opacity: 1 }} animate={controls}>
      {displayedText}
      {isTyping && <span className="inline-block w-1 h-8 ml-1 bg-violet-600 dark:bg-gold-400 animate-pulse" />}
    </motion.h2>
  )
}
