import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/Haseebahmed0343",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/haseeb-ahmed-tariq-a524a519b",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram className="w-5 h-5" />,
      href: "https://www.instagram.com/haseebtariqsheikh/",
      label: "Instagram",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:haseebahmed0343@gmail.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#05071a] border-t border-slate-800/50 py-12 px-8 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-400">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold tracking-tight text-white">
            Haseeb <span className="text-indigo-500">Ahmed Tariq</span>
          </h1>
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-5">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2.5 rounded-xl bg-slate-900/50 border border-slate-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
