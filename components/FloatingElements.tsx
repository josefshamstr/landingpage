"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { floatingAnimation } from '@/lib/animations';

export default function FloatingElements() {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%`,
            opacity: 0.1 + Math.random() * 0.2,
            scale: 0.5 + Math.random() * 1
          }}
          style={{
            width: `${30 + Math.random() * 70}px`,
            height: `${30 + Math.random() * 70}px`,
            background: `radial-gradient(circle, rgba(255,97,56,0.3) 0%, rgba(255,97,56,0) 70%)`,
            left: `${index * 20}%`,
          }}
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.5
          }}
        />
      ))}
    </>
  );
}