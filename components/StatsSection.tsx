"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedCounter from './AnimatedCounter';
import { Braces, Building, Users, Award } from 'lucide-react';
import { formatNumber } from '@/lib/utils';

const stats = [
  { 
    id: 1, 
    icon: Braces, 
    value: 250, 
    label: 'Projekte geliefert', 
    suffix: '+',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/20'
  },
  { 
    id: 2, 
    icon: Building, 
    value: 120, 
    label: 'Zufriedene Kunden', 
    suffix: '+',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/20'
  },
  { 
    id: 3, 
    icon: Users, 
    value: 15, 
    label: 'Experten im Team', 
    suffix: '+',
    color: 'text-green-500',
    bgColor: 'bg-green-500/20'
  },
  { 
    id: 4, 
    icon: Award, 
    value: 25, 
    label: 'Auszeichnungen', 
    suffix: '',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/20'
  }
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className={`p-3 rounded-full ${stat.bgColor} ${stat.color} mb-4`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold mb-2">
                      <AnimatedCounter
                        from={0}
                        to={stat.value}
                        formatter={(value) => `${formatNumber(value)}${stat.suffix}`}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}