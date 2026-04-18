import Navigation from "@/scenes/Navigation"
import Hero from "@/scenes/Hero"
import Project from "@/scenes/Project"


const HomePage = () => {
  return (
    <>
      <Navigation/>
      <main>
        <Hero />
        <Project/>
      </main>
    </>
  )
}

export default HomePage
