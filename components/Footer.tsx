"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const footerLinks = [
  {
    title: 'Unternehmen',
    links: [
      { name: 'Über uns', href: '#' },
      { name: 'Karriere', href: '#' },
      { name: 'Kontakt', href: '#' },
      { name: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Leistungen',
    links: [
      { name: 'Webentwicklung', href: '#' },
      { name: 'UX/UI Design', href: '#' },
      { name: 'Wachstumsmarketing', href: '#' },
      { name: 'Analyse', href: '#' },
    ],
  },
  {
    title: 'Rechtliches',
    links: [
      { name: 'Impressum', href: '/impressum' },
      { name: 'Datenschutzerklärung', href: '/datenschutz' },
      { name: 'Cookie-Richtlinie', href: '#' },
    ],
  },
];

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'E-Mail', icon: Mail, href: 'mailto:hello@schnitzelbytes.com' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-xl font-bold">
                <span className="text-primary">Schnitzel</span>
                <span className="text-orange-500">bytes</span>
              </div>
              <p className="text-muted-foreground max-w-xs">
                Wir entwickeln außergewöhnliche digitale Erlebnisse, die echtes Geschäftswachstum ermöglichen.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {footerLinks.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * groupIndex }}
              viewport={{ once: true }}
            >
              <h3 className="font-medium text-base mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-border pt-6 mt-12 flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Schnitzelbytes. Alle Rechte vorbehalten.
          </p>
          <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
            Mit ❤️ entwickelt in Wien 
          </p>
        </motion.div>
      </div>
    </footer>
  );
}