import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProfileSettings from '@/components/ProfileSettings';
import AccountSecurity from '@/components/AccountSecurity';
import NotificationSettings from '@/components/NotificationSettings';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Profileinstellungen</h1>
          <p className="text-gray-600 mt-2">Verwalte dein Konto und passe die Einstellungen an.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Einstellungen</h3>
              <nav className="space-y-2">
                <a href="#" className="block px-4 py-3 bg-blue-50 text-blue-700 rounded-lg font-medium">
                  Profil
                </a>
                <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                  Konto & Sicherheit
                </a>
                <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                  Benachrichtigungen
                </a>
                <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                  Datenschutz
                </a>
                <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                  Abonnement
                </a>
                <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                  API-Zugang
                </a>
              </nav>
            </div>

            {/* Account Status */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Konto-Status</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Mitgliedschaft</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    Premium
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Verifiziert</span>
                  <span className="text-green-600 font-medium">✓ Ja</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Mitglied seit</span>
                  <span className="font-medium">15.01.2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Settings Forms */}
          <div className="lg:col-span-2 space-y-8">
            <ProfileSettings />
            <AccountSecurity />
            <NotificationSettings />
            
            {/* Danger Zone */}
            <div className="bg-white rounded-xl shadow-sm border border-red-200 p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-4">Gefahrenzone</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-900">Konto löschen</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Dein Konto und alle Daten werden dauerhaft gelöscht.
                    </p>
                  </div>
                  <button className="px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors">
                    Konto löschen
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-900">Daten exportieren</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Lade alle deine Daten als ZIP-Datei herunter.
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    Daten exportieren
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}