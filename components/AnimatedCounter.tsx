"use client";

import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  className?: string;
  formatter?: (value: number) => string;
}

export default function AnimatedCounter({
  from,
  to,
  duration = 2000,
  className,
  formatter = (value) => value.toString(),
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, amount: 0.5 });
  const stepTime = Math.abs(Math.floor(duration / (to - from)));

  useEffect(() => {
    let current = from;
    const counter = isInView
      ? setInterval(() => {
          current += 1;
          setCount(current);

          if (current === to) {
            clearInterval(counter);
          }
        }, stepTime)
      : null;

    return () => {
      if (counter) clearInterval(counter);
    };
  }, [from, to, stepTime, isInView]);

  return (
    <span ref={countRef} className={className}>
      {formatter(count)}
    </span>
  );
}