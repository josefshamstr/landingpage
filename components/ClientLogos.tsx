"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Code, Figma, Github, Slack, Framer, Chrome } from 'lucide-react';

interface LogoProps {
  Icon: React.ElementType;
  delay: number;
}

const Logo = ({ Icon, delay }: LogoProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="flex items-center justify-center p-6"
  >
    <Icon className="h-8 w-8 md:h-10 md:w-10 text-muted-foreground opacity-70" />
  </motion.div>
);

export default function ClientLogos() {
  return (
    <div className="py-12 md:py-20">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-lg md:text-xl text-muted-foreground mb-8"
      >
        Vertraut von Branchenführern
      </motion.h3>
      <div className={cn(
        "grid grid-cols-3 md:grid-cols-6 gap-4 max-w-6xl mx-auto"
      )}>
        <Logo Icon={Code} delay={0.1} />
        <Logo Icon={Github} delay={0.2} />
        <Logo Icon={Slack} delay={0.3} />
        <Logo Icon={Figma} delay={0.4} />
        <Logo Icon={Chrome} delay={0.5} />
        <Logo Icon={Framer} delay={0.6} />
      </div>
    </div>
  );
}