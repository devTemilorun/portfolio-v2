import Navigation from "@/scenes/Navigation"
import Hero from "@/scenes/Hero"
import Project from "@/scenes/Project"
import TechStack from "@/scenes/TechStack"
import Contact from "@/scenes/Contact"
import Footer from "@/scenes/Footer"

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
      <Footer/>
    </>
  )
}

export default HomePage
