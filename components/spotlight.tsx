"use client"

import { useEffect, useRef } from "react"

export default function Spotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const spotlight = spotlightRef.current
    if (!spotlight) return

    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      // Easing for smooth follow
      currentX += (mouseX - currentX) * 0.1
      currentY += (mouseY - currentY) * 0.1

      if (spotlight) {
        spotlight.style.left = `${currentX}px`
        spotlight.style.top = `${currentY}px`
      }
      
      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div 
        ref={spotlightRef}
        className="spotlight-glow"
        style={{ left: "-1000px", top: "-1000px" }} // Start offscreen
      />
    </div>
  )
}
