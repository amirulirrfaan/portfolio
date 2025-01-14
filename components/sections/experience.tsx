"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const experiences = [
  {
    title: "Software Developer",
    company: "Illusion Data",
    period: "2025 - Present",
    responsibilities: [
      "Developed web applications using ReactJS , Laravel",
      "Utilized Iris Intersystems for backend development",
      "Developed mobile applications using Flutter",
    ],
    technologies: ["React", "Laravel", "Flutter", "PHP"],
  },
  {
    title: "Mobile App Developer",
    company: "Silkron Tech",
    period: "2024 - 2025",
    responsibilities: [
      "Developed cross-platform mobile applications using Flutter with bloc state management",
      "Integrated third-party APIs and services",
      "Utilized Yii2 framework for backend development",
    ],
    technologies: ["Flutter", "Yii2", "bloc", "PHP"],
  },
  {
    title: "Software Engineer Intern ",
    company: "Critical Manufacturing Malaysia",
    period: "March 2023 - September 2023",
    responsibilities: [
      "Developed cross-platform mobile applications",
      "Optimized app performance and reduced load times",
      "Integrated third-party APIs and services",
    ],
    technologies: ["React Native", "iOS", "Android", "Firebase"],
  },
  {
    title: "Part-time Web Developer",
    company: "Bursary USM",
    period: "September 2022 - December 2022",
    responsibilities: [
      "Designed and implemented an Inventory Booking Web application for Jabatan Bendahari USM (Bursary USM).",
      "Managed database design and optimization",
      "Utilized CodeIgniter 3 framework and MVC architecture to develop the web application and assisted in the system integration with a live MSSQL database.",
    ],
    technologies: ["Bootstrap", "CodeIgniter 3", "MSSQL", "MVC"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-primary">Experience</h2>
          <Link
            href="https://drive.google.com/file/d/1yb0g0iAulCqe90rdqjvzPH5qiDCq_pMu/view?usp=sharing"
            target="_blank"
            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            View Full Résumé
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="space-y-4">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-border/40 hover:border-primary/20 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg font-semibold">
                        {experience.title}
                      </CardTitle>
                      <p className="text-primary font-medium text-sm">
                        {experience.company}
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary text-xs"
                    >
                      {experience.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    {experience.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
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
