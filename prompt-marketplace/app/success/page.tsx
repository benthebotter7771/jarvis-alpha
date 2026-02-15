'use client';

import { CheckCircle, Download, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [isLoading, setIsLoading] = useState(true);
  const [downloadUrl, setDownloadUrl] = useState<string>('');

  useEffect(() => {
    // In production, you would verify the session with your backend
    // For now, we'll simulate a successful purchase
    setTimeout(() => {
      setIsLoading(false);
      setDownloadUrl('/prompts/handwerker-starter-pack.pdf');
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-900">
            Bestellung wird verarbeitet...
          </h2>
          <p className="text-gray-600 mt-2">
            Bitte einen Moment Geduld.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 mb-8">
            <CheckCircle className="h-10 w-10 text-emerald-600" />
          </div>

          {/* Success message */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Vielen Dank für deine Bestellung! 🎉
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Deine Prompts sind jetzt für dich bereit. Du erhältst außerdem eine Bestätigungs-Email mit allen Details.
          </p>

          {/* Download section */}
          <div className="bg-white rounded-2xl p-8 border border-emerald-200 shadow-lg mb-8">
            <div className="flex items-center justify-center mb-6">
              <Download className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Deine Prompts herunterladen
              </h2>
            </div>
            
            <div className="space-y-4 mb-8">
              <a
                href={downloadUrl}
                download
                className="block w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Prompt-Pack herunterladen (PDF)
              </a>
              <a
                href="/dashboard"
                className="block w-full bg-white text-gray-800 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-blue-300 transition-colors"
              >
                Zum Dashboard gehen
              </a>
            </div>

            <p className="text-gray-600 text-sm">
              Die Datei enthält alle Prompts im PDF- und Markdown-Format. Du hast lebenslangen Zugriff.
            </p>
          </div>

          {/* Next steps */}
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Was du als nächstes tun kannst:
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Prompts testen</h4>
                <p className="text-gray-600 text-sm">
                  Kopiere einen Prompt in ChatGPT und passe ihn an deine Bedürfnisse an.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-emerald-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Community beitreten</h4>
                <p className="text-gray-600 text-sm">
                  Tausche dich mit anderen Berufstätigen in unserer exklusiven Gruppe aus.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Support kontaktieren</h4>
                <p className="text-gray-600 text-sm">
                  Fragen? Unser Team hilft dir gerne weiter unter support@promptprofi.de
                </p>
              </div>
            </div>
          </div>

          {/* Return to home */}
          <div className="mt-12">
            <a
              href="/"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Zurück zur Startseite
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}