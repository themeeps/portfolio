import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 z-10">
        <div className="text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600">
                JP
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">John Programmer</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Full Stack Developer & Creative Problem Solver
          </p>

          <p className="text-lg text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed">
            I craft elegant solutions to complex problems. Specialized in building scalable web applications with modern technologies.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
              Get In Touch
            </a>
            <a href="#projects" className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
              View My Work
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 animate-bounce">
        <ArrowDown size={32} />
      </a>
    </section>
  );
}
