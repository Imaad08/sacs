import { NextRequest, NextResponse } from 'next/server'; // Use NextRequest and NextResponse for app directory
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1QJUOWFzdGNcLcLjn8tzZgca',
          quantity: 1,
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
      success_url: `${req.headers.get('origin')}/?success=true`,
      cancel_url: `${req.headers.get('origin')}/?canceled=true`,
    });

    return NextResponse.redirect(session.url, { status: 303 });
  } catch (err) {
    const error = err as { statusCode: number; message: string };
    // Return error response with the correct status and message
    return new NextResponse(error.message, { status: error.statusCode || 500 });
  }
}
