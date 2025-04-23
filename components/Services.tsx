"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { Code, Palette, BarChart3, Globe, Zap, LineChart } from 'lucide-react';

const services = [
  {
    title: "Webentwicklung",
    description: "Moderne, responsive und performanceoptimierte Websites und Anwendungen mit neuesten Technologien.",
    icon: Code
  },
  {
    title: "UX/UI Design",
    description: "Nutzerzentriertes Design, das die Benutzererfahrung verbessert und gleichzeitig Geschäftsziele und Markenästhetik erfüllt.",
    icon: Palette
  },
  {
    title: "Wachstumsmarketing",
    description: "Datengesteuerte Strategien zur Steigerung der Konversionsraten und nachhaltigem Unternehmenswachstum.",
    icon: BarChart3
  },
  {
    title: "SEO Optimierung",
    description: "Verbessern Sie Ihr Suchmaschinenranking und steigern Sie den organischen Traffic mit unseren umfassenden SEO-Lösungen.",
    icon: Globe
  },
  {
    title: "Performance Optimierung",
    description: "Steigern Sie die Website-Geschwindigkeit und -Leistung für bessere Benutzererfahrung und Konversionsraten.",
    icon: Zap
  },
  {
    title: "Analyse & Reporting",
    description: "Gewinnen Sie Einblicke mit umfassender Analytik und maßgeschneiderten Dashboards zur Verfolgung Ihrer digitalen Performance.",
    icon: LineChart
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Unsere Leistungen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Umfassende Weblösungen, entwickelt um Ihre Online-Präsenz zu transformieren und messbare Ergebnisse zu erzielen.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}