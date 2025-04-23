"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { chartAnimation } from '@/lib/animations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ChartProps {
  title: string;
  description: string;
  data: any[];
  dataKey: string;
  strokeColor: string;
  fillColor: string;
  increase: string;
}

export default function ConversionChart({
  title,
  description,
  data,
  dataKey,
  strokeColor,
  fillColor,
  increase,
}: ChartProps) {
  const chartRef = React.useRef(null);
  const isInView = useInView(chartRef, { once: true, amount: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showIncrease, setShowIncrease] = useState(false);
  
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      setTimeout(() => {
        setShowIncrease(true);
      }, 1000);
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.div
      ref={chartRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={chartAnimation}
      className="h-full"
    >
      <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
        <CardHeader className="relative pb-0">
          <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          {showIncrease && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-4 right-4 bg-green-500/20 text-green-500 px-2 py-1 rounded-md text-sm font-medium"
            >
              +{increase}
            </motion.div>
          )}
        </CardHeader>
        <CardContent className="p-0 pt-4 h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id={`colorGradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={fillColor} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={fillColor} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" tick={{fill: 'currentColor'}} stroke="rgba(255,255,255,0.2)" />
              <YAxis tick={{fill: 'currentColor'}} stroke="rgba(255,255,255,0.2)" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0,0,0,0.8)', 
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  color: 'white'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey={dataKey} 
                stroke={strokeColor} 
                fill={`url(#colorGradient-${title})`} 
                strokeWidth={3} 
                animationDuration={2000}
                isAnimationActive={true}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
}