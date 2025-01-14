"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "KitaCycle",
    description:
      "A web platform for recycling management and community engagement. Users can schedule pickups, track their recycling impact, and earn rewards for their environmental contributions.",
    image: "/assets/images/kitacycle.png",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/amirulirrfaan/kitacycle",
  },
  {
    title: "Natan Pest Control",
    description:
      "A website for Natan Pest Control, a pest control company that provides services to the public.",
    image: "/assets/images/pest_control.png",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/amirulirrfaan/pest-control",
    external: "  https://www.natanpestcontrol.com/",
  },
  {
    title: "Eranar Healthcare",
    description:
      "A website for Eranar Healthcare, a healthcare company that provides medical services to the public.",
    image: "/assets/images/eranar.png",
    tech: ["React", "Vite", "Tailwind CSS"],

    external: "https://www.eranar.com/",
  },
  {
    title: "IQalQalah",
    description:
      "A mobile application that helps users learn Quranic recitation rules through interactive lessons and quizzes. Features include progress tracking, audio playback, and practice exercises.",
    image: "/assets/images/iqalqalah_screenshot.jpg",
    tech: ["Flutter", "Firebase"],
    github: "https://github.com/amirulirrfaan/iqalqalah",
  },

  {
    title: "Oxsika",
    description:
      "A comprehensive e-commerce platform built with modern web technologies. Features include product management, shopping cart functionality, and secure payment processing.",
    image: "/assets/images/oxsika_screenshot.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    external: "https://oxsika.netlify.app/",
  },

  {
    title: "TypeMaster",
    description:
      "An interactive typing practice application with multiple difficulty levels, custom text input, and detailed performance analytics to help users improve their typing speed and accuracy.",
    image: "/assets/images/typemaster.png",
    tech: ["React", "TypeScript", "Chart.js"],
    external: "https://typemasterdev.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-primary">
            Some Things I've Built
          </h2>
          <Link
            href="/archive"
            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            View Full Project Archive
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row gap-6"
            >
              {/* Project Image */}
              <div className="block w-full md:w-48 shrink-0">
                {project.external ? (
                  <Link
                    href={project.external}
                    target="_blank"
                    className="block"
                  >
                    <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden">
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                ) : (
                  <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="flex-1">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {project.description}
                    </p>
                  </div>

                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                    )}
                    {project.external && (
                      <Link
                        href={project.external}
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <LinkIcon className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
