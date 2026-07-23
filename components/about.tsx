"use client"

import { motion } from "framer-motion"

export default function About() {
  const skills = [
    { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL"] },
    { category: "AI & ML", items: ["PyTorch", "OpenCV", "Ollama", "Scikit-Learn", "Pandas"] },
    { category: "Data & DevOps", items: ["PostgreSQL", "n8n", "Linux", "Proxmox", "Docker"] },
    { category: "Web & Frontend", items: ["Next.js", "React", "Tailwind", "Streamlit", "Supabase", "Firebase"] }
  ]

  return (
    <section id="about" className="py-40 relative">
      <div className="container px-4 mx-auto max-w-4xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-12"
        >
          <h2 className="font-mono text-sm tracking-widest text-accent uppercase">
            01 / Professional Summary
          </h2>

          <p className="font-display text-4xl md:text-5xl leading-tight text-foreground tracking-tight">
            <span className="text-accent italic font-accent">AI & Software Engineer</span> specializing in autonomous systems and robust infrastructure.
          </p>

          <p className="font-body text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl">
            I am a Computer Science student at De La Salle University - Dasmariñas focusing on AI integration, data pipelines, web design, and backend infrastructure. I build Web apps, automate ETL workflows via n8n, and turn complex data problems into streamlined solutions integrated with machine learning architectures.
          </p>

          <div className="pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.category}>
                <div className="font-accent text-3xl text-accent mb-2">0{index + 1}</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-foreground/40 mb-3">{skill.category}</div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span key={item} className="font-mono text-[10px] tracking-wider uppercase bg-white/5 text-foreground/80 px-2 py-1 rounded-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
