"use client";

import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This will be true after the component is mounted in the browser
  }, []);

  if (!isClient) {
    return null; // Prevent rendering of the component on the server
  }

  return (
    <>
      <Hero />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </motion.div>
      </div>
    </>
  );
}
