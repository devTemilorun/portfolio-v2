import SectionTitle from "@/components/SectionTitle";
import { techStacks } from "@/assets/asset";


const TechStack = () => {
  return (
    <section id="tech" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionTitle title="Tech Stack." />
        
        <div className="flex flex-col gap-8 mt-12">
            {/* Frontend Section */}
            <div>
                <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">Frontend</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {techStacks.Frontend.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                        <div 
                            key={index} 
                            className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100"
                        >
                            <Icon size={40} style={{ color: tech.color }} />
                            <span className="text-gray-800 font-medium text-sm text-center">{tech.name}</span>
                        </div>
                    );
                    })}
                </div>
            </div>
          
            {/* Backend Section */}
            <div>
                <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">Backend</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {techStacks.Backend.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                        <div 
                            key={index} 
                            className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100"
                        >
                            <Icon size={40} style={{ color: tech.color }} />
                            <span className="text-gray-800 font-medium text-sm text-center">{tech.name}</span>
                        </div>
                    );
                    })}
                </div>
            </div>

            {/* Database Section */}
            <div>
                <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">Database</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {techStacks.Database.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                        <div 
                            key={index} 
                            className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100"
                        >
                            <Icon size={40} style={{ color: tech.color }} />
                            <span className="text-gray-800 font-medium text-sm text-center">{tech.name}</span>
                        </div>
                    );
                    })}
                </div>
            </div>

        {/* Version Control Section */}
            <div>
                <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">Version Control</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {techStacks.VersionControl.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                        <div 
                            key={index} 
                            className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100"
                        >
                            <Icon size={40} style={{ color: tech.color }} />
                            <span className="text-gray-800 font-medium text-sm text-center">{tech.name}</span>
                        </div>
                    );
                    })}
                </div>
            </div>


          {/* Deployment Section */}
            <div>
                <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">Deployment</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {techStacks.Deployment.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                        <div 
                            key={index} 
                            className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100"
                        >
                            <Icon size={40} style={{ color: tech.color }} />
                            <span className="text-gray-800 font-medium text-sm text-center">{tech.name}</span>
                        </div>
                    );
                    })}
                </div>
            </div>

            {/* Tools Section */}
            <div>
                <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">Tools</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {techStacks.Tools.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                        <div 
                            key={index} 
                            className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100"
                        >
                            <Icon size={40} style={{ color: tech.color }} />
                            <span className="text-gray-800 font-medium text-sm text-center">{tech.name}</span>
                        </div>
                    );
                    })}
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default TechStack
