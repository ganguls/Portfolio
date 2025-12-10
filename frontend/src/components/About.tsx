import { ImageWithFallback } from './figma/ImageWithFallback';
import { Shield, Lock, Terminal } from './Icons';

export function About() {
  return (
    <section id="about" className="py-20 border-t border-blue-500/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-blue-400 font-mono glitch-effect">
            {'> ABOUT_ME'}
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="aspect-square overflow-hidden border-2 border-blue-500/50 bg-slate-900/50 backdrop-blur-sm">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1698086032723-77b19d2ce2f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrZXIlMjBjeWJlcnNlY3VyaXR5fGVufDF8fHx8MTc2NTM0NTAwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Security Operations"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-blue-500/10"></div>
              </div>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-md border border-blue-500/30 p-6 shadow-lg shadow-blue-500/10">
              <h3 className="text-2xl md:text-3xl mb-6 text-blue-400 font-mono">
                {'> SECURITY_SPECIALIST.exe'}
              </h3>
              <div className="space-y-4 text-blue-200 font-mono text-sm">
                <p>
                  <span className="text-cyan-300">{'>> '}</span>
                  With 7+ years in offensive security, I specialize in penetration testing, 
                  vulnerability research, and red team operations. My expertise lies in identifying 
                  and exploiting security weaknesses before malicious actors can.
                </p>
                <p>
                  <span className="text-cyan-300">{'>> '}</span>
                  I believe in responsible disclosure and building robust security frameworks. 
                  From network infrastructure to web applications, I approach each engagement 
                  with the mindset of an attacker to better protect digital assets.
                </p>
                <p>
                  <span className="text-cyan-300">{'>> '}</span>
                  When not breaking things (ethically), you'll find me contributing to security 
                  tools, hunting bug bounties, or researching zero-day vulnerabilities.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-900/70 backdrop-blur-md border border-blue-500/30 hover:border-blue-400 transition-all group shadow-lg shadow-blue-500/10">
              <div className="w-12 h-12 border border-blue-500 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-all">
                <Terminal className="text-blue-400" size={24} />
              </div>
              <h4 className="text-xl mb-3 text-blue-400 font-mono">{'> PENTESTING'}</h4>
              <p className="text-blue-200 font-mono text-sm">
                Comprehensive penetration testing across networks, web apps, and infrastructure to identify critical vulnerabilities.
              </p>
            </div>

            <div className="p-6 bg-slate-900/70 backdrop-blur-md border border-blue-500/30 hover:border-blue-400 transition-all group shadow-lg shadow-blue-500/10">
              <div className="w-12 h-12 border border-blue-500 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-all">
                <Shield className="text-blue-400" size={24} />
              </div>
              <h4 className="text-xl mb-3 text-blue-400 font-mono">{'> THREAT_ANALYSIS'}</h4>
              <p className="text-blue-200 font-mono text-sm">
                Advanced threat modeling and security assessments to fortify defenses against evolving attack vectors.
              </p>
            </div>

            <div className="p-6 bg-slate-900/70 backdrop-blur-md border border-blue-500/30 hover:border-blue-400 transition-all group shadow-lg shadow-blue-500/10">
              <div className="w-12 h-12 border border-blue-500 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-all">
                <Lock className="text-blue-400" size={24} />
              </div>
              <h4 className="text-xl mb-3 text-blue-400 font-mono">{'> EXPLOIT_DEV'}</h4>
              <p className="text-blue-200 font-mono text-sm">
                Custom exploit development and security tool creation for advanced penetration testing scenarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
