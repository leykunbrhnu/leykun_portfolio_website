import NavMenu from "@/components/sections/nav-menu"
import Hero from '@/components/sections/hero'
import Footer from "@/components/sections/footer"
import Projects from "@/components/sections/projects";
import AboutMe from "@/components/sections/about-me";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items justify-center">
      <div className="container max-w-screen-xl mx-auto px-[3.5%]">
        <NavMenu />
        <Hero />
        <Projects />
        <AboutMe />
        <Footer />
      </div>
    </div>
  );
}
