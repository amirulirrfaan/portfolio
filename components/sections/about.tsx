"use client";

import { motion } from "framer-motion";
import { Code, Layout, Smartphone } from "lucide-react"; // Import relevant icons
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-16">What I Do</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card: Full-stack Web Development */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="transition-transform flex flex-col h-full">
              <CardHeader className="flex items-center gap-4">
                <Code className="h-10 w-10 text-primary" /> {/* Icon */}
                <CardTitle className="text-xl font-medium">
                  Full-stack Web Development
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  Crafting dynamic, responsive websites using modern front-end
                  frameworks and robust back-end technologies.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card: Mobile App Development */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="transition-transform flex flex-col h-full">
              <CardHeader className="flex items-center gap-4">
                <Smartphone className="h-10 w-10 text-primary" /> {/* Icon */}
                <CardTitle className="text-xl font-medium">
                  Mobile App Development
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  Building feature-rich mobile apps with a focus on usability,
                  performance, and cross-platform compatibility.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card: UI/UX Design Implementation */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="transition-transform flex flex-col h-full">
              <CardHeader className="flex items-center gap-4">
                <Layout className="h-10 w-10 text-primary" /> {/* Icon */}
                <CardTitle className="text-xl font-medium">
                  UI/UX Design Implementation
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  Transforming design concepts into visually appealing and
                  intuitive user interfaces.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
