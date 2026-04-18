import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Backtotop from "@/components/Backtotop";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero /> 
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      <Backtotop />
    </>
  );
}
