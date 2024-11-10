import { NextRequest, NextResponse } from 'next/server';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl; 
  const sessionId = searchParams.get('session_id'); 

  try {
    if (!sessionId) {
      return NextResponse.json({ error: 'Missing session_id' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items'],
    });

    const lineItemsWithProductDetails = await Promise.all(
      session.line_items.data.map(async (item: any) => {
        const price = await stripe.prices.retrieve(item.price.id);
        const product = await stripe.products.retrieve(price.product);
        
        return {
          ...item,
          product_name: product.name,
          product_description: product.description,
        };
      })
    );

    const charge = session.payment_intent ? await stripe.paymentIntents.retrieve(session.payment_intent) : null;

    return NextResponse.json({
      session,
      charge,
      line_items: lineItemsWithProductDetails,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
