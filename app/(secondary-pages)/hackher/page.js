import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCalendarCheck,
} from "@fortawesome/free-regular-svg-icons";
import ButtonPink from "../events/button-pink";
import PinkCard from "@/components/cards/PinkCard";
import BlueCard from "@/components/cards/BlueCard";
import PurpleCard from "@/components/cards/PurpleCard";
import CardImgPurple from "@/components/cards/card-img-purple";
import ButtonPurple from "../events/button-purple";

const page = () => {
  return (
    <div>
      {/* Heading */}
      <heading className="flex justify-center items-center mb-40">
        <div className="relative pt-10 mx-4 sm:mx-8 md:mx-16 lg:mx-36">
          <h1 className="text-[36px] font-bold">HackHer Hackathon</h1>
          <div className="z-10 absolute top-0 -left-10 w-44 h-44  bg-light-pink rounded-full mix-blend-multiply filter blur-2xl opacity-95 animate-blob"></div>
          <div className="z-10 absolute right-10 w-44 h-44  bg-light-purple rounded-full filter mix-blend-multiply blur-2xl opacity-95 animate-blob animation-delay-4000"></div>
          <p className="text-secondary-text text-[18px] mt-4">
            HackHer 2026 is a 24-hour coding sprint, running from 10am on February
            28th to 10am on March 1st. Participants can compete solo or in teams
            to create projects that meet specific challenge requirements.
            Projects will be judged across multiple categories by a panel of
            expert judges.
          </p>
          <Link
            href="https://drive.google.com/file/d/1BFScRTr0QUyVb25yiosEDSmqojbTYBTB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
          <section className="mt-14 mb-20 flex flex-col-reverse md:flex-row gap-y-10 md:gap-x-16 lg:gap-x-24 md:gap-y-0 items-center">
            <CardImgPurple
              img="/hackher/HackHer Signup.png"
              className="w-full max-w-sm md:max-w-md"
            />
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-4 mt-4 justify-start">
                <FontAwesomeIcon
                  className="size-8 md:size-10"
                  icon={faCalendarDays}
                />
                <p className="text-secondary-text text-[18px] font-black">
                  February 28th - March 1st, 2026
                </p>
              </div>
              <div className="flex items-center gap-4 mt-4 justify-start">
                <FontAwesomeIcon
                  icon={faCalendarCheck}
                  className="size-8 md:size-10"
                />
                <p className="text-secondary-text text-[18px] font-black">
                  Applications open January 30th, 2026, close February 17th, 2026
                </p>
              </div>
              <p className="text-secondary-text text-[18px] font-black mt-4">
                We are so excited to have you participate in HackHer!
              </p>
            </div>
          </section>
          </Link>

          <div className="mt-10 flex flex-col xl:h-[475px] xl:flex-row xl:gap-4 justify-center">
            <PinkCard
              title="Location"
              desc="Code with us in person at Queen’s University for food, workshops, presentations, games, and more! Prizes await the winners. Can’t make it in person? No worries— participate online."
              cta="More"
              link="https://drive.google.com/file/d/1BFScRTr0QUyVb25yiosEDSmqojbTYBTB/view?usp=sharing"
              img={"/hackher/location.png"}
            />
            <BlueCard
              title="Beginner Friendly"
              desc="No coding experience required! This is a great opportunity to learn, collaborate, and network with students, professors, and industry professionals."
              cta="More"
              link="https://drive.google.com/file/d/1BFScRTr0QUyVb25yiosEDSmqojbTYBTB/view?usp=sharing"
              img={"/hackher/beginnerFriendly.png"}
            />
            <PurpleCard
              title="Guest Speakers"
              desc="Industry leaders from Amazon, Microsoft, Tesla, PolyAI and Validere will share their expertise."
              cta="More"
              link="https://drive.google.com/file/d/1BFScRTr0QUyVb25yiosEDSmqojbTYBTB/view?usp=sharing"
              img={"/hackher/guestSpeaker.png"}
            />
          </div>
       
          <div className="self-center p-2 mt-20">
            {/* For medium screens and larger */}
            <div className="hidden xl:block">
              <Image
                src="/hackher/hackher_big.png"
                width={1500}
                height={900}
                alt="Collage of QWIC team pictures"
              />
            </div>

            {/* For smaller screens */}
            <div className="block xl:hidden">
              <Image
                src="/hackher/hackher_small.png"
                width={900}
                height={500}
                alt="Collage of QWIC team pictures - smaller version"
              />
            </div>
          </div>
        </div>
      </heading>
    </div>
  );
};

export default page;
