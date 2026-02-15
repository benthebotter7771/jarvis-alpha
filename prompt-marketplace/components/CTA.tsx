export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Starte noch heute deine{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-blue-300">
              KI-Revolution
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Über 500 Berufstätige haben bereits ihre Produktivität mit PromptProfi gesteigert. 
            Warte nicht länger - deine Zeit ist zu wertvoll.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors shadow-2xl hover:shadow-3xl">
              Jetzt kostenlos starten (14 Tage)
            </button>
            <button className="bg-transparent text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/30 hover:border-white/60 transition-colors">
              Alle Prompts ansehen
            </button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3">
                <span className="text-emerald-300">✓</span>
              </div>
              <span>30-Tage Geld-zurück-Garantie</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                <span className="text-blue-300">🔒</span>
              </div>
              <span>Sichere Zahlung mit Stripe</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                <span className="text-purple-300">⭐</span>
              </div>
              <span>4.9/5 aus 157 Bewertungen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}