'use client';

import { Lock, Key, Shield, Smartphone } from 'lucide-react';
import { useState } from 'react';

export default function AccountSecurity() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would make an API call
    alert('Passwort erfolgreich geändert!');
    setShowPasswordForm(false);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const securityItems = [
    {
      id: 1,
      title: 'Passwort',
      description: 'Letzte Änderung: vor 30 Tagen',
      icon: Lock,
      status: 'Aktiv',
      action: () => setShowPasswordForm(true),
      buttonText: 'Ändern',
    },
    {
      id: 2,
      title: 'Zwei-Faktor-Authentifizierung',
      description: 'Erhöhte Sicherheit für dein Konto',
      icon: Shield,
      status: twoFactorEnabled ? 'Aktiviert' : 'Deaktiviert',
      action: () => setTwoFactorEnabled(!twoFactorEnabled),
      buttonText: twoFactorEnabled ? 'Deaktivieren' : 'Aktivieren',
    },
    {
      id: 3,
      title: 'API-Schlüssel',
      description: 'Für Entwicklerzugriff',
      icon: Key,
      status: '2 aktiv',
      action: () => {},
      buttonText: 'Verwalten',
    },
    {
      id: 4,
      title: 'Angemeldete Geräte',
      description: '3 Geräte aktuell angemeldet',
      icon: Smartphone,
      status: 'Aktiv',
      action: () => {},
      buttonText: 'Anzeigen',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Konto & Sicherheit</h3>

      {/* Security Items List */}
      <div className="space-y-4">
        {securityItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  item.status === 'Aktiv' || item.status === 'Aktiviert' || item.status === '2 aktiv'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {item.status}
                </span>
                <button
                  onClick={item.action}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    item.id === 2 && twoFactorEnabled
                      ? 'bg-red-100 text-red-700 hover:bg-red-200'
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                >
                  {item.buttonText}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Password Change Form */}
      {showPasswordForm && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Passwort ändern</h4>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Aktuelles Passwort
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Neues Passwort
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <p className="text-sm text-gray-500 mt-2">
                Mindestens 8 Zeichen, Groß-/Kleinschreibung, Zahlen und Sonderzeichen
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Neues Passwort bestätigen
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="flex justify-end space-x-4 pt-4">
              <button
                type="button"
                onClick={() => setShowPasswordForm(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Abbrechen
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Passwort aktualisieren
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Security Tips */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Sicherheitstipps</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            Verwende ein einzigartiges Passwort für jedes Konto
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            Aktiviere die Zwei-Faktor-Authentifizierung für erhöhte Sicherheit
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            Melde dich von öffentlichen Geräten immer ab
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            Überprüfe regelmäßig deine angemeldeten Geräte
          </li>
        </ul>
      </div>
    </div>
  );
}