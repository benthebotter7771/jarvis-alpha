import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-02-24.acacia',
  appInfo: {
    name: 'PromptProfi',
    version: '1.0.0',
  },
});

// Preispläne für deutsche Berufsgruppen
export const PLANS = {
  SINGLE: {
    id: 'price_single',
    name: 'Einzelpaket',
    price: 990, // 9,90€ in Cent
    description: '1 Berufsgruppe, 50+ Prompts, Lifetime Zugriff',
  },
  MONTHLY: {
    id: 'price_monthly',
    name: 'Monatsabo',
    price: 1990, // 19,90€ in Cent
    description: 'Alle Berufsgruppen, 500+ Prompts, Monatliche Updates',
  },
  YEARLY: {
    id: 'price_yearly',
    name: 'Jahresabo',
    price: 19900, // 199€ in Cent
    description: 'Alle Berufsgruppen + 2h Consulting, 17% Ersparnis',
  },
};

// Berufsgruppen
export const PROFESSIONS = {
  HANDWERKER: 'handwerker',
  STEUERBERATER: 'steuerberater',
  AERZTE: 'aerzte',
} as const;

export type Profession = typeof PROFESSIONS[keyof typeof PROFESSIONS];

// Helper functions
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount / 100);
}

export function createCheckoutSession({
  planId,
  profession,
  customerEmail,
  successUrl,
  cancelUrl,
}: {
  planId: string;
  profession?: Profession;
  customerEmail?: string;
  successUrl: string;
  cancelUrl: string;
}) {
  return stripe.checkout.sessions.create({
    payment_method_types: ['card', 'sofort', 'giropay'],
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: `PromptProfi - ${PLANS[planId as keyof typeof PLANS]?.name || 'Unbekannter Plan'}`,
            description: profession 
              ? `Speziell für ${profession.charAt(0).toUpperCase() + profession.slice(1)}`
              : PLANS[planId as keyof typeof PLANS]?.description,
          },
          unit_amount: PLANS[planId as keyof typeof PLANS]?.price || 0,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    customer_email: customerEmail,
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata: {
      profession: profession || 'all',
      plan: planId,
    },
    shipping_address_collection: {
      allowed_countries: ['DE', 'AT', 'CH'],
    },
    custom_text: {
      submit: {
        message: 'Vielen Dank für deine Bestellung! Du erhältst deine Prompts sofort nach Zahlungseingang.',
      },
    },
  });
}