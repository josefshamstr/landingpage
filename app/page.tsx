import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import StatsSection from '@/components/StatsSection';
import ResultsSection from '@/components/ResultsSection';
import ClientLogos from '@/components/ClientLogos';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <ClientLogos />
      <Services />
      <StatsSection />
      <ResultsSection />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}