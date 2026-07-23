/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        accent: ["var(--font-accent)", "serif"],
      },
      colors: {
        paper: {
          DEFAULT: "oklch(var(--color-paper) / <alpha-value>)",
          1: "oklch(var(--color-paper-1) / <alpha-value>)",
          2: "oklch(var(--color-paper-2) / <alpha-value>)",
          3: "oklch(var(--color-paper-3) / <alpha-value>)",
          4: "oklch(var(--color-paper-4) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "oklch(var(--color-ink) / <alpha-value>)",
          1: "oklch(var(--color-ink-1) / <alpha-value>)",
          2: "oklch(var(--color-ink-2) / <alpha-value>)",
          3: "oklch(var(--color-ink-3) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--color-accent) / <alpha-value>)",
          soft: "oklch(var(--color-accent-soft) / <alpha-value>)",
        },
        bloom: {
          1: "oklch(var(--color-bloom-1) / <alpha-value>)",
          2: "oklch(var(--color-bloom-2) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
