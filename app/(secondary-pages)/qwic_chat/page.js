"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Slider from "../../../components/Slider";
import { SwiperSlide } from "swiper/react";

const podcastEpisodes = [
  {
    title: "Wendy Powley on Bringing More Women into Tech",
    description:
      "Wendy Powley, founder of QWIC, sits down with us to talk about the work she's done, her drive and motivation for doing so, what she's learned along the way, and the role of schools in continuing this work.",
    speakers: ["Wendy Powley"],
    image: "/qwic_chat/WendyPowley_qwic_chat.jpg",
    spotify: "#",
  },
  {
    title:
      "Navigating the Industry Post Grad with QWIC Alumni Maya Steckly and Anna Wood",
    description:
      "Maya Steckly and Anna Wood, former Queens and QWIC alumni, join us to talk about transitioning into the tech industry, a shared love for QWIC, and finding community wherever you go.",
    speakers: ["Maya Steckly", "Anna Wood"],
    image: "/qwic_chat/AnnaMaya_qwic_chat.jpg",
    spotify: "#",
  },
];

const guestSpeakers = [
  {
    name: "Anna Wood",
    image: "/qwic_chat/AnnaWood.jpeg",
    description:
      "Anna Wood was a Community Chair at QWIC and currently works as a Data Analyst at Suncor",
  },
  {
    name: "Maya Steckly",
    image: "/qwic_chat/MayaSteckley.jpeg",
    description:
      "Maya Steckly was a Co Chair at QWIC and currently works as an Analyst at Dawson Partners",
  },
  {
    name: "Wendy Powley",
    image: "/qwic_chat/WendyPowley.jpeg",
    description:
      "Wendy Powley was a professor of computing at Queens and is the founder of QWIC",
  },
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default function QwicChatPage() {
  const isMobile = useIsMobile();
  return (
    <main className="min-h-screen bg-[#F9F7FC] px-6 md:px-32 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-12">QWIC Chat</h1>
      <div className="flex flex-col gap-12">
        {/* Podcast Episodes */}
        {podcastEpisodes.map((ep, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-[260px] flex-shrink-0">
              <Image
                src={ep.image}
                alt={ep.title}
                width={260}
                height={260}
                className="rounded-2xl shadow-lg border-2 border-[#E0A4D7] w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-2">{ep.title}</h2>
              <p className="mb-2 text-lg max-w-2xl">{ep.description}</p>
              <div className="mb-4 font-semibold">
                Guest Speakers: {ep.speakers.join(", ")}
              </div>
              <a
                href="https://open.spotify.com/show/1tdnajoqkzev8apbxHlrkN?si=df813aec93fb4423"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4"
              >
                <Image
                  src="/qwic_chat/spotify button3.png"
                  alt="Listen on Spotify"
                  width={300}
                  height={84}
                  className="hover:scale-105 transition"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-xl font-semibold">
        More episodes coming soon!
      </div>
      {/* Guest Speakers */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Check out some of our past podcasts and guest speakers!
        </h2>
        <div className="max-w-xs md:max-w-5xl mx-auto">
          {/* Mobile View & Smaller Screens */}
          <Slider isMobile={isMobile}>
            {guestSpeakers.map((speaker, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center bg-white rounded-2xl shadow-md px-8 py-8 w-72 border-2 border-[#E0A4D7]">
                  <div className="w-36 h-36 mb-4 rounded-full overflow-hidden border-4 border-[#E0A4D7]">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={144}
                      height={144}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-xl font-bold mb-2 text-center">
                    {speaker.name}
                  </div>
                  <div className="text-center text-base text-gray-700">
                    {speaker.description}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      </div>
    </main>
  );
} 