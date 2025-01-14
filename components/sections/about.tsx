"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-primary">About</h2>
        <div className="prose prose-sm dark:prose-invert space-y-4">
          <p className="text-muted-foreground">
            Hi! I'm Amirul, a software engineer who loves building digital
            experiences that live on the web. My journey in web development
            began in 2012 when I started customizing Blogger themes. What
            started as a fun project with HTML and CSS turned into a passion for
            creating websites and apps!
          </p>
          <p className="text-muted-foreground">
            Since then, I've worked at{" "}
            <span className="text-primary">a tech startup</span>,{" "}
            <span className="text-primary">a manufacturing company</span>, and{" "}
            <span className="text-primary">a software house</span>. These days,
            I focus on creating accessible and easy-to-use products for
            different clients.
          </p>
          <p className="text-muted-foreground">
            In my free time, you'll usually find me playing games, reading, or
            spending time with my wife and our cat 😼. I'm also open to
            freelancing, offering my skills in web development and creating
            accessible digital experiences.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
