"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="container px-4 md:px-6 py-24 mt-16">
        <h1 className="text-3xl font-bold mb-8">Impressum</h1>
        
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
            <p>Schnitzelbytes GmbH</p>
            <p>Musterstraße 123</p>
            <p>10115 Berlin</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Vertreten durch</h2>
            <p>Max Mustermann</p>
            <p>Geschäftsführer</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
            <p>Telefon: +49 (0) 30 123456789</p>
            <p>E-Mail: info@schnitzelbytes.de</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Registereintrag</h2>
            <p>Eintragung im Handelsregister</p>
            <p>Registergericht: Amtsgericht Berlin-Charlottenburg</p>
            <p>Registernummer: HRB 123456</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
            <p>DE 123456789</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>Max Mustermann</p>
            <p>Musterstraße 123</p>
            <p>10115 Berlin</p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}