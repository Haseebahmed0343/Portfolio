import {
  GraduationCap,
  Briefcase,
  Code2,
  Rocket,
  Share2,
  School,
  Building2,
  BookOpen,
} from "lucide-react";

export default function About() {
  const stats = [
    {
      label: "CGPA",
      value: "3.58",
      Icon: GraduationCap,
      color: "text-cyan-400",
    },
    { label: "Projects", value: "15+", Icon: Share2, color: "text-cyan-400" },
    {
      label: "Technologies",
      value: "10+",
      Icon: Code2,
      color: "text-cyan-400",
    },
    {
      label: "Companies",
      value: "2+",
      Icon: Briefcase,
      color: "text-cyan-400",
    },
  ];

  const education = [
    {
      title: "BSc Computer Science",
      school: "Sir Syed CASE University",
      result: "CGPA: 3.58",
      Icon: School,
    },
    {
      title: "A-Levels",
      school: "Beaconhouse School System",
      result: "82%",
      Icon: Building2,
    },
    {
      title: "O-Levels",
      school: "Beaconhouse School System",
      result: "89%",
      Icon: BookOpen,
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-[#05071a] text-white py-20 px-8 md:px-24"
    >
      <div className="flex items-center gap-4 mb-12">
        <span className="text-cyan-400 font-mono text-2xl">01.</span>
        <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-cyan-400 font-medium">
              <Rocket className="w-5 h-5" />
              <span>Passionate Developer & Problem Solver</span>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              I’m Haseeb Ahmed Tariq, a sixth‑semester Computer Science student
              passionate about full‑stack web development. My expertise spans
              React, Next.js, Node.js, and modern backend frameworks, where I
              build scalable APIs, authentication systems, and database‑driven
              applications.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              On the frontend, I focus on state management, performance
              optimization, and reusable UI components, while on the backend I
              work with Express.js, middleware design, and asynchronous
              programming. I’m also exploring CI/CD pipelines, Docker, and cloud
              deployment to deliver production‑ready solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <stat.Icon
                    className={`w-8 h-8 ${stat.color} group-hover:scale-110 transition-transform`}
                  />
                  <div>
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 space-y-8">
          <div className="flex items-center gap-3 text-cyan-400 text-xl font-semibold mb-6">
            <GraduationCap className="w-6 h-6" />
            <h3>Education</h3>
          </div>

          <div className="space-y-10 relative">
            <div className="absolute left-5.75 top-2 bottom-2 w-0.5 bg-slate-800"></div>

            {education.map((edu, index) => (
              <div key={index} className="relative flex gap-6">
                <div className="z-10 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center border-4 border-[#05071a]">
                  <edu.Icon className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-lg">{edu.title}</h4>
                  <p className="text-gray-400 text-sm leading-snug">
                    {edu.school}
                  </p>
                  <p className="text-cyan-400 text-sm font-medium pt-1">
                    {edu.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
