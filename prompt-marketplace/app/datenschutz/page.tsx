export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-200">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Datenschutzerklärung
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="font-semibold text-gray-900">Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>

                <h3 className="font-semibold text-gray-900">Datenerfassung auf dieser Website</h3>
                <p>
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                2. Hosting
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Unser Hoster erhebt in sog. Logfiles folgende Daten, die Ihr Browser übermittelt:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>IP-Adresse</li>
                  <li>Datum und Uhrzeit der Anfrage</li>
                  <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
                  <li>Inhalt der Anforderung (konkrete Seite)</li>
                  <li>Zugriffsstatus/HTTP-Statuscode</li>
                  <li>jeweils übertragene Datenmenge</li>
                  <li>Website, von der die Anforderung kommt</li>
                  <li>Browser</li>
                  <li>Betriebssystem und dessen Oberfläche</li>
                  <li>Sprache und Version der Browsersoftware</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="font-semibold text-gray-900">Datenschutz</h3>
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>

                <h3 className="font-semibold text-gray-900">Hinweis zur verantwortlichen Stelle</h3>
                <p>
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    Max Mustermann<br />
                    Musterstraße 123<br />
                    10115 Berlin<br />
                    Deutschland<br />
                    <br />
                    Telefon: +49 (0) 30 12345678<br />
                    E-Mail: info@promptprofi.de
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                4. Datenerfassung auf dieser Website
              </h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="font-semibold text-gray-900">Cookies</h3>
                <p>
                  Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
                </p>

                <h3 className="font-semibold text-gray-900">Server-Log-Dateien</h3>
                <p>
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                5. Zahlungsanbieter
              </h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="font-semibold text-gray-900">Stripe</h3>
                <p>
                  Auf dieser Website bieten wir u.a. die Bezahlung via Stripe an. Anbieter dieses Zahlungsdienstes ist die Stripe Payments Europe, Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland (im Folgenden „Stripe“).
                </p>
                <p>
                  Wenn Sie die Bezahlung via Stripe auswählen, werden die von Ihnen eingegebenen Zahlungsdaten an Stripe übermittelt.
                </p>
                <p>
                  Die Übermittlung Ihrer Daten an Stripe erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO (Verarbeitung zur Erfüllung eines Vertrags). Sie haben die Möglichkeit, Ihre Einwilligung zur Datenverarbeitung jederzeit zu widerrufen. Ein Widerruf wirkt sich auf die Wirksamkeit von in der Vergangenheit liegenden Datenverarbeitungsvorgängen nicht aus.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                6. Ihre Rechte
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Sie haben jederzeit das Recht:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
                  <li>Berichtigung oder Löschung Ihrer personenbezogenen Daten zu verlangen</li>
                  <li>die Verarbeitung Ihrer personenbezogenen Daten einzuschränken</li>
                  <li>Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen</li>
                  <li>Datenübertragbarkeit zu verlangen</li>
                </ul>
                <p>
                  Wenn Sie eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                7. Widerspruch gegen Werbe-E-Mails
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                8. Kontakt
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Bei Fragen zum Datenschutz können Sie uns jederzeit kontaktieren:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    <strong>Datenschutzbeauftragter:</strong><br />
                    Max Mustermann<br />
                    Musterstraße 123<br />
                    10115 Berlin<br />
                    Deutschland<br />
                    <br />
                    E-Mail: datenschutz@promptprofi.de
                  </p>
                </div>
              </div>
            </section>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                Diese Datenschutzerklärung wurde mit dem Datenschutz-Generator von e-recht24.de erstellt und angepasst.
                <br />
                Stand: 15. Februar 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}