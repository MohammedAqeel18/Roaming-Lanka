import{Swiper, SwiperSlide, SwiperSlider} from "swiper/react";
import {AutoPlay, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function ImageSlider(){
    return(
        <Swiper
        modules={[AutoPlay, Pagination]}
        autoplay={{
            delay:3000
        }}

        pagination={{
            clickable:true
        }}

        loop={true}
        >

        <SwiperSlide>
        <img
        src="/images/polonnaruwa.jpg"
        className="h-[600px] w-full object-cover"
        />    
</SwiperSlide>
 <SwiperSlide>
  <img
  src="/images/kandy.jpg"
  className="h-[600px] w-full object-cover"
  />  
 </SwiperSlide>
        </Swiper>
    )
}

export default ImageSlider;