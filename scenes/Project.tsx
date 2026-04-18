import { projects } from "@/assets/asset"
import SectionTitle from "@/components/SectionTitle"


const Project = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionTitle title="Projects." />
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              {project.status && (
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {project.status}
                </span>
              )}
              <h3 className="text-xl font-bold mt-2 mb-3 text-black">{project.title}</h3>
              {project.tagline && (
                <p className="text-gray-600 text-sm mb-3 font-medium">{project.tagline}</p>
              )}
              {project.description && (
                <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
              )}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
