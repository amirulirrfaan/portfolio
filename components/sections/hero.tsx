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
    <section className="relative h-full flex flex-col justify-center bg-grid-pattern p-20">
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

      {/* Main Content */}
      <div className="z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-sans text-sm"
          >
            Hi, my name is
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Amirul Irfaan.
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-muted-foreground">
            I build things for the web.
          </h2>
          <p className="text-muted-foreground max-w-xl">
            I'm a software engineer specializing in building web and mobile
            applications.
          </p>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="pt-8"
          >
            <ul className="flex flex-col gap-3">
              {menuItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="group flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="h-[1px] w-12 bg-primary/30 group-hover:w-24 group-hover:bg-primary transition-all" />
                    <span className="text-sm uppercase tracking-wider">
                      {item.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4 mt-12"
        >
          <Link href="https://github.com/amirulirrfaan" target="_blank">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/amirulirrfaan" target="_blank">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="mailto:amirulirrfaan@gmail.com">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
