'use client'

import Button from "@/components/Button"
import  { useRouter } from "next/navigation"


const Hero = () => {
  const router = useRouter();

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-black">
            Hi. I'm{' '}<span className="text-gray-800 mt-2">Olawuni{' '}Israel<br />Oluwatemilorun.
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-gray-700">
            FullStack Dev.
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Passionate Fullstack Developer |
            Crafting Seamless Front-End Experience & Robust Backend System | Turning Ideas into Scalable, User-Focused Web Solutions 
            | Focused on Crafting Accessible, High-Performance, and User-Centric Interfaces.
          </p>
          <Button
            onClick={ ()=>router.push("/contact") }
          >
            Get In Touch →
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
