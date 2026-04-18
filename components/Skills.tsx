import {
  Code2,
  Settings2,
  Lightbulb,
  Users,
  Clock,
  TrendingUp,
  Scale,
  Heart,
  BrainCircuit,
} from "lucide-react";
import {
  SiFlutter,
  SiPython,
  SiHtml5,
  SiPhp,
  SiAndroidstudio,
  SiPycharm,
  SiGit,
  SiExpress,
  SiMysql,
} from "react-icons/si";
import { BiLogoVisualStudio, BiLogoMongodb } from "react-icons/bi";
import { FaLaravel } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsLine, RiNodejsLine } from "react-icons/ri";
import { FaReact, FaGithub } from "react-icons/fa";

export default function Skills2() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      skills: [
        { name: "HTML/CSS", icon: <SiHtml5 className="text-orange-500" /> },
        {
          name: "Tailwind CSS",
          icon: <RiTailwindCssFill className="text-cyan-500" />,
        },
        { name: "React", icon: <FaReact className="text-cyan-500" /> },
        { name: "Next.js", icon: <RiNextjsLine className="text-slate-600" /> },
        { name: "Node.js", icon: <RiNodejsLine className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-slate-600" /> },
        { name: "Python", icon: <SiPython className="text-yellow-500" /> },
        { name: "MySql", icon: <SiMysql className="text-blue-600" /> },
        { name: "MongoDB", icon: <BiLogoMongodb className="text-green-500" /> },
        { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
        { name: "Laravel", icon: <FaLaravel className="text-cyan-500" /> },
        { name: "Flutter/Dart", icon: <SiFlutter className="text-blue-400" /> },
      ],
    },
    {
      title: "Development Tools",
      icon: <Settings2 className="w-5 h-5 text-cyan-400" />,
      skills: [
        {
          name: "VS Code",
          icon: <BiLogoVisualStudio className="text-blue-500" />,
        },
        {
          name: "Android Studio",
          icon: <SiAndroidstudio className="text-green-500" />,
        },
        { name: "PyCharm", icon: <SiPycharm className="text-green-400" /> },
        { name: "Git", icon: <SiGit className="text-orange-600" /> },
        { name: "Github", icon: <FaGithub className="text-white" /> },
      ],
    },
    {
      title: "Soft Skills",
      icon: <Lightbulb className="w-5 h-5 text-cyan-400" />,
      isPills: true,
      skills: [
        { name: "Teamwork", icon: <Users className="w-4 h-4 text-cyan-400" /> },
        {
          name: "Time Management",
          icon: <Clock className="w-4 h-4 text-cyan-400" />,
        },
        {
          name: "Growth Mindset",
          icon: <TrendingUp className="w-4 h-4 text-cyan-400" />,
        },
        {
          name: "Responsibility",
          icon: <Scale className="w-4 h-4 text-cyan-400" />,
        },
        {
          name: "Work Ethics",
          icon: <Heart className="w-4 h-4 text-cyan-400" />,
        },
        {
          name: "Creative Thinking",
          icon: <BrainCircuit className="w-4 h-4 text-cyan-400" />,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#05071a] text-white py-20 px-8 md:px-24"
    >
      <div className="flex items-center gap-4 mb-16">
        <span className="text-cyan-400 font-mono text-2xl">03.</span>
        <h2 className="text-4xl md:text-5xl font-bold">Technical Skills</h2>
      </div>

      <div className="space-y-10">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              {category.icon}
              <h3 className="text-xl font-semibold text-cyan-400 tracking-wide">
                {category.title}
              </h3>
            </div>

            <div
              className={
                category.isPills
                  ? "flex flex-wrap gap-4"
                  : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
              }
            >
              {category.skills.map((skill, sIndex) => (
                <div
                  key={sIndex}
                  className={`group flex items-center transition-all duration-300 cursor-default border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/60 bg-slate-800/30 
                    ${
                      category.isPills
                        ? "px-6 py-3 rounded-full gap-3"
                        : "flex-col justify-center p-6 rounded-2xl"
                    }`}
                >
                  <div
                    className={`${category.isPills ? "text-xl" : "text-4xl mb-4"} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {skill.icon}
                  </div>
                  <span
                    className={`font-medium text-gray-300 group-hover:text-white transition-colors text-center 
                    ${category.isPills ? "text-base" : "text-sm"}`}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
