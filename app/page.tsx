import Navbar from "@/components/navbar"
import Home from "@/components/home"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ThemeToggle from "@/components/theme-toggle"
import Spotlight from "@/components/spotlight"

export default function Page() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Spotlight />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ThemeToggle />
    </main>
  )
}
