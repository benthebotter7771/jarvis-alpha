import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <a href="#" className="text-2xl font-bold text-white mb-4 inline-block">
              Prompt<span className="text-blue-400">Profi</span>
            </a>
            <p className="mb-6">
              Professionelle AI-Prompts für deutsche Berufsgruppen. Steigere deine Produktivität mit maßgeschneiderten KI-Vorlagen.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Produkt</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Alle Prompts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Für Handwerker</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Für Steuerberater</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Für Ärzte</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preise</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Ressourcen</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Dokumentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li><a href="/impressum" className="hover:text-white transition-colors">Impressum</a></li>
              <li><a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie-Richtlinie</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Widerrufsrecht</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h4 className="text-white font-semibold mb-4">Bleib auf dem Laufenden</h4>
            <p className="mb-4 text-sm">
              Erhalte Updates zu neuen Prompts, KI-Tipps und Special Offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Deine Email-Adresse"
                className="flex-grow px-4 py-3 rounded-l-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg font-medium hover:bg-blue-700 transition-colors">
                Abonnieren
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">
            © {currentYear} PromptProfi. Alle Rechte vorbehalten.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="hover:text-white transition-colors">Nutzungsbedingungen</a>
            <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutzerklärung</a>
            <a href="#" className="hover:text-white transition-colors">Cookie-Einstellungen</a>
          </div>
        </div>
      </div>
    </footer>
  );
}