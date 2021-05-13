import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

function Sponsors() {
    return (
        <>
        <Swiper spaceBetween={50} slidesPerView={3} scrollbar={{ draggable: true }}>
            <SwiperSlide><img className="img-fluid img-sponsor border p-2" src="/images/Alfaparf.png" alt="Alfaparf Milano" /></SwiperSlide>
            <SwiperSlide><img className="img-fluid img-sponsor border p-2" src="/images/loreal.jpg" alt="L'oreal Professionnel Paris" /></SwiperSlide>
            <SwiperSlide><img className="img-fluid img-sponsor border p-2" src="/images/schwarzkopf.png" alt="Schwarzkopf" /></SwiperSlide>
        </Swiper>
        </>
    )
}

export default Sponsors
