"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                </div>
                <div>
                  <Input placeholder="Subject" />
                </div>
                <div>
                  <Textarea
                    placeholder="Your message"
                    className="min-h-[150px]"
                  />
                </div>
                <div className="flex justify-end">
                  <Button className="group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </form>

              <div className="mt-8 pt-8 border-t">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-5 w-5" />
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
