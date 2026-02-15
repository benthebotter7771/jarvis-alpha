import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LibraryFilters from '@/components/LibraryFilters';
import PromptCard from '@/components/PromptCard';

export default function LibraryPage() {
  const prompts = [
    {
      id: 1,
      title: 'Steuererklärung für Freiberufler',
      description: 'Kompletter Prompt für die Erstellung einer Steuererklärung mit allen relevanten Posten für Freiberufler.',
      category: 'Steuerberater',
      tags: ['Steuer', 'Finanzen', 'Buchhaltung'],
      likes: 42,
      downloads: 156,
      author: 'Max Mustermann',
      isFeatured: true,
    },
    {
      id: 2,
      title: 'Handwerker-Rechnung Vorlage',
      description: 'Professionelle Rechnungsvorlage für Handwerker mit allen gesetzlichen Pflichtangaben.',
      category: 'Handwerker',
      tags: ['Rechnung', 'Vorlage', 'Gewerbe'],
      likes: 28,
      downloads: 89,
      author: 'Anna Schmidt',
      isFeatured: false,
    },
    {
      id: 3,
      title: 'Arztbrief für Patienten',
      description: 'Strukturierter Prompt für die Erstellung von Arztbriefen mit medizinischer Fachsprache.',
      category: 'Ärzte',
      tags: ['Medizin', 'Dokumentation', 'Patient'],
      likes: 35,
      downloads: 112,
      author: 'Dr. Müller',
      isFeatured: true,
    },
    {
      id: 4,
      title: 'Marketing-Plan für Kleinunternehmen',
      description: 'Strategischer Prompt zur Erstellung eines kompletten Marketing-Plans.',
      category: 'Unternehmer',
      tags: ['Marketing', 'Strategie', 'Business'],
      likes: 19,
      downloads: 67,
      author: 'Lisa Weber',
      isFeatured: false,
    },
    {
      id: 5,
      title: 'Kundenanfrage Beantwortung',
      description: 'Prompt für professionelle Antworten auf Kundenanfragen im Service-Bereich.',
      category: 'Service',
      tags: ['Kundenservice', 'Kommunikation', 'Email'],
      likes: 31,
      downloads: 94,
      author: 'Thomas Bauer',
      isFeatured: false,
    },
    {
      id: 6,
      title: 'Projektplanung Template',
      description: 'Detaillierter Prompt für die Erstellung von Projektplänen mit Meilensteinen.',
      category: 'Projektmanager',
      tags: ['Projektmanagement', 'Planung', 'Timeline'],
      likes: 24,
      downloads: 78,
      author: 'Sarah Klein',
      isFeatured: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Prompt-Bibliothek</h1>
          <p className="text-gray-600 mt-2">Entdecke über 500 professionelle AI-Prompts für deine Berufsgruppe.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters sidebar */}
          <div className="lg:col-span-1">
            <LibraryFilters />
          </div>

          {/* Prompts grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {prompts.length} Prompts gefunden
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  Sortiert nach: <span className="font-medium">Beliebtheit</span>
                </p>
              </div>
              <div className="flex space-x-2">
                <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm">
                  <option>Beliebtheit</option>
                  <option>Neueste</option>
                  <option>Meiste Downloads</option>
                  <option>Alphabetisch</option>
                </select>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Neuen Prompt erstellen
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prompts.map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-2 mt-8 pt-8 border-t border-gray-200">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                Zurück
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                Weiter
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}