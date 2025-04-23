import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateRandomData = (length: number, min: number, max: number) => {
  return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1) + min));
};

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export const getGradientColors = (index: number) => {
  const gradients = [
    ['rgba(255, 99, 71, 0.7)', 'rgba(255, 99, 71, 0.1)'],
    ['rgba(90, 200, 250, 0.7)', 'rgba(90, 200, 250, 0.1)'],
    ['rgba(255, 184, 108, 0.7)', 'rgba(255, 184, 108, 0.1)'],
    ['rgba(154, 230, 180, 0.7)', 'rgba(154, 230, 180, 0.1)'],
  ];
  
  return gradients[index % gradients.length];
};