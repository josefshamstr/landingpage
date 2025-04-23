"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export default function ServiceCard({ title, description, icon: Icon, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-orange-500/50 transition-all duration-300">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-md bg-orange-500/20 text-orange-500">
              <Icon className="h-5 w-5" />
            </div>
            <CardTitle>{title}</CardTitle>
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <motion.div 
            className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-orange-500/10 -mr-10 -mb-10"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1] 
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
}