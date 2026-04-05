import Image from 'next/image'
import { projects } from '@/data/projects'

const Projects = () => {
  const projectImages = [
    { id: 1, src: "/images/1.jpeg", alt: "Project Screenshot 1" },
    { id: 2, src: "/images/2.jpeg", alt: "Project Screenshot 2" },
    { id: 3, src: "/images/3.jpeg", alt: "Project Screenshot 3" },
    { id: 4, src: "/images/4.jpeg", alt: "Project Screenshot 4" },
    { id: 5, src: "/images/5.jpeg", alt: "Project Screenshot 5" },
    { id: 6, src: "/images/6.jpeg", alt: "Project Screenshot 6" },
    { id: 7, src: "/images/7.jpeg", alt: "Project Screenshot 7" },
    { id: 8, src: "/images/8.jpeg", alt: "Project Screenshot 8" },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          A collection of applications I&apos;ve built across web and mobile platforms
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-50">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 rounded-full text-sm text-blue-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-4">Project Screenshots</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Visual highlights from various projects
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectImages.map((image) => (
              <div 
                key={image.id}
                className="relative h-[250px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 