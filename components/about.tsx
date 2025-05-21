"use client"

import { motion } from "framer-motion"
import { SiPython, SiJavascript, SiHtml5, SiCss3, SiReact, SiFlutter } from "react-icons/si"

export default function About() {
  const languages = [
    { name: "Python", icon: SiPython, color: "text-blue-600" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS", icon: SiCss3, color: "text-blue-500" },
    { name: "React", icon: SiReact, color: "text-blue-600" },
    { name: "Flutter", icon: SiFlutter, color: "text-cyan-500" },
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
    <section id="about" className="py-20 relative">
      <div className="container px-4 mx-auto max-w-4xl relative z-10">
        <motion.h2
          className="mb-12 text-3xl font-bold text-center text-violet-800 dark:text-violet-200 md:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-6 rounded-xl shadow-lg"
          >
            <h3 className="mb-4 text-xl font-semibold text-violet-700 dark:text-violet-300">About Me</h3>
            <p className="mb-6 text-violet-800 dark:text-violet-100">
              I'm an aspiring software engineer with a passion for machine learning. I enjoy learning newly released
              technologies and building applications that make a difference. Currently exploring the intersection of
              technology and healthcare.
            </p>

            <h3 className="mb-4 text-xl font-semibold text-violet-700 dark:text-violet-300">Hobbies</h3>
            <p className="mb-6 text-violet-800 dark:text-violet-100">
              When I'm not coding, you can find me gaming, watching movies/series, or doing cardio-focused exercises
              like running.
            </p>

            <h3 className="mb-4 text-xl font-semibold text-violet-700 dark:text-violet-300">Interests</h3>
            <p className="text-violet-800 dark:text-violet-100">
              I'm particularly interested in softwares that are integrated with machine learning algorithms, making my
              own machine learning models, and sustainable solutions. I believe technology can help solve some of our
              most pressing challenges.
            </p>
          </motion.div>

          <div>
            <motion.h3
              className="mb-6 text-xl font-semibold text-violet-700 dark:text-violet-300"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Programming Languages I Use
            </motion.h3>

            <motion.div
              className="grid grid-cols-2 gap-4 sm:grid-cols-3"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {languages.map((lang) => (
                <motion.div
                  key={lang.name}
                  className="flex flex-col items-center p-4 transition-all duration-300 glass rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 hover:border-gold-500 dark:hover:border-gold-400"
                  variants={item}
                >
                  <lang.icon className={`text-4xl ${lang.color} mb-2`} />
                  <span className="text-sm font-medium text-violet-800 dark:text-violet-200">{lang.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
