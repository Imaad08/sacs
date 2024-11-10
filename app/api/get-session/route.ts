import { NextRequest, NextResponse } from 'next/server';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl; // Access the query parameters using nextUrl
  const sessionId = searchParams.get('session_id'); // Get the session_id from the query

  try {
    if (!sessionId) {
      return NextResponse.json({ error: 'Missing session_id' }, { status: 400 });
    }

    // Retrieve the Checkout Session details
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Optionally, you can also retrieve the associated charge if needed
    const charge = session.payment_intent ? await stripe.paymentIntents.retrieve(session.payment_intent) : null;

    // Return the session details along with charge information
    return NextResponse.json({
      session,
      charge,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
