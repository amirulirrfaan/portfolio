"use client";

import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PHP", "MySQL", "MongoDB"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "Firebase", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }} // Add the hover effect for scaling
                transition={{ duration: 0.3 }} // Duration for the scaling animation
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
