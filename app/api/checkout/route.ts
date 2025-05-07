import { NextRequest, NextResponse } from 'next/server'; // Use NextRequest and NextResponse for app directory
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1RM1GCFzdGNcLcLjUT0t8nMe',
          quantity: 1,
          adjustable_quantity: {
            enabled: true,
            maximum: 100,
            minimum: 0,
          },
        },
      ],
      custom_fields: [
        {
          key: 'name',
          label: {
            type: 'custom',
            custom: 'Your Name',
          },
          type: 'text',
          optional: false,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/receipt?session_id={CHECKOUT_SESSION_ID}`, 
      cancel_url: `${req.headers.get('origin')}/tickets?canceled=true`,
    });

    return NextResponse.redirect(session.url, { status: 303 });
  } catch (err) {
    const error = err as { statusCode: number; message: string };
    // Return error response with the correct status and message
    return new NextResponse(error.message, { status: error.statusCode || 500 });
  }
}
