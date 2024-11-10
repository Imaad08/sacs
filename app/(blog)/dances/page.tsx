'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function DancesPage() {
    const dances = [
        {
            name: 'Classical',
            description:
                'Indian classical dance has been rooted in Hindu religion for thousands of years. It encompasses eight various forms of dance, including Bharatanatyam and Kathak. This style of dance requires years of rigorous training and places a heavy emphasis on expressive gestures and facial expressions.',
            imageSrc: '/assets/classical-dance.jpg', 
        },
        {
            name: 'Fusion / Hip Hop',
            description:
                'Being one of the biggest dances in SACS, this form combines both Bollywood style and modern hip-hop to create a mixture of both worlds. Using the trendiest and most upbeat music, dancers entertain the audience with their fun and smooth dance moves. You will hear our generations most popular and well-known rap music, along with modern hip-hop style Bollywood tunes.',
            imageSrc: '/assets/fusion.jpg',
        },
        {
            name: 'Guy Girl',
            description:
                'This dance form is known as the "filmy" style. Each person is paired up and taught dances that reflect what Bollywood culture is truly about. This exuberant and lively dance uses top music from the most popular Indian movies of all time. This dance gets the audience to sing along with the music and dance along with the performers.',
            imageSrc: '/assets/guy-girl.jpg',
        },
        {
            name: 'Bhangra',
            description:
                'Bhangra is another type of traditional dance that originates from the Indian state of Punjab. This physically demanding dance form incorporates vigorous kicks, leaps, and bends of the body to the beat of a dhol. The performers wear colorful and vibrant costumes that stand out from the rest. Bhangra is all about having fun and giving off an energetic and lively vibe to the audience.',
            imageSrc: '/assets/bhangra.jpg',
        },
        {
            name: 'All Girl',
            description:
                'This dance highlights the feminine aspects of Bollywood dance by having an all-female group perform. The dance also utilizes some of the most popular Indian music and captivates the audience with the intricate and difficult dance moves. Performers get to wear beautiful costumes and truly elevate the importance of female empowerment in dance, as well.',
            imageSrc: '/assets/all-girl.jpg',
        },
        {
            name: 'All Guy',
            description:
                'Opposite of All Girl, this dance is solely composed of guys who are equally as passionate about dance as females. All Guy has continually proven to receive the most hype and support from the crowd because of their high energy and carefree style. The guys get up on stage to have fun with their peers, demonstrate the masculine side of dance, and get the audience to start dancing, as well.',
            imageSrc: '/assets/all-guy.jpg',
        },
        {
            name: 'Senior',
            description:
                'Being the last dance to perform, the Senior dance wraps up the show by bringing out the graduating class of South Asian Culture Show. This nostalgic dance often times brings the audience and performers to tears as the seniors unite and dance next to each other one last time. Aside from all the emotions, this dance also encompasses the happiness and energy that the seniors have invested in SACS for the past four years.',
            imageSrc: '/assets/seniors.jpg',
        },
    ];

    return (
        <div className="min-h-screen bg-cream text-gray-800">
            <main className="space-y-20 py-20">
                <section className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">Dances of SACS</h1>

                    <div className="space-y-12">
                        {dances.map((dance, index) => (
                            <DanceSection key={dance.name} dance={dance} index={index} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

interface Dance {
    name: string;
    description: string;
    imageSrc: string;
}

function DanceSection({ dance, index }: { dance: Dance; index: number }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, index * 500); 

        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div
            className={`flex flex-col lg:flex-row items-center gap-12 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className="lg:w-1/2 overflow-hidden rounded-lg shadow-lg">
    <Image
        src={dance.imageSrc}
        alt={dance.name}
        width={920}
        height={960}
        className="object-cover rounded-lg"
        style={{ borderRadius: '1rem' }} 
    />
</div>


            <div className="lg:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">{dance.name}</h2>
                <p className="text-lg text-gray-600">{dance.description}</p>
            </div>
        </div>
    );
}
