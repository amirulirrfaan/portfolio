"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const projects = [
  {
    title: "KitaCycle: Waste Management App",
    description:
      "A full-featured e-commerce platform with real-time inventory management.",
    technologies: ["React Native", "ExpressJS", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/assets/images/kitacycle.png",
  },
  {
    title: "iQalqalah",
    description:
      "A mobile-first task management application with collaborative features.",
    technologies: ["Flutter", "Firebase"],
    github: "https://github.com",
    live: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=400&fit=crop",
  },
  {
    title: "Oxsika iKUPS ",
    description: "A real-time messaging platform with end-to-end encryption.",
    technologies: ["React", "NextJs"],
    github: "https://github.com",
    live: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=400&fit=crop",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent work and technical achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-primary/10 bg-gradient-to-b from-background to-primary/5">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        className="w-full group/btn hover:border-primary/40"
                      >
                        <Github className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
                        Code
                      </Button>
                    </Link>
                    <Link
                      href={project.live}
                      target="_blank"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        className="w-full group/btn hover:border-primary/40"
                      >
                        <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
                        Live
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
