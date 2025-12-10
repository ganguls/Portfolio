import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Github } from './Icons';

const projects = [
  {
    id: 1,
    title: 'NETWORK_SCANNER_PRO',
    description: 'Advanced network reconnaissance tool with stealth scanning capabilities, vulnerability detection, and automated reporting for penetration testing.',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzY1MjY1NzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Python', 'Scapy', 'Nmap', 'SQLite'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'WEB_EXPLOIT_FRAMEWORK',
    description: 'Comprehensive web application security testing framework with automated vulnerability scanning, SQL injection, and XSS detection modules.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZW5jcnlwdGlvbnxlbnwxfHx8fDE3NjUzMzEwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Python', 'BeautifulSoup', 'Selenium', 'Burp Suite'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'CRYPTO_ANALYZER',
    description: 'Cryptographic analysis toolkit for testing encryption implementations, detecting weak ciphers, and analyzing secure communication protocols.',
    image: 'https://images.unsplash.com/photo-1698086032723-77b19d2ce2f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrZXIlMjBjeWJlcnNlY3VyaXR5fGVufDF8fHx8MTc2NTM0NTAwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['C++', 'OpenSSL', 'Cryptography', 'Wireshark'],
    demoUrl: '#',
    githubUrl: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-blue-500/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-blue-400 font-mono glitch-effect">
            {'> FEATURED_PROJECTS'}
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-center text-blue-200 mb-16 max-w-2xl mx-auto font-mono text-sm">
            {'>> Security tools and frameworks developed for offensive security operations and vulnerability research.'}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900/70 backdrop-blur-md border border-blue-500/30 overflow-hidden hover:border-blue-400 transition-all group shadow-lg shadow-blue-500/10"
              >
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-all"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl mb-3 text-blue-400 font-mono">
                    {'> '}{project.title}
                  </h3>
                  <p className="text-blue-200 mb-4 font-mono text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/30 text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.demoUrl}
                      className="flex items-center gap-2 text-blue-400 hover:text-cyan-300 transition-colors font-mono text-sm"
                    >
                      <ExternalLink size={18} />
                      <span>DEMO</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-blue-300 hover:text-cyan-300 transition-colors font-mono text-sm"
                    >
                      <Github size={18} />
                      <span>SOURCE</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
