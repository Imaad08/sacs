"use client";
import React from 'react';

const presidents = [
  {
    id: 1,
    name: 'Sania Singh',
    role: 'President',
    image: 'https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg',
    description:
      'Sania bio',
  },
  {
    id: 2,
    name: 'Kavin Ramesh',
    role: 'President',
    image: 'https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg',
    description:
      'Kavin bio',
  },
  {
    id: 3,
    name: 'Olivia Haffie',
    role: 'President',
    image: 'https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg',
    description:
      'Olivia bio',
  },
];

const vicePresidents = [
  {
    id: 4,
    name: 'Tarun Tata',
    role: 'Vice President',
    image: 'https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg',
    description:
      'Tarun bio',
  },
  {
    id: 5,
    name: 'Nitin Ramesh',
    role: 'Vice President',
    image: 'https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg',
    description:
      'Nitin bio',
  },
  {
    id: 6,
    name: 'Tanvi Movva',
    role: 'Vice President',
    image: 'https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg',
    description:
      'Tanvi bio',
  },
];

const Leadership = () => {
  const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  };

  return (
    <div className="bg-cream min-h-screen p-4">
  <section className="hero bg-cream py-20">
    <div className="container mx-auto text-center px-4">
      <h1 className="text-5xl font-bold text-gray-800">Leadership</h1>
    </div>
  </section>

  <h1 className="text-3xl font-bold text-gray-800 text-center">Presidents</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mr-4 lg:grid-cols-3 gap-4">
    {presidents.map((card) => (
      <div
        key={card.id}
        className="card w-full sm:w-full md:w-full lg:w-full bg-gold/40 shadow-xl m-4 max-w-full"
      >
        <figure>
          <img src={card.image} alt={card.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{card.name}</h2>
          <p>{card.role}</p>
          <div className="card-actions justify-end">
            <button
              className="btn bg-gold hover:bg-gold/80 text-white"
              onClick={() => openModal(`my_modal_${card.id}`)}
            >
              View More
            </button>
          </div>
          <dialog id={`my_modal_${card.id}`} className="modal">
            <div className="modal-box bg-cream">
              <h3 className="font-bold text-lg">{card.name}</h3>
              <p className="py-4">{card.description}</p>
              <div className="modal-action">
                <form method="dialog">
                  <button
                    className="btn btn-primary bg-gold hover:bg-gold/80"
                    onClick={() => closeModal(`my_modal_${card.id}`)}
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    ))}
  </div>

  <h1 className="text-3xl font-bold text-gray-800 text-center mt-10">Vice Presidents</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mr-4 lg:grid-cols-3 gap-4">
    {vicePresidents.map((card) => (
      <div
        key={card.id}
        className="card w-full sm:w-full md:w-full lg:w-full bg-gold/40 shadow-xl m-4 max-w-full"
      >
        <figure>
          <img src={card.image} alt={card.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{card.name}</h2>
          <p>{card.role}</p>
          <div className="card-actions justify-end">
            <button
              className="btn bg-gold hover:bg-gold/80 text-white"
              onClick={() => openModal(`my_modal_${card.id}`)}
            >
              View More
            </button>
          </div>
          <dialog id={`my_modal_${card.id}`} className="modal">
            <div className="modal-box bg-cream">
              <h3 className="font-bold text-lg">{card.name}</h3>
              <p className="py-4">{card.description}</p>
              <div className="modal-action">
                <form method="dialog">
                  <button
                    className="btn btn-primary bg-gold hover:bg-gold/80"
                    onClick={() => closeModal(`my_modal_${card.id}`)}
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    ))}
  </div>
</div>
    );
    };
export default Leadership