import { Calendar, MapPin, TabletSmartphone } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      date: "April 2026 - Present", 
      role: "Web Developer Intern",
      company: "Kodex Byte",
      location: "Remote/Office",
      description: "Developed and maintained full-stack applications using the MERN stack. Collaborated with the team to deliver high-quality, scalable software solutions.",
      skills: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      date: "2025 - 2026",
      role: "Full-Stack Developer Intern",
      company: "SPS - Software Productivity Strategists",
      location: "Islamabad, Pakistan",
      description: "Developed and maintained full-stack applications using Php-Laravel. Collaborated with the team to deliver high-quality, scalable software solutions.",
      skills: ["Php", "Laravel", "MySQL", "Html/CSS"],
    },
  ];

  return (
    <section id="experience" className="min-h-screen bg-[#05071a] text-white py-20 px-8 md:px-24">
      <div className="flex items-center gap-4 mb-16">
        <span className="text-cyan-400 font-mono text-2xl">02.</span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-200">Experience</h2>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-0 md:-left-10 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-500 via-indigo-500 to-transparent"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              
              <div className="absolute -left-1.25 md:-left-11.25 top-2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] z-10"></div>

              <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 md:p-8 hover:border-indigo-500/50 hover:scale-105 transition-all duration-300 group">
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold mb-4">
                  <Calendar className="w-3 h-3" />
                  {exp.date}
                </div>

                <div className="flex flex-col gap-1 mb-4">
                  <div className="flex items-center gap-2 text-xl font-bold text-gray-100">
                    <TabletSmartphone className="w-5 h-5 text-gray-400" />
                    {exp.role}
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400 font-medium">
                    <span className="hover:underline cursor-pointer">{exp.company}</span>
                    <span className="text-gray-600">•</span>
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {exp.skills.map((skill, sIndex) => (
                    <div 
                      key={sIndex} 
                      className="px-4 py-1.5 rounded-xl bg-slate-800/50 border border-slate-700 text-xs text-gray-300 group-hover:border-cyan-500/30 hover:bg-cyan-400 hover:-translate-y-1 hover:text-black transition-all duration-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}