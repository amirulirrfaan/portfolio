"use client";

import { motion } from "framer-motion";
import {
  FaAndroid,
  FaDocker,
  FaGithub,
  FaNodeJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import {
  SiApple,
  SiFirebase,
  SiFlutter,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { Card, CardContent } from "../ui/card";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Flutter", icon: SiFlutter },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: null },
      { name: "PHP", icon: FaPhp },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "React Native", icon: FaReact },
      { name: "Flutter", icon: SiFlutter },
      { name: "iOS", icon: SiApple },
      { name: "Android", icon: FaAndroid },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "GitHub", icon: FaGithub },
      { name: "Docker", icon: FaDocker },
      { name: "Firebase", icon: SiFirebase },
      { name: "Vercel", icon: SiVercel },
      { name: "Postman", icon: SiPostman },
    ],
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
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Skills
        </h2>
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
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="h-full"
              >
                <Card className="h-full bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 dark:text-white">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg border shadow-sm dark:border-gray-600"
                        >
                          {skill.icon && (
                            <skill.icon className="text-xl text-blue-500 dark:text-blue-400" />
                          )}
                          <span className="text-sm font-medium dark:text-gray-200">
                            {skill.name}
                          </span>
                        </motion.div>
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
