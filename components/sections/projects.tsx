import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const projects = [
  {
    title: "KitaCycle: Waste Management App",
    description:
      "KitaCycle is a mobile application designed to revolutionize waste management in Malaysia by addressing inefficiencies and challenges faced by both consumers and waste collectors.",
    technologies: ["React Native", "ExpressJS", "MongoDB"],
    github: "https://github.com",
    live: "https://pixelusm.com/projects/id/U2FsdGVkX18exdJUVUn9OiOD0RUHbSMXC0BMTRbmmrfx7JWHz437cspRYPF1Cydh",
    image: "/assets/images/kitacycle.png",
  },
  {
    title: "iQalqalah",
    description:
      "IqAlqalah is a fun, interactive app that teaches Tajweed rules through quizzes, notes, and games, making Quran learning engaging and easy for kids.",
    technologies: ["Flutter", "Firebase"],
    github: "https://github.com/amirulirrfaan/iqalqalah",
    live: "https://github.com/amirulirrfaan/iqalqalah",
    image: "/assets/images/iqalqalah_screenshot.jpg",
  },
  {
    title: "Oxsika iKUPS ",
    description:
      "Oxsika is a high school alumni website that connects former students, fostering lifelong bonds through shared memories, events, and networking opportunities.",
    technologies: ["React", "NextJs", "ShadCN", "Tailwind"],
    github: "https://github.com",
    live: "https://oxsika.netlify.app/",
    image: "/assets/images/oxsika_screenshot.png",
  },
  {
    title: "TypeMaster: Typing Test Website",
    description:
      "TypeMaster is an interactive online typing test platform that helps users improve their typing speed and accuracy. Users can track their progress by viewing detailed statistics, including their words per minute (WPM) and average performance over time.",
    technologies: ["React", "NextJs", "ShadCN", "Tailwind"],
    github: "https://github.com/amirulirrfaan/typemaster",
    live: "https://typemasterdev.netlify.app/",
    image: "/assets/images/typemaster.png",
  },
];

export default function Projects() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  React.useEffect(() => {
    // Scroll to the section after page change
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
  }, [currentPage]);

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4"
      >
        <motion.div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent work and technical achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <motion.div key={project.title} className="group">
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

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Prevent scroll to top
                  handlePageChange(currentPage - 1);
                }}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent scroll to top
                    handlePageChange(index + 1);
                  }}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Prevent scroll to top
                  handlePageChange(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </motion.div>
    </section>
  );
}
