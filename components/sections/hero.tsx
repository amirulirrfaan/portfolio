"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Lottie from "react-lottie-player";
import animationData from "../../animations/coding.json"; // Replace with your Lottie file path
import { Button } from "../ui/button";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dot-pattern">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-primary/10 animate-gradient-x" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      {/* Content Layout */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 flex items-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Section: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            variants={itemVariants}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm"
          >
            Software Engineer
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"
          >
            Amirul Irfan
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto md:mx-0"
          >
            Crafting exceptional digital experiences through innovative{" "}
            <span className="text-primary font-medium">web</span> and{" "}
            <span className="text-primary font-medium">mobile</span> solutions
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-12"
          >
            <Link href="https://github.com/amirulirrfaan" target="_blank">
              <Button
                variant="outline"
                size="lg"
                className="group bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40"
              >
                <Github className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                GitHub
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/amirul-irfan-35959821a/"
              target="_blank"
            >
              <Button
                variant="outline"
                size="lg"
                className="group bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40"
              >
                <Linkedin className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                LinkedIn
              </Button>
            </Link>
            <Link href="mailto:amirulirrfaan@gmail.com">
              <Button
                variant="outline"
                size="lg"
                className="group bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40"
              >
                <Mail className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                Email
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link href="#projects">
              <Button
                size="lg"
                className="group bg-primary text-primary-foreground hover:bg-primary/90"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Right Section: Lottie Animation */}
        <motion.div
          className="flex-1 hidden md:flex justify-center items-center"
          variants={itemVariants}
        >
          <Lottie
            loop
            animationData={animationData}
            play
            style={{ width: "100%", maxWidth: 400, height: "auto" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
