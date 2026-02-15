'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Brauche ich Vorkenntnisse in KI oder ChatGPT?',
    answer: 'Nein, absolut nicht! Unsere Prompts sind so gestaltet, dass sie auch für absolute Anfänger funktionieren. Einfach kopieren, in ChatGPT einfügen und anpassen.',
  },
  {
    question: 'Sind die Prompts auf deutsche Gesetze und Normen angepasst?',
    answer: 'Ja, alle Prompts berücksichtigen deutsche Gesetze (z.B. DSGVO), DIN-Normen und berufsspezifische Anforderungen. Sie sind von Experten für den deutschen Markt entwickelt worden.',
  },
  {
    question: 'Kann ich die Prompts für mein gesamtes Team nutzen?',
    answer: 'Ja, mit dem Monats- oder Jahresabo können alle Prompts im gesamten Team genutzt werden. Für größere Unternehmen bieten wir spezielle Team-Lizenzen an.',
  },
  {
    question: 'Wie erhalte ich Zugriff auf die Prompts nach dem Kauf?',
    answer: 'Direkt nach dem Kauf erhältst du Zugang zu deinem persönlichen Dashboard. Dort kannst du alle Prompts als PDF, Markdown oder Text herunterladen.',
  },
  {
    question: 'Gibt es eine Geld-zurück-Garantie?',
    answer: 'Ja, wir bieten eine 30-Tage-Geld-zurück-Garantie für alle Käufe. Wenn du nicht zufrieden bist, erhältst du dein Geld zurück - ohne Fragen.',
  },
  {
    question: 'Werden die Prompts regelmäßig aktualisiert?',
    answer: 'Ja, Abonnenten erhalten monatliche Updates mit neuen Prompts und Verbesserungen basierend auf Kundenfeedback und Gesetzesänderungen.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Häufig gestellte{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Fragen
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Alles, was du über PromptProfi wissen musst
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                className="flex justify-between items-center w-full py-6 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center p-8 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Noch Fragen?
            </h3>
            <p className="text-gray-600 mb-6">
              Unser Support-Team hilft dir gerne weiter. Kontaktiere uns per Email oder Chat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Email schreiben
              </button>
              <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium border-2 border-gray-200 hover:border-blue-300 transition-colors">
                Live Chat starten
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}