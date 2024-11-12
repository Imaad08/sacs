'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Receipt() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [session, setSession] = useState<any>(null);
  const [charge, setCharge] = useState<any>(null);
  const [lineItems, setLineItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (sessionId) {
      const fetchSession = async () => {
        try {
          const res = await fetch(`/api/get-session?session_id=${sessionId}`);
          if (!res.ok) throw new Error('Failed to retrieve session details');
          const data = await res.json();
          setSession(data.session);
          setCharge(data.charge);
          setLineItems(data.line_items); // Now contains product details
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchSession();
    }
  }, [sessionId]);

  useEffect(() => {
    // Only show toast once when charge is successfully fetched
    if (charge) {
      if (charge.status === 'succeeded') {
        toast.success('Payment successful. Show up to the event and give your name', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error('Payment failed', {
          position: 'bottom-right',
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  }, [charge]);  

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-cream min-h-screen p-6 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Receipt</h1>
      <p>Save this link for your personal records</p>
      <br></br>
      {session ? (
        <div className="space-y-4">
          <p><strong>Customer:</strong> {session.customer_details.name}</p>
          <p><strong>Email:</strong> {session.customer_details.email}</p>
          <p><strong>Amount Paid:</strong> ${(session.amount_total / 100).toFixed(2)}</p>
          <p><strong>Status:</strong> {session.payment_status}</p>

          <h2 className="text-xl font-semibold">Products Purchased:</h2>
          <ul className="space-y-2">
            {lineItems.map((item: any, index: number) => (
              <li key={index}>
                <strong>{item.product_name}</strong>: {item.product_description} <br />
                Quantity: {item.quantity} - ${(item.amount_total / 100).toFixed(2)}
              </li>
            ))}
          </ul>

          {charge && (
            <div>
              <p><strong>Charge Status:</strong> {charge.status}</p>
            </div>
          )}
        </div>
      ) : (
        <p>Receipt Loading</p>
      )}

      <ToastContainer />
    </div>
  );
}
