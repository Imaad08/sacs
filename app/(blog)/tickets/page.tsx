'use client'
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

export default function PreviewPage() {
  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }
    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  return (
    <div style={{ backgroundColor: '#f5f5dc', padding: '20px', textAlign: 'center', minHeight: '100vh' }}>
        <section className="hero bg-cream py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-800">Tickets</h1>
          </div>
        </section>
      <h2>Get your tickets now to experience our exciting events!</h2>
      <p>Each ticket grants you access to a unique event filled with activities, entertainment, and more.</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        
        <div className="event-box bg-cream shadow-lg">
          <h3>Event 1 - Date 1</h3>
          <form action="/api/checkout_sessions" method="POST">
            <button type="submit" role="link" className="ticket-button">
              Buy Ticket
            </button>
          </form>
        </div>
        
        <div className="event-box bg-cream shadow-lg">
          <h3>Event 2 - Date 2</h3>
          <form action="/api/checkout" method="POST">
            <button type="submit" role="link" className="ticket-button">
              Buy Ticket
            </button>
          </form>
        </div>

      </div>

      <style jsx>{`
        .event-box {
          background-color: #f5f5dc;
          width: 300px;
          padding: 20px;
          border-radius: 6px;
          text-align: center;
          margin-top: 50px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
        }

        .ticket-button {
          height: 36px;
          width: 100%;
          background-color: #B8860B;
          border-radius: 4px;
          color: black;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0px 4px 5.5px rgba(0, 0, 0, 0.07);
        }

        .ticket-button:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}
