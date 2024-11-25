"use client";

import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const experiences = [
  {
    title: "Mobile App Developer",
    company: "Silkron Tech",
    period: "2024 - Present",
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
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{experience.title}</CardTitle>
                      <p className="text-muted-foreground">
                        {experience.company}
                      </p>
                    </div>
                    <Badge variant="secondary">{experience.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside mb-4 text-muted-foreground">
                    {experience.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
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
