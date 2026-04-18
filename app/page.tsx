import Navigation from "@/scenes/Navigation"
import Hero from "@/scenes/Hero"
import Project from "@/scenes/Project"
import TechStack from "@/scenes/TechStack"


const HomePage = () => {
  return (
    <>
      <Navigation/>
      <main>
        <Hero />
        <Project/>
        <TechStack/>
      </main>
    </>
  )
}

export default HomePage
