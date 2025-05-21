export default function Footer() {
  return (
    <footer className="py-6 text-center backdrop-blur-sm text-violet-700 dark:text-violet-200 relative border-t border-violet-200/50 dark:border-violet-800/30 bg-white/10 dark:bg-violet-950/10">
      <div className="container mx-auto relative z-10">
        <p className="text-sm">&copy; {new Date().getFullYear()} Francis Panganiban. All rights reserved.</p>
        <p className="mt-2 text-xs text-violet-600 dark:text-violet-400">
          Built with React, Tailwind CSS, and Framer Motion
        </p>
      </div>
    </footer>
  )
}
