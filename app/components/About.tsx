const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Hello! I'm a passionate Full Stack Developer with expertise in building
              modern web applications. I love turning complex problems into simple,
              beautiful, and intuitive solutions.
            </p>
            <p className="text-lg text-gray-600">
              With several years of experience in web development, I specialize in
              JavaScript, React, Node.js, and modern web technologies. I'm always
              eager to learn new technologies and improve my skills.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="text-blue-600 font-semibold">3</span>
                <span className="text-gray-600">Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600 font-semibold">6</span>
                <span className="text-gray-600">Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600 font-semibold">1</span>
                <span className="text-gray-600">Happy Clients</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 absolute -inset-4"></div>
            <div className="aspect-square rounded-2xl bg-gray-100 p-6 relative">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">My Skills Include:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Frontend Development (React, Next.js)</li>
                  <li>• Backend Development (Nextjs App router, Nodejs)</li>
                  <li>• Database Management (MongoDB, PostgreSQL)</li>
                  <li>• UI/UX Design</li>
                  <li>• API Development</li>
                  <li>• Cloud Services (AWS, Vercel)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 