import './header.css'
import  { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';


export const Header = () => {
  const {t, i18n} = useTranslation()
    
  return (
   <header  className='headers '>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        <SwiperSlide id='img1'>
        <div className="main-container sm:block my-2 mx-2">
        <h1 className='text-header'>{t("call_to_action.find_ideal_place")}</h1>
            <div className='text-divs font-[20px] text-white my-8'>
            {t("call_to_action.open_doors")}
            </div> 
            <button className='bg-custom btn_Content hover:opacity-50 hover:text-white '>
            {t("call_to_action.learn_more")}
            </button>
        </div>
        </SwiperSlide>
       
      </Swiper>
      
   </header>
  )
}
