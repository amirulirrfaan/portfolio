"use client";

import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Fixed left hero section */}
      <div className="lg:w-[40%] lg:fixed lg:top-0 lg:left-0 lg:h-screen">
        <Hero />
      </div>

      {/* Scrollable right content */}
      <div className="lg:w-[60%] lg:ml-[40%]">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <About />
          <Experience />
          <Skills />
          <Projects />
        </div>
      </div>
    </div>
  );
}
