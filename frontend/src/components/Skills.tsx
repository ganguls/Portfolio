const skills = [
  {
    category: 'OFFENSIVE_SECURITY',
    items: [
      { name: 'Penetration Testing', level: 95 },
      { name: 'Exploit Development', level: 90 },
      { name: 'Social Engineering', level: 88 },
      { name: 'Red Teaming', level: 92 },
    ],
  },
  {
    category: 'TOOLS_&_FRAMEWORKS',
    items: [
      { name: 'Metasploit', level: 95 },
      { name: 'Burp Suite', level: 93 },
      { name: 'Wireshark', level: 90 },
      { name: 'Cobalt Strike', level: 87 },
    ],
  },
  {
    category: 'PROGRAMMING_&_SCRIPTING',
    items: [
      { name: 'Python', level: 95 },
      { name: 'Bash/Shell', level: 92 },
      { name: 'C/C++', level: 85 },
      { name: 'PowerShell', level: 88 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-blue-500/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-blue-400 font-mono glitch-effect">
            {'> SKILL_SET'}
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-center text-blue-200 mb-16 max-w-2xl mx-auto font-mono text-sm">
            {'>> Arsenal of security tools, techniques, and methodologies for comprehensive penetration testing.'}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-slate-900/70 backdrop-blur-md border border-blue-500/30 p-6 shadow-lg shadow-blue-500/10">
                <h3 className="text-xl mb-6 text-blue-400 font-mono">
                  {'> '}{skillGroup.category}
                </h3>
                <div className="space-y-4">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-blue-200 font-mono text-sm">{skill.name}</span>
                        <span className="text-blue-400 font-mono text-xs">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-950/50 border border-blue-500/30 h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-1000 shadow-lg shadow-blue-500/50"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-slate-900/70 backdrop-blur-md border border-blue-500/30 p-8 shadow-lg shadow-blue-500/10">
            <h3 className="text-2xl mb-6 text-blue-400 font-mono text-center">
              {'> CERTIFICATIONS'}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="border border-blue-500/30 p-4 bg-slate-900/50 backdrop-blur-sm hover:border-blue-400 transition-all">
                <div className="text-blue-400 font-mono mb-2">OSCP</div>
                <div className="text-blue-200 font-mono text-xs">Offensive Security</div>
              </div>
              <div className="border border-blue-500/30 p-4 bg-slate-900/50 backdrop-blur-sm hover:border-blue-400 transition-all">
                <div className="text-blue-400 font-mono mb-2">CEH</div>
                <div className="text-blue-200 font-mono text-xs">EC-Council</div>
              </div>
              <div className="border border-blue-500/30 p-4 bg-slate-900/50 backdrop-blur-sm hover:border-blue-400 transition-all">
                <div className="text-blue-400 font-mono mb-2">GPEN</div>
                <div className="text-blue-200 font-mono text-xs">GIAC</div>
              </div>
              <div className="border border-blue-500/30 p-4 bg-slate-900/50 backdrop-blur-sm hover:border-blue-400 transition-all">
                <div className="text-blue-400 font-mono mb-2">CRTP</div>
                <div className="text-blue-200 font-mono text-xs">PentesterAcademy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
