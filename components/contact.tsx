"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/vversio",
      href: "https://github.com/vversio",
      color: "hover:text-gold-600 dark:hover:text-gold-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/francis-vincent-panganiban",
      href: "https://linkedin.com/in/francis-vincent-panganiban-22b46633b",
      color: "hover:text-gold-600 dark:hover:text-gold-400",
    },
    {
      icon: Mail,
      label: "Email",
      value: "panganiban.fvj@gmail.com",
      href: "mailto:panganiban.fvj@gmail.com",
      color: "hover:text-gold-600 dark:hover:text-gold-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 921 068 5821",
      href: "tel:+639210685821",
      color: "hover:text-gold-600 dark:hover:text-gold-400",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container px-4 mx-auto max-w-4xl relative z-10">
        <motion.h2
          className="mb-12 text-3xl font-bold text-center text-violet-800 dark:text-violet-200 md:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 transition-all duration-300 glass rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-gold-500 dark:hover:border-gold-400"
              variants={item}
            >
              <div
                className={`p-3 mr-4 rounded-full bg-violet-100 dark:bg-violet-900/60 text-violet-700 dark:text-violet-300 ${contact.color}`}
              >
                <contact.icon size={24} />
              </div>
              <div>
                <h3 className="font-medium text-violet-700 dark:text-violet-300">{contact.label}</h3>
                <p className="text-sm text-violet-600 dark:text-violet-200">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
