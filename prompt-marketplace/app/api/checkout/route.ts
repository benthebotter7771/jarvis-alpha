import { NextRequest, NextResponse } from 'next/server';
import { createCheckoutSession, PROFESSIONS } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { planId, profession, customerEmail } = body;

    // Validation
    if (!planId) {
      return NextResponse.json(
        { error: 'Plan ID ist erforderlich' },
        { status: 400 }
      );
    }

    if (profession && !Object.values(PROFESSIONS).includes(profession)) {
      return NextResponse.json(
        { error: 'Ungültige Berufsgruppe' },
        { status: 400 }
      );
    }

    // Create checkout session
    const session = await createCheckoutSession({
      planId,
      profession,
      customerEmail,
      successUrl: `${request.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${request.headers.get('origin')}/pricing`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    );
  }
}