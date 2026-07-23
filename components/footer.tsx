export default function Footer() {
  return (
    <footer className="py-12 text-center text-foreground relative z-10 bg-black/20 border-t border-white/5">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center opacity-40 hover:opacity-100 transition-opacity">
        <div className="font-mono text-xs tracking-widest uppercase mb-4 md:mb-0">
          FRANCIS / 26
        </div>
        <p className="text-[10px] font-mono uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Francis Panganiban. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  )
}
