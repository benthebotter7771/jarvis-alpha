import Button from './ui/Button';
import Badge from './ui/Badge';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/50 to-emerald-50/50 dark:from-gray-900/50 dark:via-gray-950/50 dark:to-emerald-900/20" />
      
      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-8 animate-slide-in">
            <Badge variant="accent" size="lg" className="animate-pulse-slow">
              ✨ Speziell für deutsche Berufsgruppen
            </Badge>
          </div>
          
          {/* Main headline */}
          <h1 className="heading-1 text-gray-900 dark:text-white mb-6 animate-fade-in">
            AI-Prompts die{' '}
            <span className="text-gradient">
              wirklich funktionieren
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-in animation-delay-200">
            Professionelle ChatGPT & Claude Vorlagen für Handwerker, Steuerberater und Ärzte. 
            Steigere deine Produktivität um bis zu 70% mit maßgeschneiderten KI-Prompts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in animation-delay-400">
            <Button 
              variant="primary" 
              size="lg" 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="shadow-hard"
            >
              Prompts entdecken (ab 9,90€)
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Kostenlose Demo ansehen
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto animate-fade-in animation-delay-600">
            <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">500+</div>
              <div className="text-gray-600 dark:text-gray-400">Professionelle Prompts</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">3</div>
              <div className="text-gray-600 dark:text-gray-400">Deutsche Berufsgruppen</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">70%</div>
              <div className="text-gray-600 dark:text-gray-400">Zeitersparnis</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">4.9/5</div>
              <div className="text-gray-600 dark:text-gray-400">Kundenbewertung</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full animate-bounce" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-emerald-500 rounded-full animate-bounce animation-delay-1000" />
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-bounce animation-delay-500" />
    </section>
  );
}