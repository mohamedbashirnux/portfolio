import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I&apos;m <span className="text-blue-600">Mo bash</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-8">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            I create exceptional digital experiences with modern web technologies.
            Specialized in building responsive and performant web applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 text-lg"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="hidden md:block relative">
          <div className="aspect-square rounded-full bg-blue-100 absolute -inset-4 blur-3xl opacity-30"></div>
          <div className="relative">
            <Image
              src="/images/my.jpeg" // Add your profile image to public/images/
              alt="Profile"
              width={500}
              height={500}
              className="rounded-2xl shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 