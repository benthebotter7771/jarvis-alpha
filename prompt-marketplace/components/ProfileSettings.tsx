'use client';

import { User, Mail, Briefcase, Globe } from 'lucide-react';
import { useState } from 'react';

export default function ProfileSettings() {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    profession: 'Steuerberater',
    company: 'Mustermann GmbH',
    location: 'Berlin, Deutschland',
    bio: 'Ich bin Steuerberater mit 10 Jahren Erfahrung und teile gerne meine besten Prompts für die Steuerberatung.',
    website: 'https://example.com',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would make an API call
    alert('Profil erfolgreich aktualisiert!');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Profilinformationen</h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          Vorschau anzeigen
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Avatar Upload */}
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold text-2xl">JD</span>
          </div>
          <div>
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Bild ändern
            </button>
            <p className="text-sm text-gray-500 mt-2">
              Empfohlen: Quadratisches Bild, max. 2MB
            </p>
          </div>
        </div>

        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="h-4 w-4 inline mr-2" />
              Vollständiger Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="h-4 w-4 inline mr-2" />
              E-Mail-Adresse
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Briefcase className="h-4 w-4 inline mr-2" />
              Beruf
            </label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Unternehmen
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Standort
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Stadt, Land"
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Über mich
          </label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Erzähle der Community etwas über dich..."
          />
          <p className="text-sm text-gray-500 mt-2">
            Maximal 500 Zeichen
          </p>
        </div>

        {/* Website */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Globe className="h-4 w-4 inline mr-2" />
            Website
          </label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="https://example.com"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-6 border-t border-gray-100">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors mr-4"
          >
            Abbrechen
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Änderungen speichern
          </button>
        </div>
      </form>
    </div>
  );
}