"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="container px-4 md:px-6 py-24 mt-16">
        <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
        
        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-medium mb-2">Allgemeine Hinweise</h3>
            <p className="mb-4">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-lg font-medium mb-2">Datenschutz</h3>
            <p className="mb-4">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-lg font-medium mb-2">Cookies</h3>
            <p className="mb-4">Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">4. Analyse-Tools und Werbe-Tools</h2>
            <h3 className="text-lg font-medium mb-2">Google Analytics</h3>
            <p className="mb-4">Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">5. Plugins und Tools</h2>
            <h3 className="text-lg font-medium mb-2">Google Web Fonts</h3>
            <p className="mb-4">Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">6. Ihre Rechte</h2>
            <p className="mb-2">Sie haben das Recht:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen</li>
              <li>Die Berichtigung unrichtiger Daten zu verlangen</li>
              <li>Die Löschung Ihrer bei uns gespeicherten Daten zu verlangen</li>
              <li>Die Einschränkung der Datenverarbeitung zu verlangen</li>
              <li>Der Datenverarbeitung zu widersprechen</li>
              <li>Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten</li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}