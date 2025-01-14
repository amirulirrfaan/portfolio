"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";

export default function Hero() {
  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative h-full flex flex-col justify-between bg-grid-pattern p-8 py-20">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />

      {/* Theme Toggle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute top-4 left-4 z-20"
      >
        <ModeToggle />
      </motion.div>

      {/* Container for alignment */}
      <div className="flex flex-col h-full justify-between items-center lg:items-end lg:pr-16">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 pt-16 md:pt-24"
        >
          <div className="max-w-md">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-sans text-sm mb-4"
            >
              Hi, my name is
            </motion.p>

            <h1 className="text-3xl md:text-4xl font-sans font-bold mb-3">
              Amirul Irfaan.
            </h1>

            <h2 className="text-2xl md:text-3xl font-sans font-bold text-muted-foreground mb-6">
              I build things for the web.
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground font-sans text-sm mb-8"
            >
              I'm a software engineer specializing in building exceptional
              digital experiences. Currently, I'm focused on building
              accessible, human-centered products.
            </motion.p>

            {/* Navigation Menu - Hidden on mobile */}
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="z-10 hidden lg:block"
            >
              <ul className="flex flex-col gap-4">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                      className="group flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span className="h-[1px] w-12 bg-primary/30 group-hover:w-24 group-hover:bg-primary transition-all" />
                      <span className="font-sans text-sm">{item.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="z-10 flex flex-wrap gap-3"
        >
          <Link href="https://github.com/amirulirrfaan" target="_blank">
            <Button
              variant="outline"
              size="default"
              className="group border-primary/20 hover:border-primary/50"
            >
              <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
              GitHub
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/amirulirrfaan" target="_blank">
            <Button
              variant="outline"
              size="default"
              className="group border-primary/20 hover:border-primary/50"
            >
              <Linkedin className="h-4 w-4 transition-transform group-hover:scale-110" />
              LinkedIn
            </Button>
          </Link>
          <Link href="mailto:amirulirrfaan@gmail.com">
            <Button variant="default" size="default" className="group">
              <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
              Contact
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
