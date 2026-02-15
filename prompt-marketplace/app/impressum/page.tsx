export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-200">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Impressum
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>PromptProfi</strong><br />
                  Max Mustermann<br />
                  Musterstraße 123<br />
                  10115 Berlin<br />
                  Deutschland
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Kontakt
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Telefon:</strong> +49 (0) 30 12345678<br />
                  <strong>E-Mail:</strong> info@promptprofi.de<br />
                  <strong>Website:</strong> https://promptprofi.de
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Umsatzsteuer-ID
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  <strong>DE 123 456 789</strong>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Max Mustermann<br />
                  Musterstraße 123<br />
                  10115 Berlin
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Streitbeilegung
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a 
                    href="https://ec.europa.eu/consumers/odr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 ml-1"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilz nehmen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Haftungsausschluss
              </h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="font-semibold text-gray-900">Haftung für Inhalte</h3>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>

                <h3 className="font-semibold text-gray-900">Haftung für Links</h3>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>

                <h3 className="font-semibold text-gray-900">Urheberrecht</h3>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Bildnachweise
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Die auf dieser Website verwendeten Bilder stammen von:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Unsplash.com (kostenlose Lizenz)</li>
                  <li>Pexels.com (kostenlose Lizenz)</li>
                  <li>Eigene Erstellung</li>
                </ul>
              </div>
            </section>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                Stand: 15. Februar 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}