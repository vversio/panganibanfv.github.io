"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Star properties
    const stars: {
      x: number
      y: number
      radius: number
      color: string
      velocity: number
      alpha: number
      direction: number
    }[] = []

    // Create stars
    const createStars = () => {
      // Clear existing stars
      stars.length = 0

      const starCount = Math.floor((canvas.width * canvas.height) / (theme === "dark" ? 3000 : 5000))
      const isDark = theme === "dark"

      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = Math.random() * (isDark ? 1.5 : 1.2)

        // Colors based on theme
        const colors = isDark
          ? ["255, 255, 255", "250, 204, 21", "167, 139, 250"] // Dark theme: white, gold, light purple
          : ["120, 80, 220", "150, 100, 240", "180, 120, 255", "250, 200, 50", "230, 180, 30"] // Light theme: purples and golds

        const color = colors[Math.floor(Math.random() * colors.length)]
        const velocity = Math.random() * (isDark ? 0.05 : 0.03)
        const alpha = Math.random() * (isDark ? 0.5 : 0.3) + (isDark ? 0.5 : 0.1)
        const direction = Math.random() > 0.5 ? 1 : -1

        stars.push({ x, y, radius, color, velocity, alpha, direction })
      }
    }

    // Create nebula clouds
    const nebulae: {
      x: number
      y: number
      radius: number
      color: string
      alpha: number
    }[] = []

    const createNebulae = () => {
      // Clear existing nebulae
      nebulae.length = 0

      const nebulaCount = 5
      const isDark = theme === "dark"

      for (let i = 0; i < nebulaCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = Math.random() * 200 + 100

        // Colors based on theme
        const colors = isDark
          ? ["124, 58, 237", "79, 70, 229", "245, 158, 11"] // Dark theme: deep purples and gold
          : ["180, 150, 240", "200, 180, 255", "250, 220, 100"] // Light theme: soft purples and gold

        const color = colors[Math.floor(Math.random() * colors.length)]
        const alpha = Math.random() * (isDark ? 0.05 : 0.03) + (isDark ? 0.02 : 0.01)

        nebulae.push({ x, y, radius, color, alpha })
      }
    }

    // Shooting star properties
    const shootingStars: {
      x: number
      y: number
      length: number
      speed: number
      angle: number
      color: string
      alpha: number
      trail: { x: number; y: number }[]
      active: boolean
      trailLength: number
    }[] = []

    // Create a shooting star
    const createShootingStar = () => {
      const isDark = theme === "dark"

      // Determine starting position (edges of the screen)
      const startFromTop = Math.random() > 0.5
      const x = startFromTop ? Math.random() * canvas.width : 0
      const y = startFromTop ? 0 : Math.random() * canvas.height

      // Angle between 30 and 60 degrees
      const angle = (Math.random() * 30 + 30) * (Math.PI / 180)

      // Colors based on theme
      const colors = isDark
        ? ["255, 255, 255", "250, 204, 21", "167, 139, 250"] // Dark theme: white, gold, light purple
        : ["120, 80, 220", "150, 100, 240", "250, 200, 50"] // Light theme: purples and golds

      const color = colors[Math.floor(Math.random() * colors.length)]

      // Speed and length based on theme
      const speed = Math.random() * 5 + (isDark ? 10 : 7)
      const length = Math.random() * 50 + (isDark ? 100 : 70)
      const alpha = isDark ? 0.8 : 0.6
      const trailLength = Math.floor(Math.random() * 10) + (isDark ? 15 : 10)

      shootingStars.push({
        x,
        y,
        length,
        speed,
        angle,
        color,
        alpha,
        trail: [],
        active: true,
        trailLength,
      })
    }

    // Schedule shooting stars
    const scheduleShootingStars = () => {
      // Create initial shooting star
      createShootingStar()

      // Schedule next shooting star
      const nextStarDelay = Math.random() * 5000 + 3000 // Between 3-8 seconds
      setTimeout(scheduleShootingStars, nextStarDelay)
    }

    // Draw stars
    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw nebulae first (background)
      nebulae.forEach((nebula) => {
        const gradient = ctx.createRadialGradient(nebula.x, nebula.y, 0, nebula.x, nebula.y, nebula.radius)

        gradient.addColorStop(0, `rgba(${nebula.color}, ${nebula.alpha})`)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw stars on top
      stars.forEach((star) => {
        ctx.fillStyle = `rgba(${star.color}, ${star.alpha})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()

        // Add glow effect
        ctx.shadowBlur = theme === "dark" ? 10 : 5
        ctx.shadowColor = `rgba(${star.color}, ${theme === "dark" ? 0.5 : 0.3})`

        // Update star position for twinkling effect
        star.alpha += (theme === "dark" ? 0.01 : 0.005) * star.direction

        if (star.alpha >= (theme === "dark" ? 1 : 0.4)) {
          star.direction = -1
        } else if (star.alpha <= (theme === "dark" ? 0.5 : 0.1)) {
          star.direction = 1
        }

        // Subtle movement
        star.x += star.velocity

        // Wrap around screen
        if (star.x > canvas.width) {
          star.x = 0
        }
      })

      // Draw and update shooting stars
      shootingStars.forEach((star, index) => {
        if (!star.active) return

        // Update position
        star.x += Math.cos(star.angle) * star.speed
        star.y += Math.sin(star.angle) * star.speed

        // Add current position to trail
        star.trail.push({ x: star.x, y: star.y })

        // Limit trail length
        if (star.trail.length > star.trailLength) {
          star.trail.shift()
        }

        // Draw trail
        if (star.trail.length > 1) {
          ctx.beginPath()
          ctx.moveTo(star.trail[0].x, star.trail[0].y)

          // Draw line through all trail points
          for (let i = 1; i < star.trail.length; i++) {
            ctx.lineTo(star.trail[i].x, star.trail[i].y)
          }

          // Create gradient for trail
          const gradient = ctx.createLinearGradient(
            star.trail[0].x,
            star.trail[0].y,
            star.trail[star.trail.length - 1].x,
            star.trail[star.trail.length - 1].y,
          )

          gradient.addColorStop(0, `rgba(${star.color}, 0)`)
          gradient.addColorStop(1, `rgba(${star.color}, ${star.alpha})`)

          ctx.strokeStyle = gradient
          ctx.lineWidth = 2
          ctx.stroke()

          // Draw the head of the shooting star
          ctx.beginPath()
          ctx.arc(star.x, star.y, 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${star.color}, ${star.alpha})`
          ctx.fill()

          // Add glow effect
          ctx.shadowBlur = 15
          ctx.shadowColor = `rgba(${star.color}, ${star.alpha})`
        }

        // Remove shooting star if it goes off screen
        if (star.x < 0 || star.x > canvas.width || star.y < 0 || star.y > canvas.height) {
          star.active = false
          shootingStars.splice(index, 1)
        }
      })

      requestAnimationFrame(drawStars)
    }

    createStars()
    createNebulae()
    scheduleShootingStars()
    drawStars()

    // Recreate stars and nebulae when theme changes
    const handleThemeChange = () => {
      createStars()
      createNebulae()
    }

    // Set up a MutationObserver to watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class" &&
          mutation.target === document.documentElement
        ) {
          handleThemeChange()
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      observer.disconnect()
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
}
