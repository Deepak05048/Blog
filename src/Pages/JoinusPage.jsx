import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination ,Autoplay} from 'swiper/modules';
import PerViewCarousal from '../components/PerViewCarousal';

export default function JoinusPage() {
  return (
    <div className='space-y-12'>

      <Swiper
       loop={true}
       

       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}



        spaceBetween={30}


        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination , Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='h-[80vh] w-full object-cover' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className='h-[80vh] w-full object-cover' src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[80vh] w-full object-cover'  src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className='h-[80vh] w-full object-cover' src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
      <PerViewCarousal/>

    </div>
  )
}
