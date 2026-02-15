import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Markus Schneider',
    profession: 'Elektromeister',
    location: 'Hamburg',
    content: 'Die Prompts für Angebotserstellung haben mir mindestens 10 Stunden pro Woche gespart. Endlich muss ich nicht mehr stundenlang an Formulierungen feilen.',
    rating: 5,
    avatarColor: 'bg-blue-100',
    textColor: 'text-blue-600',
  },
  {
    name: 'Dr. Sarah Weber',
    profession: 'Ärztin',
    location: 'München',
    content: 'Als Ärztin habe ich wenig Zeit für Bürokratie. Die Prompts für Arztbriefe und Patientenaufklärung sind ein Game-Changer für meine Praxis.',
    rating: 5,
    avatarColor: 'bg-purple-100',
    textColor: 'text-purple-600',
  },
  {
    name: 'Thomas Bauer',
    profession: 'Steuerberater',
    location: 'Berlin',
    content: 'Die steuerlichen Prompts sind erstaunlich präzise und berücksichtigen aktuelle Gesetzesänderungen. Perfekt für die Mandantenkommunikation.',
    rating: 5,
    avatarColor: 'bg-emerald-100',
    textColor: 'text-emerald-600',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Was unsere{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Kunden sagen
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Über 500 Berufstätige vertrauen bereits auf PromptProfi
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all hover:shadow-lg"
            >
              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-lg mb-8 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full ${testimonial.avatarColor} flex items-center justify-center`}>
                  <span className={`text-xl font-bold ${testimonial.textColor}`}>
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600">
                    {testimonial.profession} • {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Zufriedenheitsrate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
            <div className="text-gray-600">Aktive Nutzer</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">4.9</div>
            <div className="text-gray-600">Durchschnittliche Bewertung</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">70%</div>
            <div className="text-gray-600">Zeitersparnis im Schnitt</div>
          </div>
        </div>
      </div>
    </section>
  );
}