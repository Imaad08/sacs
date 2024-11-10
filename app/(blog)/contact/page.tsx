"use client";
import React from 'react';

const presidents = [
  {
    id: 1,
    name: 'Tanay Shah',
    role: 'President',
    image: 'https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg',
    description:
      'Tanay Shah is an 11th grader at Del Norte High School, San Diego. While other 4-year olds wanted to be Superman or Spiderman, Tanay wanted to be "All The Mans"! This thirst for trying and learning new things has led Tanay to tinker with various interests ranging from robotics to hip-hop dance to piano (that last one didn’t quite pan out :-) ). He has won several State and Regional awards with First Lego League and VexIQ robotics competitions and has been invited to be a keynote speaker for Altitude Learning and the D39X Educational Summit. He balances his interests with wanting to help his friends and his school get to the next level, especially through the current pandemic. And so, being a Student Ambassador with Thrively is a natural fit for Tanay. This combines his passions for technology, new-age learning, and advocating for student agency into one neat package. In the years to come, Tanay hopes to be a roboticist or an entrepreneur. In his spare time, Tanay likes to play football, golf, and video games! His favorite tag line - Carpe Diem!!',
  },
  {
    id: 2,
    name: 'Srijan Atti',
    role: 'President',
    image: 'https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg',
    description:
      'Srijan Atti is an 11th grader at Del Norte High School with a love for all things STEM. His passion for the field originated early on after watching the Iron Man movies; seeing Tony Stark make the Mark I suit with his bare hands inspired Srijan and opened his eyes to the possibilities that STEM opens. His passions grew as he interacted with computer science, robotics, and more sciences. His passions have culminated in numerous awards in cyber security competitions including National Champion of the CyberPatriot competition, two time SoCal Cyber Cup winner, and Space Grand Challenge winner. He hopes to spread his passion for the field and inspire kids in the same way Tony Stark inspired him.',
  },
  {
    id: 3,
    name: 'Imaad Muzaffer',
    role: 'President',
    image: 'https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg',
    description:
      'Imaad Muzaffer is a dedicated computer scientist currently an 11th grader attending Del Norte High School in San Diego, CA. With a strong academic record and a passion for computer science, Imaad has demonstrated leadership as the President & Founder of the Del Norte High School Technology Student Association and President of Coding4Kidz. His skills encompass various programming languages and technologies, including Python, Unity Game Development, and web development with React, Typescript, and Tailwind. Additionally, he has engaged in extracurricular activities such as robotics at his school and has a keen interest in Artificial Intelligence/Machine Learning.',
  },
];

const vicePresidents = [
  {
    id: 4,
    name: 'Kiana Withee',
    role: 'Vice President',
    image: 'https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg',
    description:
      'Kiana Withee is a junior at Del Norte High School with a wide range of interests and passions. Academically, she thrives in subjects like math and loves immersing herself in a good book. Outside the classroom, Kiana enjoys crocheting, where she channels her creativity, and stays active by playing volleyball, which fuels her competitive spirit and love for teamwork. A natural helper, Kiana finds great fulfillment in supporting others and contributing to her community. Her passion for problem-solving has also driven her to participate in robotics programs for five years. She’s been actively involved in both FIRST LEGO League (FLL) and FIRST Robotics Competition (FRC), where she has gained experience in engineering, programming, and teamwork. Whether she’s on the volleyball court, working on a robotics challenge, or helping someone in need, Kiana brings enthusiasm, kindness, and determination to everything she does.',
  },
  {
    id: 5,
    name: 'Sameeksha Vashishtha',
    role: 'Vice President',
    image: 'https://i.ibb.co/thXrYtb/360-F-248426448-NVKLyw-Wq-Ar-G2-ADUx-Dq6-Qprt-Izs-F82d-MF.jpg',
    description:
      'Sameeksha Vashishtha, Outreach Lead for a STEMpathy, began her journey in 8th grade when she learned coding and discovered its potential for innovation. Since then, she has been delved into FRC robotics (starting in 2022) and her aim is to pursue a PhD in computer science. With a passion for expanding STEM education, especially for underprivileged children, Sameeksha spearheaded a research project to provide opportunities for students to explore STEM fields. She believes education is key to fostering future leaders and innovators. As outreach lead, Sameeksha manages partnerships, plans events, and advocates for diversity, breaking barriers to inspire young minds in science and technology.',
  },
  {
    id: 6,
    name: 'Ananya Asudani',
    role: 'Vice President',
    image: '/assets/ananyapfp.jpeg',
    description:
      'Ananya Asudani is an 11th grader in Del Norte High School San Diego California. She enjoys all things STEM, her specialty being biology. Ever since she was a kid she enjoyed learning about genes, genetics, and cellular biology. This interest led to her writing a children’s book about genetics called “Jackets and Genes.” I enjoy doing research as well as reading up on new treatments and therapeutics that can potentially benefit a plethora of diseases and disorders in the future. It is my goal and aspiration to create equity and enable students to have opportunities to do research! In my free time I love painting, teaching, and listening to music!',
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
      {/* Hero Section with Title */}
      <section className="hero bg-cream py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800">Leadership</h1>
        </div>
      </section>

      {/* Presidents Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {presidents.map((card) => (
          <div key={card.id} className="card w-full sm:w-full md:w-full lg:w-full bg-gold/40 shadow-xl m-5">
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
                      <button className="btn btn-primary" onClick={() => closeModal(`my_modal_${card.id}`)}>
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

      {/* Vice Presidents Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {vicePresidents.map((card) => (
          <div key={card.id} className="card w-full sm:w-full md:w-full lg:w-full bg-gold/40 shadow-xl m-5">
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
                      <button className="btn btn-primary" onClick={() => closeModal(`my_modal_${card.id}`)}>
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

export default Leadership;
