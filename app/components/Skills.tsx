const Skills = () => {
  const skills = [
    { name: 'React', level: 85 },
    { name: 'React Native', level: 80 },
    { name: 'Next.js', level: 89 },
    { name: 'TypeScript', level: 85 },
    { name: 'PHP', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Firebase', level: 75 },
    { name: 'Flutter', level: 75 },
    { name: 'MySQL', level: 80 },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">My Skills</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Technologies and frameworks I work with for web and mobile development
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-4">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 mt-2 block">
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 