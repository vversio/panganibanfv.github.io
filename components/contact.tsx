"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react"

export default function Contact() {
  const links = [
    { label: "GITHUB", value: "github.com/vversio", href: "https://github.com/vversio", icon: Github },
    { label: "LINKEDIN", value: "francis-vincent", href: "https://linkedin.com/in/francis-vincent-panganiban-22b46633b", icon: Linkedin },
    { label: "EMAIL", value: "panganiban.fvj@gmail.com", href: "mailto:panganiban.fvj@gmail.com", icon: Mail },
    { label: "PHONE", value: "+63 9691 082 214", href: "tel:+639691082214", icon: Phone }
  ]

  return (
    <section id="contact" className="py-32 relative">
      <div className="container px-4 mx-auto max-w-4xl relative z-10">
        
        <div className="flex flex-col">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col mb-16 text-center md:text-left"
          >
            <h2 className="font-mono text-sm tracking-widest text-accent uppercase mb-6">
              03 / Contact
            </h2>
            <h3 className="font-accent text-6xl md:text-8xl text-foreground tracking-tight leading-none mb-6">
              Let's connect.
            </h3>
            <p className="font-body text-lg text-foreground/60 max-w-2xl">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {links.map(link => (
              <a 
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-8 glass rounded-xl hover:border-accent/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-12">
                  <link.icon size={24} className="text-accent" />
                  <ArrowUpRight size={20} className="text-foreground/20 group-hover:text-foreground transition-colors" />
                </div>
                <div>
                  <h4 className="font-mono text-xs tracking-widest text-foreground/40 uppercase mb-2">
                    {link.label}
                  </h4>
                  <span className="font-display text-xl text-foreground group-hover:text-accent transition-colors block truncate">
                    {link.value}
                  </span>
                </div>
              </a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
