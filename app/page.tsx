import Hero from "@/scenes/Hero"
import Project from "@/scenes/Project"
import TechStack from "@/scenes/TechStack"
import Contact from "@/scenes/Contact"

const HomePage = () => {
  return (
    <main>
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>

      <section id="projects" className="scroll-mt-20">
        <Project />
      </section>

      <section id="tech" className="scroll-mt-20">
        <TechStack />
      </section>

      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </main>
  )
}

export default HomePage