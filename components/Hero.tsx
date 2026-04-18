import { Mail, FolderKanban } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  const socialLinks = [
    {
      Icon: FaGithub,
      href: "https://github.com/Haseebahmed0343",
      label: "GitHub",
    },
    {
      Icon: FaLinkedin,
      href: "https://www.linkedin.com/in/haseeb-ahmed-tariq-a524a519b",
      label: "LinkedIn",
    },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/haseebtariqsheikh/",
      label: "Instagram",
    },
    {
      Icon: FaEnvelope,
      href: "mailto:haseebahmed0343@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section id="home" className="min-h-screen bg-[#05071a] text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-24 pt-20 overflow-hidden">
      <div className="max-w-2xl space-y-6 z-10">
        <div className="flex items-center gap-2 text-xl">
          <span className="animate-bounce">👋</span>
          <span className="text-gray-300 font-medium">Hello, I'm</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Haseeb Ahmed <span className="text-indigo-500">Tariq</span>
        </h1>

        <h2 className="text-3xl font-semibold">
          A <span className="text-indigo-400">Full-Stack Developer</span>
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
          Passionate Full-Stack developer and Computer Science student crafting
          innovative web applications with clean code and modern design
          principles.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a href="#contact" className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
            <Mail className="w-5 h-5" /> Contact Me
          </a>
          <a href="#experience" className="flex items-center gap-2 border-2 border-cyan-500/50 hover:border-cyan-400 text-cyan-400 px-8 py-3 rounded-xl font-medium transition-all active:scale-95">
            <FolderKanban className="w-5 h-5" /> View Experience
          </a>
        </div>

        <div className="flex gap-4 pt-8">
          {socialLinks.map(({ Icon, href, label }, index) => (
            <a
              key={index}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-indigo-500 hover:text-indigo-400 transition-all hover:-translate-y-1"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      <div className="relative mt-16 md:mt-0">
        <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full animate-pulse"></div>

        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-[6px] border-indigo-500/30 flex items-center justify-center p-4">
          <div className="relative w-full h-full rounded-full border-[6px] border-indigo-500 overflow-hidden bg-indigo-950">
            <Image
              src="/picture.jpeg"
              alt="Haseeb Ahmed Tariq"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          <div className="absolute -left-2 bottom-20 w-12 h-12 bg-gray-900 border-2 border-indigo-500 rounded-full flex items-center justify-center shadow-xl animate-bounce [animation-delay:-0.5s]">
            <span className="text-xs font-bold text-cyan-400">JS</span>
          </div>
          <div className="absolute left-6 -bottom-2 w-12 h-12 bg-gray-900 border-2 border-indigo-500 rounded-full flex items-center justify-center shadow-xl animate-bounce [animation-delay:-1s]">
            <span className="text-xs font-bold text-yellow-500">PY</span>
          </div>
          <div className="absolute -right-2 top-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-indigo-500 animate-bounce">
            <span className="text-xs font-bold text-blue-600">TS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
