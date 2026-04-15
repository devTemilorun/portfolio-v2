'use client';

import ProcessCard from '@/components/ProcessCard';

const processData = [
  {
    number: '01',
    title: 'Plan & Design',
    description: `I start by understanding the client's vision and sketching wireframes. I translate UI designs into pixel-perfect, responsive components using React, Next.js, and Tailwind CSS. I focus on creating interfaces that are both beautiful and functional.`
  },
  {
    number: '02',
    title: 'Build & Integrate',
    description: `I develop scalable frontend applications using React, Next.js, and TypeScript. I integrate RESTful APIs, handle authentication with JWT or Laravel Sanctum, and ensure smooth data flow between frontend and backend systems.`
  },
  {
    number: '03',
    title: 'Optimize Performance',
    description: `Performance is a requirement, not a feature. I optimize asset delivery, implement server-side rendering with Next.js, and write efficient code to ensure fast load times and a smooth 60fps experience for every user.`
  },
  {
    number: '04',
    title: 'Deploy & Maintain',
    description: `I deploy applications on Vercel, Netlify, and Render. I use Git for version control and maintain clean, documented codebases. I ensure cross-browser compatibility and responsive design across all devices.`
  }
];

export default function AboutPage() {
  return (
    <>
      <div className="bg-white min-h-screen pt-20">
        {/* Hero Section */}
        <section className="pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-7xl font-bold text-black mb-6">
                I'm Olawuni Israel Oluwatemilorun.
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
                I'm a Frontend & Full-Stack Developer working remotely from Nigeria.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Over the past 2+ years, I've built modern web applications using React, Next.js, TypeScript, 
                Tailwind CSS, PHP, and Laravel. I've created everything from interactive agency landing pages 
                to API-integrated apps like a lyrics search tool and a Pokémon database.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                I'm currently pursuing my Bachelor's degree at Ekiti State University while 
                balancing freelance projects and continuously expanding my tech skills.
              </p>
            </div>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-black mb-6">
                Let's collaborate if you need a dedicated frontend or full-stack developer for your next project.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm passionate about building clean, user-friendly web experiences and delivering quality code. 
                Whether it's a startup landing page, an e-commerce platform, or a custom web app — I'm ready to help.
              </p>
            </div>
          </div>
        </section>

        {/* Process Sections */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              {processData.map((process, index) => (
                <ProcessCard
                  key={index}
                  number={process.number}
                  title={process.title}
                  description={process.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Personal Journey Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I started my journey as a self-taught developer, learning from free resources while balancing 
                university studies. I built my first projects by reverse-engineering websites I admired, 
                inspecting elements, and rebuilding them from scratch. That hands-on approach taught me more 
                than any course ever could.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Over time, I've built and deployed complete web applications, including Agency.ai (an 
                interactive landing page with dark mode and custom cursor), Estate (a real estate platform 
                with credibility metrics), PETWORLD (a pet store website), a Lyrics App integrated with the 
                Genius API, and a PokéAPI app. Each project pushed me to understand not just UI design, but 
                API integration, performance optimization, and deployment workflows.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Outside of coding, I'm focused on completing my degree, exploring new technologies like 
                React Query and Docker, and connecting with other developers. I'm driven by a genuine love 
                for building, solving problems, and growing one step at a time.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}