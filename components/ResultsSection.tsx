"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ConversionChart from './ConversionChart';
import { generateRandomData } from '@/lib/utils';

const generateChartData = () => {
  const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug'];
  
  const conversionRate = months.map((name, index) => ({
    name,
    value: 1.2 + (index * 0.4) + (Math.random() * 0.3)
  }));
  
  const traffic = months.map((name, index) => ({
    name,
    value: 3000 + (index * 800) + (Math.random() * 500)
  }));
  
  const engagement = months.map((name, index) => ({
    name,
    value: 2 + (index * 0.3) + (Math.random() * 1.2 - 0.6)
  }));

  const revenue = months.map((name, index) => ({
    name,
    value: 15000 + (index * 4000) + (Math.random() * 2000)
  }));
  
  return { conversionRate, traffic, engagement, revenue };
};

export default function ResultsSection() {
  const [chartData, setChartData] = useState<any>(null);
  
  useEffect(() => {
    setChartData(generateChartData());
  }, []);
  
  if (!chartData) return null;
  
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Echte Ergebnisse für unsere Kunden
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Unser datengesteuerter Ansatz liefert messbare Verbesserungen in allen wichtigen Leistungskennzahlen.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ConversionChart
            title="Konversionsrate"
            description="Durchschnittliche Verbesserung der Website-Konversion"
            data={chartData.conversionRate}
            dataKey="value"
            strokeColor="#f97316"
            fillColor="#f97316"
            increase="185%"
          />
          
          <ConversionChart
            title="Organischer Traffic"
            description="Monatliches Wachstum der Website-Besucher"
            data={chartData.traffic}
            dataKey="value"
            strokeColor="#3b82f6"
            fillColor="#3b82f6"
            increase="210%"
          />
          
          <ConversionChart
            title="Nutzerinteraktion"
            description="Durchschnittliche Verweildauer auf der Seite (Minuten)"
            data={chartData.engagement}
            dataKey="value"
            strokeColor="#10b981"
            fillColor="#10b981"
            increase="137%"
          />
          
          <ConversionChart
            title="Umsatzwachstum"
            description="Monatliche Umsatzsteigerung für E-Commerce-Kunden"
            data={chartData.revenue}
            dataKey="value"
            strokeColor="#8b5cf6"
            fillColor="#8b5cf6"
            increase="243%"
          />
        </div>
      </div>
    </section>
  );
}