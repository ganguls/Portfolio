import { Github, Linkedin, Mail, Twitter } from './Icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-blue-500/30 text-blue-400 py-12 bg-slate-900/50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl mb-4 font-mono">{'> CYPHER_SEC'}</h3>
              <p className="text-blue-200 font-mono text-sm">
                Ethical hacker specializing in offensive security operations and vulnerability research.
              </p>
              <div className="mt-4 text-blue-300 font-mono text-xs">
                {'>> STATUS: ACTIVE'}
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-4 font-mono">{'> NAVIGATION'}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-blue-200 hover:text-cyan-300 transition-colors font-mono text-sm">
                    {'>> HOME'}
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-blue-200 hover:text-cyan-300 transition-colors font-mono text-sm">
                    {'>> ABOUT'}
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-blue-200 hover:text-cyan-300 transition-colors font-mono text-sm">
                    {'>> PROJECTS'}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-blue-200 hover:text-cyan-300 transition-colors font-mono text-sm">
                    {'>> CONTACT'}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl mb-4 font-mono">{'> CONNECT'}</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-cyan-300 transition-colors border border-blue-500/30 p-2 hover:border-blue-400"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-cyan-300 transition-colors border border-blue-500/30 p-2 hover:border-blue-400"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-cyan-300 transition-colors border border-blue-500/30 p-2 hover:border-blue-400"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="mailto:security@cypher.sec"
                  className="text-blue-300 hover:text-cyan-300 transition-colors border border-blue-500/30 p-2 hover:border-blue-400"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-500/30 pt-8 text-center text-blue-200 font-mono text-sm">
            <p>{'>> '}&copy; {currentYear} CYPHER_SECURITY. ALL_SYSTEMS_OPERATIONAL.</p>
            <p className="mt-2 text-xs">{'>> ENCRYPTED_CONNECTION_ACTIVE'}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
