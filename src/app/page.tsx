import About from "@/component/home/About";
import Blog from "@/component/home/Blog";
import Contact from "@/component/home/Contact";
import Hero from "@/component/home/Hero";
import Projects from "@/component/home/Projects";
import Services from "@/component/home/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Blog />
      <Contact />
    </div>
  );
}
