import React, { useState, useEffect } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Sponsors() {
  const [slides, setSlides] = useState(3);

  SwiperCore.use([Autoplay]);

  useEffect(() => {
    changeSlides();

    window.addEventListener("resize", () => {
      changeSlides();
    });

    function changeSlides() {
      if (window.innerWidth <= 768) {
        setSlides(1);
      } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
        setSlides(2);
      } else if (window.innerWidth > 1024 && window.innerWidth < 1480) {
        setSlides(3);
      } else {
        setSlides(4);
      }
    }
  });

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={slides}
        autoplay={{ delay: 2000 }}
        scrollbar={{ draggable: true }}
        loop={true}
      >
        <SwiperSlide className="text-center">
          <img
            className="img-fluid img-sponsor border p-2"
            src="/images/Alfaparf.png"
            alt="Alfaparf Milano"
          />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img
            className="img-fluid img-sponsor border p-2"
            src="/images/loreal.jpg"
            alt="L'oreal Professionnel Paris"
          />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img
            className="img-fluid img-sponsor border p-2"
            src="/images/schwarzkopf.png"
            alt="Schwarzkopf"
          />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img
            className="img-fluid img-sponsor border p-2"
            src="/images/inoa.png"
            alt="Inoa"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Sponsors;
