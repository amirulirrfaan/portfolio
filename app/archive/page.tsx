"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowLeft, Github, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

type Project = {
  year?: string;
  title: string;
  description: string;
  madeAt?: string;
  tech: string[];
  github?: string;
  external?: string;
  image: string;
};

// Import projects from the projects section
const projects: Project[] = [
  {
    year: "2024",
    title: "KitaCycle",
    description:
      "A web platform for recycling management and community engagement. Users can schedule pickups, track their recycling impact, and earn rewards for their environmental contributions.",
    madeAt: "Personal Project",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/amirulirrfaan/kitacycle",
    image: "/assets/images/kitacycle.png",
  },
  {
    year: "2024",
    title: "Natan Pest Control",
    description:
      "A website for Natan Pest Control, a pest control company that provides services to the public.",
    madeAt: "Client Project",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/amirulirrfaan/pest-control",
    external: "https://www.natanpestcontrol.com/",
    image: "/assets/images/pest_control.png",
  },
  {
    year: "2023",
    title: "Eranar Healthcare",
    description:
      "A website for Eranar Healthcare, a healthcare company that provides medical services to the public.",
    madeAt: "Client Project",
    tech: ["React", "Vite", "Tailwind CSS"],
    external: "https://www.eranar.com/",
    image: "/assets/images/eranar.png",
  },
  {
    year: "2023",
    title: "IQalQalah",
    description:
      "A mobile application that helps users learn Quranic recitation rules through interactive lessons and quizzes. Features include progress tracking, audio playback, and practice exercises.",
    madeAt: "Personal Project",
    tech: ["Flutter", "Firebase"],
    github: "https://github.com/amirulirrfaan/iqalqalah",
    image: "/assets/images/iqalqalah_screenshot.jpg",
  },
  {
    year: "2023",
    title: "Oxsika",
    description:
      "A comprehensive e-commerce platform built with modern web technologies. Features include product management, shopping cart functionality, and secure payment processing.",
    madeAt: "Personal Project",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    external: "https://oxsika.netlify.app/",
    image: "/assets/images/oxsika_screenshot.png",
  },
  {
    year: "2022",
    title: "TypeMaster",
    description:
      "An interactive typing practice application with multiple difficulty levels, custom text input, and detailed performance analytics to help users improve their typing speed and accuracy.",
    madeAt: "Personal Project",
    tech: ["React", "TypeScript", "Chart.js"],
    external: "https://typemasterdev.netlify.app/",
    image: "/assets/images/typemaster.png",
  },
];

export default function Archive() {
  return (
    <div className="min-h-screen bg-background py-12 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="mb-8 sm:mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors mb-6 sm:mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 mb-3 sm:mb-4">
            Archive
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            A complete list of things I've worked on
          </p>
        </div>

        {/* Mobile View */}
        <div className="block sm:hidden space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border-b border-border/40 pb-8"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono text-muted-foreground">
                    {project.year || "—"}
                  </span>
                  <div className="flex items-center gap-3">
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
                <div>
                  <h3 className="font-medium text-lg">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {project.description}
                  </p>
                </div>
                {project.madeAt && (
                  <div className="text-sm text-muted-foreground">
                    {project.madeAt}
                  </div>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-none hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden sm:block relative overflow-x-auto rounded-xl border border-border/40">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border/40 bg-muted/30">
                <th className="py-5 px-6 font-medium text-muted-foreground">
                  Year
                </th>
                <th className="py-5 px-6 font-medium text-muted-foreground">
                  Project
                </th>
                <th className="py-5 px-6 font-medium text-muted-foreground hidden md:table-cell">
                  Made at
                </th>
                <th className="py-5 px-6 font-medium text-muted-foreground hidden lg:table-cell">
                  Built with
                </th>
                <th className="py-5 px-6 font-medium text-muted-foreground">
                  Links
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, i) => (
                <tr
                  key={i}
                  className="border-b border-border/40 hover:bg-muted/30 transition-all duration-300"
                >
                  <td className="py-5 px-6 text-muted-foreground font-mono">
                    {project.year || "—"}
                  </td>
                  <td className="py-5 px-6">
                    <div>
                      <div className="font-medium hover:text-primary transition-colors">
                        {project.title}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {project.description}
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-muted-foreground hidden md:table-cell">
                    {project.madeAt || "—"}
                  </td>
                  <td className="py-5 px-6 hidden lg:table-cell">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary border-none hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-4">
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          GitHub
                        </Link>
                      )}
                      {project.external && (
                        <Link
                          href={project.external}
                          target="_blank"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          External
                        </Link>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
