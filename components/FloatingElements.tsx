"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { floatingAnimation } from '@/lib/animations';

const ELEMENTS = [
  { width: 98, height: 67, left: 0, opacity: 0.15, scale: 0.8 },
  { width: 89, height: 80, left: 20, opacity: 0.2, scale: 0.9 },
  { width: 45, height: 88, left: 40, opacity: 0.18, scale: 0.7 },
  { width: 73, height: 98, left: 60, opacity: 0.12, scale: 0.85 },
  { width: 53, height: 35, left: 80, opacity: 0.25, scale: 0.75 },
];

export default function FloatingElements() {
  return (
    <>
      {ELEMENTS.map((element, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          initial={{ 
            x: `${element.left}%`, 
            y: `${20 + (index * 15)}%`,
            opacity: element.opacity,
            scale: element.scale
          }}
          style={{
            width: `${element.width}px`,
            height: `${element.height}px`,
            background: `radial-gradient(circle, rgba(255,97,56,0.3) 0%, rgba(255,97,56,0) 70%)`,
            left: `${element.left}%`,
          }}
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.5
          }}
        />
      ))}
    </>
  );
}