import Navigation from "@/scenes/Navigation"
import Hero from "@/scenes/Hero"
import Project from "@/scenes/Project"
import TechStack from "@/scenes/TechStack"
import Contact from "@/scenes/Contact"


const HomePage = () => {
  return (
    <>
      <Navigation/>
      <main>
        <Hero />
        <Project/>
        <TechStack/>
        <Contact/>
      </main>
    </>
  )
}

export default HomePage
