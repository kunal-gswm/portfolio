import Sidebar from "@/components/Sidebar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechnicalArsenal from "@/components/sections/TechnicalArsenal";
import FeaturedProject from "@/components/sections/FeaturedProject";
import SelectedWork from "@/components/sections/SelectedWork";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />
        
        <main id="content" className="pt-24 lg:w-[55%] lg:py-24">
          <Hero />
          <About />
          <TechnicalArsenal />
          <FeaturedProject />
          <SelectedWork />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  );
}
