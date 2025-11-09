"use client";
import React, { useRef } from "react";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "swiper/css";

const Slider = ({ children, isMobile }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const sliderSettings = {
    slidesPerView: isMobile ? 1 : 3,
    spaceBetween: 50,
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        {...sliderSettings}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="mySwiper"
      >
        {children}
      </Swiper>
      <div
        ref={prevRef}
        className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 z-10"
        style={{ left: isMobile ? "-1rem" : "-5rem" }}
      >
        {isMobile ? (
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-[#E0A4D7] h-8 w-8"
          />
        ) : (
          <Image
            src="/qwic_chat/Left button.png"
            alt="Previous"
            width={20}
            height={36}
          />
        )}
      </div>
      <div
        ref={nextRef}
        className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 z-10"
        style={{ right: isMobile ? "-1rem" : "-5rem" }}
      >
        {isMobile ? (
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-[#E0A4D7] h-8 w-8"
          />
        ) : (
          <Image
            src="/qwic_chat/Right button.png"
            alt="Next"
            width={20}
            height={36}
          />
        )}
      </div>
    </div>
  );
};

export default Slider; 