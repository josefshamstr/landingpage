"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "Kostenlos",
    description: "Perfekt für kleine Projekte und Einzelunternehmer",
    features: [
      "Bis zu 2 Seiten",
      "Basis SEO-Optimierung",
      "E-Mail Support",
      "Responsive Design",
      "SSL-Zertifikat"
    ],
    highlighted: false
  },
  {
    name: "Professional",
    price: "999€",
    period: "/m",
    description: "Ideal für wachsende Unternehmen",
    features: [
      "Bis zu 10 Seiten",
      "Erweiterte SEO-Optimierung",
      "Premium Support",
      "CMS-Integration",
      "Analytics-Integration",
      "Performance-Optimierung"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "1.999€",
    period: "/m",
    description: "Maßgeschneiderte Lösungen für große Unternehmen",
    features: [
      "Unbegrenzte Seiten",
      "Vollständige SEO-Strategie",
      "24/7 Priority Support",
      "Individuelle Entwicklung",
      "E-Commerce Integration",
      "Erweiterte Sicherheit"
    ],
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="relative">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
          <h1 className="text-[20vw] font-bold text-foreground/[0.4] leading-none mt-[-20vh]">
            Preise
          </h1>
        </div>
        
        {/* Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-[30vh] max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className={`relative h-full overflow-hidden backdrop-blur-xl border-[0.5px] ${
                plan.highlighted 
                  ? 'bg-orange-500/5 border-orange-500/20' 
                  : 'bg-background/20 border-border/20'
              }`}
              style={{
                boxShadow: plan.highlighted 
                  ? '0 0 40px -15px rgba(249, 115, 22, 0.2)' 
                  : '0 0 40px -15px rgba(0, 0, 0, 0.05)'
              }}>
                {plan.highlighted && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-orange-500 text-white text-sm px-3 py-1 rounded-bl-lg">
                      Empfohlen
                    </div>
                  </div>
                )}
                <CardHeader className="pb-8 pt-6">
                  <CardTitle className="text-lg mb-2">{plan.name}</CardTitle>
                  <CardDescription className="mb-4">{plan.description}</CardDescription>
                  <div className="flex items-baseline">
                    <span className="text-6xl font-bold tracking-tight">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className={`p-1 rounded-full ${
                          plan.highlighted ? 'bg-orange-500/20 text-orange-500' : 'bg-primary/20'
                        }`}>
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full rounded-full h-12 ${
                      plan.highlighted 
                        ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                        : 'bg-background/50 hover:bg-background/80'
                    }`}
                    variant={plan.highlighted ? 'default' : 'outline'}
                  >
                    Jetzt starten
                  </Button>
                </CardContent>

                {/* Glassmorphism effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-white/10 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-muted-foreground"
        >
          <p>Alle Preise zzgl. MwSt. • Jährliche Zahlung möglich • 14 Tage Geld-zurück-Garantie</p>
        </motion.div>
      </div>
    </section>
  );
}