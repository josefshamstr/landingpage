"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Palette, LineChart } from 'lucide-react';
import FloatingElements from './FloatingElements';

const services = [
  { name: "Webentwicklung", icon: Code },
  { name: "UI/UX Design", icon: Palette },
  { name: "Wachstumslösungen", icon: LineChart },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <FloatingElements />
      
      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl md:max-w-3xl space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Wir entwickeln{' '}
              <span className="text-orange-500 inline-block relative">
                digitale Erlebnisse
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>{' '}
              die überzeugen
            </h1>
            <p className="text-xl md:text-2xl mt-4 text-muted-foreground">
              Wir transformieren Unternehmen mit innovativen Weblösungen, die messbare Ergebnisse liefern.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mt-8"
          >
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
              Jetzt starten
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Referenzen ansehen
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-12"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="p-1.5 rounded-full bg-orange-500/20 text-orange-500">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm md:text-base">{service.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
    </section>
  );
}