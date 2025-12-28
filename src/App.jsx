import { useState, useEffect } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'
import portfolio from './assets/sekouti-abdelaziz.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('home')
  const [showSocialIcons, setShowSocialIcons] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      
      // Show social icons after scrolling 200px
      setShowSocialIcons(currentScrollY > 200)
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const openWhatsApp = (message) => {
    const phoneNumber = '212612236660'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
            Sekouti
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 hover:text-purple-400 ${activeSection === section ? 'text-purple-400' : 'text-white'}`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white cursor-pointer"
          >
            <div className="space-y-1">
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-100' : 'max-h-0'} overflow-hidden bg-black/90 backdrop-blur-md`}>
          <div className="px-6 py-10 space-y-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left capitalize transition-all space-y-10 duration-300 hover:text-purple-400 ${activeSection === section ? 'text-purple-400' : 'text-white'}`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-10  py-25 md:space-y-6 animate-fade-in-left">
              <h1 className="text-5xl md:text-7xl font-bold my-4 md:my-0">
                Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">Sekouti</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Passionate Full Stack Developer with 5+ years of experience in building scalable web applications
              </p>
              <p className="text-gray-400">
                I transform ideas into elegant, efficient solutions using modern web technologies
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-linear-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  Get In Touch
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 border border-purple-400 rounded-full font-semibold hover:bg-purple-400/10 transition-all duration-300"
                >
                  View Projects
                </button>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in-right">
              <div className="w-80 h-80 rounded-full bg-linear-to-br from-purple-600 to-pink-600 p-1 animate-float overflow-hidden">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  {/* <div className="text-6xl">👨‍💻</div> */}
                  <img src={portfolio} alt="abdelaziz sekouti" className='w-100 h-78  object-fit'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate Self-Taught Full Stack Developer with 5+ years of experience in designing, developing, and deploying scalable web applications. My expertise spans from crafting intuitive user interfaces to building robust backend systems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I thrive on solving complex problems and turning innovative ideas into reality. My approach combines technical excellence with a deep understanding of user needs, ensuring that every project I work on delivers exceptional value and experience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Clean Code', 'Problem Solving', 'Team Player', 'Fast Learner'].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 space-y-4 border border-white/10">
              <h4 className="text-xl font-semibold mb-4">Personal Information</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Name:</span>
                  <span>Sekouti Abdelaziz</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Email:</span>
                  <span>sekoutiabdelaziz0@gmail.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Phone:</span>
                  <span>+212612236660</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Location:</span>
                  <span>Marrakesh, Morocco</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-green-400">Available for Hire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              {[
                { name: 'JavaScript / TypeScript', level: 90 },
                { name: 'React.js', level: 75 },
                { name: 'HTML5 / CSS3', level: 85 },
                { name: 'PHP', level: 85 },
                { name: 'MySQL', level: 80 },
                { name: 'Git', level: 88 }
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-linear-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Technology Stack</h3>
              <div className="grid grid-cols-3 gap-4">
                {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'PHP', 'MySQL', 'Git', 'Docker', 'Tailwind CSS', 'WordPress', 'Figma'].map((tech, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <div className="text-2xl mb-2">
                      {tech === 'HTML5' && '🌐'}
                      {tech === 'CSS3' && '🎨'}
                      {tech === 'JavaScript' && '⚡'}
                      {tech === 'React' && '⚛️'}
                      {tech === 'Node.js' && '🟢'}
                      {tech === 'PHP' && '🐘'}
                      {tech === 'MySQL' && '🗄️'}
                      {tech === 'Git' && '📦'}
                      {tech === 'Docker' && '🐳'}
                      {tech === 'Tailwind CSS' && '🎯'}
                      {tech === 'WordPress' && '📝'}
                      {tech === 'Figma' && '🎨'}
                    </div>
                    <span className="text-sm">{tech}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-2xl font-semibold mt-8 mb-4">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Team Leadership', 'Problem Solving', 'Communication', 'Time Management', 'Strategic Planning', 'Adaptability'].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-linear-to-r from-purple-400 to-pink-600 rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'Full-featured e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
                tech: ['PHP', 'MySQL', 'HTML5', 'JavaScript', 'Tailwind CSS'],
                demo: '#',
                github: 'https://github.com/abdelaziz-sekouti/ecommerceWeb'
              },
              {
                title: 'Analytics Dashboard',
                description: 'Real-time data visualization dashboard with interactive charts and customizable widgets.',
                tech: ['HTML5', 'Chart.js', 'Tailwind CSS', 'API'],
                demo: 'https://abdelaziz-sekouti.github.io/Dashboard-analytics/',
                github: '#'
              },
              {
                title: 'Chat Application',
                description: 'Real-time messaging app with WebSocket, file sharing, and end-to-end encryption.',
                tech: ['HTML5', 'JavaScript', 'Tailwind CSS'],
                demo: 'https://abdelaziz-sekouti.github.io/chat-app/',
                github: 'https://abdelaziz-sekouti.github.io/chat-app/'
              }
            ].map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-purple-600/20 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Let's Connect</h3>
              <p className="text-gray-300">
                I'm always interested in hearing about new opportunities and exciting projects. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div>sekoutiabdelaziz0@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    📱
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <div>+212612236660</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div>Marrakesh, Morocco</div>
                  </div>
                </div>
              </div>
              {/* <div className="flex space-x-4 pt-4">
                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                ></a>
                <a
                  href="https://github.com/abdelaziz-sekouti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                ></a>
                <a
                  href="https://www.youtube.com/@autodidactewebdev2368"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                ></a>
                <button
                  onClick={() => openWhatsApp('Hi! I found your portfolio and would like to connect.')}
                  className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-all duration-300"
                ></button>
              </div> */}
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
              <form 
                onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.target)
                  const message = `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nMessage: ${formData.get('message')}`
                  openWhatsApp(message)
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 transition-colors duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 transition-colors duration-300"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 transition-colors duration-300 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message via WhatsApp
                </button>
              </form>
            </div>
          </div>
          
          {/* Google Maps Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6 text-center">Find Me Here</h3>
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.1234567890!2d-7.9898765!3d31.6295432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM3JzQ2LjUiTiA3wrA1OScyNy44IlM!5e0!3m2!1sen!2sma!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Location Map - Derb Bouaalam N 185, Syba, Marrakech, Morocco"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-300">
                <i className="fas fa-map-marker-alt text-purple-400 mr-2"></i>
                Derb Bouaalam N 185, Syba, Marrakech, Morocco
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Sekouti. All rights reserved.</p>
              <p className="text-sm text-gray-400">Designed with React & Tailwind CSS</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/abdelaziz-sekouti"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.youtube.com/@autodidactewebdev2368"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <button
                onClick={() => openWhatsApp('Hi! I found your portfolio and would like to connect.')}
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <i className="fab fa-whatsapp"></i>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <button
        onClick={() => openWhatsApp('Hi! I found your portfolio and would like to connect.')}
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-110 z-40 animate-pulse"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </button>

      {/* Left Fixed Social Icons */}
      <div className={`fixed left-8 top-1/2 transform -translate-y-1/2 z-30 flex flex-col space-y-4 transition-all duration-500 ${showSocialIcons ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
          style={{
            animation: showSocialIcons ? `slideInLeft 0.5s ease-out forwards` : 'none',
            animationDelay: showSocialIcons ? '0.1s' : '0s'
          }}
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com/abdelaziz-sekouti"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-all duration-300 transform hover:scale-110 shadow-lg"
          style={{
            animation: showSocialIcons ? `slideInLeft 0.5s ease-out forwards` : 'none',
            animationDelay: showSocialIcons ? '0.2s' : '0s'
          }}
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.youtube.com/@autodidactewebdev2368"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
          style={{
            animation: showSocialIcons ? `slideInLeft 0.5s ease-out forwards` : 'none',
            animationDelay: showSocialIcons ? '0.3s' : '0s'
          }}
        >
          <i className="fab fa-youtube"></i>
        </a>
        <button
          onClick={() => openWhatsApp('Hi! I found your portfolio and would like to connect.')}
          className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
          style={{
            animation: showSocialIcons ? `slideInLeft 0.5s ease-out forwards` : 'none',
            animationDelay: showSocialIcons ? '0.4s' : '0s'
          }}
        >
          <i className="fab fa-whatsapp"></i>
        </button>
      </div>
    </div>
  )
}

export default App
