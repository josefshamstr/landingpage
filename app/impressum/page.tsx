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
            <p>Josef Haras</p>
            <p>Rudolf-Simon-Gasse 5/26 123</p>
            <p>1110 Wien</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
            <p>Telefon: +436805019637</p>
            <p>E-Mail: office@@schnitzelbytes.io</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Streitschlichtung</h2>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
              <br />
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Haftungsausschluss</h2>
            <p>Haftung für Inhalte</p>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}