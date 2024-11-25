"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Let&apos;s get in touch!
        </h2>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent>
              <div className="text-center mt-4">
                <p>
                  If you have any questions or inquiries, feel free to reach out
                  to me:
                </p>
                <div className="mt-4">
                  <a
                    href="mailto:amirulirrfaan@gmail.com"
                    className="text-primary hover:underline"
                  >
                    amirulirrfaan@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
