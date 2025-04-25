"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FLOATING_ELEMENTS = [
  { width: 146, height: 54, top: 53, left: 71 },
  { width: 80, height: 120, top: 92, left: 36 },
  { width: 71, height: 86, top: 48, left: 51 },
  { width: 91, height: 142, top: 24, left: 43 },
  { width: 67, height: 93, top: 82, left: 65 },
];

export default function CTA() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative rounded-3xl bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-background p-8 md:p-16 overflow-hidden max-w-6xl mx-auto"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          {FLOATING_ELEMENTS.map((element, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-orange-500/10"
              style={{
                width: `${element.width}px`,
                height: `${element.height}px`,
                top: `${element.top}%`,
                left: `${element.left}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Bereit Ihre digitale Präsenz zu transformieren?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-8"
          >
            Lassen Sie uns besprechen, wie Schnitzelbytes Ihnen dabei helfen kann, Ihre Geschäftsziele mit maßgeschneiderten Weblösungen zu erreichen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
              Jetzt loslegen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Unsere Arbeiten
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}