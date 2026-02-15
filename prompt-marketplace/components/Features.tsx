import { CheckCircle, Zap, Users, Shield } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Zeitersparnis bis zu 70%',
    description: 'Automatisiere repetitive Aufgaben wie Angebotserstellung, Dokumentation und Kundenkommunikation.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Speziell für deutsche Berufe',
    description: 'Prompts sind auf deutsche Gesetze, DIN-Normen und berufsspezifische Anforderungen angepasst.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: 'Sofort einsatzbereit',
    description: 'Keine KI-Erfahrung nötig. Einfach kopieren, anpassen und sofort bessere Ergebnisse erzielen.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'DSGVO-konform',
    description: 'Alle Prompts sind datenschutzkonform formuliert und entsprechen deutschen Datenschutzanforderungen.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
];

const professionFeatures = [
  {
    profession: 'Handwerker',
    prompts: [
      'Angebotserstellung mit detaillierter Kostenaufstellung',
      'Kundenkommunikation für Nachfassung und Terminvereinbarung',
      'Dokumentation von Arbeitsprozessen nach DIN-Normen',
      'Materialbestellung und Lieferantenkommunikation',
    ],
    color: 'border-blue-200 bg-blue-50',
  },
  {
    profession: 'Steuerberater',
    prompts: [
      'Steuererklärungs-Checklisten für verschiedene Mandantentypen',
      'Korrespondenz mit Finanzämtern und Behörden',
      'Jahresabschluss-Vorbereitung und Dokumentation',
      'Mandantenberatung zu steuerlichen Optimierungen',
    ],
    color: 'border-emerald-200 bg-emerald-50',
  },
  {
    profession: 'Ärzte',
    prompts: [
      'Patientenaufklärung und Einwilligungserklärungen',
      'Arztbriefe und Überweisungen',
      'Dokumentation von Behandlungsverläufen',
      'Kommunikation mit Krankenkassen',
    ],
    color: 'border-purple-200 bg-purple-50',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Warum{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              PromptProfi
            </span>{' '}
            funktioniert
          </h2>
          <p className="text-xl text-gray-600">
            Wir verstehen die spezifischen Herausforderungen deutscher Berufsgruppen und haben Prompts entwickelt, die genau darauf abzielen.
          </p>
        </div>

        {/* Main features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all hover:shadow-lg"
            >
              <div className={`inline-flex p-3 rounded-lg ${feature.bgColor} ${feature.color} mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Profession-specific features */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Prompts für jede Berufsgruppe
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wähle aus hunderten von spezialisierten Prompts für deinen Beruf
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {professionFeatures.map((profession, index) => (
            <div
              key={index}
              className={`rounded-2xl border-2 ${profession.color} p-6 hover:shadow-lg transition-shadow`}
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {profession.profession}
              </h4>
              <ul className="space-y-3">
                {profession.prompts.map((prompt, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400" />
                    </div>
                    <span className="ml-3 text-gray-700">{prompt}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full py-3 rounded-lg font-medium border-2 border-gray-200 hover:border-gray-300 transition-colors">
                {profession.profession} Prompts ansehen
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}