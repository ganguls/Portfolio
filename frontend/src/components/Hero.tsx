import { ArrowDown, Github, Linkedin, Mail } from './Icons';
import { Terminal } from './Icons';

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 border-2 border-blue-400 flex items-center justify-center text-blue-400 text-5xl font-mono glitch-effect bg-slate-900/50 backdrop-blur-sm">
              {'>'}_
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl mb-6 text-blue-400 font-mono glitch-effect">
            {'> '}<span className="text-cyan-300">CYPHER_SECURITY</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-300 mb-8 font-mono">
            Penetration Tester & Security Researcher
          </p>

          <div className="bg-slate-900/70 backdrop-blur-md border border-blue-500/30 p-6 rounded mb-12 text-left max-w-2xl mx-auto font-mono text-sm shadow-lg shadow-blue-500/10">
            <div className="text-blue-400 mb-2">
              <span className="text-cyan-300">{'>'}</span> whoami
            </div>
            <div className="text-blue-200 mb-4">
              Ethical hacker specializing in penetration testing, vulnerability assessment, and secure system architecture. 
              Protecting digital assets through offensive security.
            </div>
            <div className="text-blue-400">
              <span className="text-cyan-300">{'>'}</span> <span className="animate-pulse">_</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-500/20 text-blue-400 border border-blue-500 hover:bg-blue-500/30 transition-all font-mono backdrop-blur-sm shadow-lg shadow-blue-500/20"
            >
              {'> CONTACT_ME'}
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-blue-500/50 text-blue-300 hover:border-blue-400 hover:bg-blue-500/10 transition-colors font-mono backdrop-blur-sm"
            >
              {'> VIEW_PROJECTS'}
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-cyan-300 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-cyan-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:security@example.com"
              className="text-blue-400 hover:text-cyan-300 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-blue-400 hover:text-cyan-300 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
}
