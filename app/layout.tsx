import './globals.css';
import type { Metadata } from 'next';
import { inter, spaceGrotesk } from '@/lib/fonts';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Schnitzelbytes | Web Development Agency',
  description: 'Schnitzelbytes is a premier web development agency specializing in creating high-converting websites and digital experiences.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}