'use client';

import { Check } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    name: 'Einzelpaket',
    description: 'Perfekt zum Ausprobieren',
    price: '9,90€',
    period: 'einmalig',
    features: [
      '1 Berufsgruppe deiner Wahl',
      '50+ spezialisierte Prompts',
      'Lifetime Zugriff',
      'PDF + Markdown Export',
      'Email Support',
    ],
    cta: 'Jetzt kaufen',
    popular: false,
    color: 'border-blue-200',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    name: 'Monatsabo',
    description: 'Für kontinuierliche Verbesserung',
    price: '19,90€',
    period: 'pro Monat',
    features: [
      'Alle 3 Berufsgruppen',
      '500+ Prompts',
      'Monatliche Updates',
      'Priorität Support',
      'Community Zugang',
      'Exklusive Webinare',
    ],
    cta: 'Kostenlos starten',
    popular: true,
    color: 'border-emerald-300',
    buttonColor: 'bg-emerald-600 hover:bg-emerald-700',
  },
  {
    name: 'Jahresabo',
    description: 'Beste Ersparnis',
    price: '199€',
    period: 'pro Jahr',
    features: [
      'Alle 3 Berufsgruppen',
      '500+ Prompts',
      'Monatliche Updates',
      'Priorität Support',
      'Community Zugang',
      'Exklusive Webinare',
      '2 Stunden Consulting',
      'Persönliche Prompt-Optimierung',
    ],
    cta: '17% sparen',
    popular: false,
    color: 'border-purple-200',
    buttonColor: 'bg-purple-600 hover:bg-purple-700',
  },
];

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Einfache, transparente{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Preisgestaltung
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Wähle das Paket, das am besten zu deinen Bedürfnissen passt. Jederzeit kündbar.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1 mb-12">
            <button
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-gray-900 shadow'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Monatlich
            </button>
            <button
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                billingPeriod === 'yearly'
                  ? 'bg-white text-gray-900 shadow'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setBillingPeriod('yearly')}
            >
              Jährlich <span className="text-emerald-600 ml-1">(17% sparen)</span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border-2 ${plan.color} bg-white p-8 hover:shadow-xl transition-shadow ${
                plan.popular ? 'shadow-lg scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Beliebteste Wahl
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {billingPeriod === 'yearly' && plan.name === 'Jahresabo' 
                      ? '199€' 
                      : plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">
                    {billingPeriod === 'yearly' && plan.name === 'Monatsabo'
                      ? 'pro Jahr (199€)'
                      : plan.period}
                  </span>
                </div>

                {billingPeriod === 'yearly' && plan.name === 'Monatsabo' && (
                  <div className="text-sm text-emerald-600 font-medium">
                    Statt 238,80€ pro Jahr
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="ml-3 text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl text-white font-semibold ${plan.buttonColor} transition-colors shadow-lg hover:shadow-xl`}
                onClick={() => {
                  // In production, this would call the Stripe checkout API
                  alert(`Stripe Checkout für ${plan.name} würde jetzt gestartet werden. In Produktion: POST /api/checkout mit planId=${plan.name === 'Einzelpaket' ? 'SINGLE' : plan.name === 'Monatsabo' ? 'MONTHLY' : 'YEARLY'}`);
                }}
              >
                {plan.cta}
              </button>

              {plan.name === 'Monatsabo' && (
                <p className="text-center text-gray-500 text-sm mt-4">
                  14 Tage kostenlos testen, dann {plan.price}/{plan.period}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-1 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-2xl px-8 py-6">
            <div className="text-left">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Für Unternehmen & Teams
              </h4>
              <p className="text-gray-600 mb-4">
                Brauchst du Prompts für dein gesamtes Team? Kontaktiere uns für maßgeschneiderte Unternehmenslösungen.
              </p>
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-black transition-colors">
                Team-Anfrage stellen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}