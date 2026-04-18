import { Code2, Moon } from "lucide-react";

export default function Navbar() {
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#05071a]/90 backdrop-blur-sm text-white p-2 px-8 flex items-center justify-between border-b border-gray-800">
      <div className="flex items-center gap-2">
        <Code2 className="w-8 h-8 text-cyan-400" />
        <h1 className="text-xl font-bold tracking-tight">
          Haseeb <span className="text-indigo-500">Ahmed Tariq</span>
        </h1>
      </div>

      <ul className="hidden md:flex items-center gap-10 text-gray-300">
        <li>
          <a
            href="#home"
            className="relative group hover:text-cyan-400 transition-colors"
          >
            Home
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="relative group hover:text-cyan-400 transition-colors"
          >
            About
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="relative group hover:text-cyan-400 transition-colors"
          >
            Experience
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="relative group hover:text-cyan-400 transition-colors"
          >
            Skills
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="relative group hover:text-cyan-400 transition-colors"
          >
            Contact
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </ul>

      <div className="opacity-0">
        <button className="p-3 rounded-full border border-gray-700 bg-gray-800/40 hover:bg-cyan-400 hover:-rotate-20 transition-all duration-500">
          <Moon className="w-6 h-6 text-white" />
        </button>
      </div>
    </nav>
  );
}
