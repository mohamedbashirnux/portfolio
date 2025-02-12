import Image from 'next/image'
import { projects } from '@/data/projects'

const Projects = () => {
  // Add your project screenshots here
  const projectImages = [
    {
      id: 1,
      src: "/images/1.jpeg",
      alt: "Project 1 Screenshot",
    },
    {
      id: 2,
      src: "/images/2.jpeg",
      alt: "Project 2 Screenshot",
    },
    {
        id: 1,
        src: "/images/3.jpeg",
        alt: "Project 1 Screenshot",
      },
      {
        id: 2,
        src: "/images/4.jpeg",
        alt: "Project 2 Screenshot",
      },
    
      {
        id: 1,
        src: "/images/4.jpeg",
        alt: "Project 1 Screenshot",
      },
      {
        id: 2,
        src: "/images/6.jpeg",
        alt: "Project 2 Screenshot",
      },
      {
        id: 1,
        src: "/images/7.jpeg",
        alt: "Project 1 Screenshot",
      },
      {
        id: 2,
        src: "/images/8.jpeg",
        alt: "Project 2 Screenshot",
      },
    // Add more project images
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New Project Images Gallery Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Project Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectImages.map((image) => (
              <div 
                key={image.id}
                className="relative h-[250px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-2 hover:scale-105 transition-transform duration-300"
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