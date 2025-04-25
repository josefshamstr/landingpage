"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Palette, LineChart } from 'lucide-react';
import FloatingElements from './FloatingElements';

const services = [
  { name: "Webentwicklung", icon: Code },
  { name: "UI/UX Design", icon: Palette },
  { name: "Wachstumslösungen", icon: LineChart },
];

const phrases = [
  "Wir entwickeln digitale Erlebnisse die überzeugen",
  "Wir entwickeln innovative Lösungen die begeistern",
  "Wir entwickeln Zukunft die inspiriert"
];

// Statischer Content für SEO
const StaticHero = () => (
  <div className="sr-only">
    <h1>Wir entwickeln digitale Erlebnisse die überzeugen</h1>
    <p>Wir transformieren Unternehmen mit innovativen Weblösungen, die messbare Ergebnisse liefern.</p>
  </div>
);

// Dynamischer Content für Animation
const DynamicHero = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        if (text === "Wir entwickeln") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        } else {
          setText(currentPhrase.substring(0, text.length - 1));
        }
      }, 100);
    } else {
      timeout = setTimeout(() => {
        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else {
          setText(currentPhrase.substring(0, text.length + 1));
        }
      }, 200);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentPhraseIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-xl md:max-w-3xl space-y-4"
    >
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
        {text.startsWith("Wir entwickeln") ? (
          <>
            Wir entwickeln{' '}
            <span className="text-orange-500">
              {text.slice("Wir entwickeln ".length)}
            </span>
          </>
        ) : (
          text
        )}
        <span className="inline-block w-[2px] h-[1em] bg-orange-500 ml-1 animate-blink" />
      </h1>
      <p className="text-xl md:text-2xl mt-4 text-muted-foreground">
        Wir transformieren Unternehmen mit innovativen Weblösungen, die messbare Ergebnisse liefern.
      </p>
    </motion.div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <FloatingElements />
      
      <div className="relative z-10 py-12 md:py-24">
        <div className="flex flex-col items-center text-center space-y-12 md:space-y-16 mx-auto">
          <StaticHero />
          <Suspense fallback={<StaticHero />}>
            <DynamicHero />
          </Suspense>

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