"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useState, useEffect } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  // Add a class to the body when the theme provider is mounted
  // This prevents the initial flash of unstyled content
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <NextThemesProvider {...props}>
      <div className={mounted ? "theme-transition-ready" : ""}>{children}</div>
    </NextThemesProvider>
  )
}
