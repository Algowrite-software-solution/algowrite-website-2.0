import React from "react";

import java from "../assets/TechnologyIcons/java.png";
import react from "../assets/TechnologyIcons/react.png";
import bootstrap from "../assets/TechnologyIcons/bootstrap.png";
import nodejs from "../assets/TechnologyIcons/nodejs.png";
import mysql from "../assets/TechnologyIcons/mysql.png";
import php from "../assets/TechnologyIcons/php.png";
import javaScript from "../assets/TechnologyIcons/javaScript.png";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./TechnologyStyles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import MainTopic from "../components/MainTopic";


function Technology() {

     return (

          <div className="w-full py-7 h-1/5">
               <div className="flex justify-center pb-10 text-center">
                    <MainTopic text="TECHNOLOGIES" className="text-3xl font-bold text-darker" subTopic="Tag line of technology" subTopicClassName="text-darker" />
               </div>

               <div className="ml-20 mr-20 bg-red-60">
                    <div className="">
                         <Swiper
                              slidesPerView={1}
                              spaceBetween={10}
                              pagination={{
                                   clickable: true,
                              }}
                              navigation={true}
                              autoplay={{
                                   delay: 2500,
                                   disableOnInteraction: false,
                              }}

                              breakpoints={{
                                   640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                   },
                                   768: {
                                        slidesPerView: 4,
                                        spaceBetween: 40,
                                   },
                                   1024: {
                                        slidesPerView: 5,
                                        spaceBetween: 50,
                                   },
                              }}
                              modules={[Pagination, Navigation, Autoplay]}
                              className="mySwiper"
                         >
                              <SwiperSlide ><img src={react} /></SwiperSlide>
                              <SwiperSlide ><img src={javaScript} /></SwiperSlide>
                              <SwiperSlide ><img src={java} /></SwiperSlide>
                              <SwiperSlide ><img src={mysql} /></SwiperSlide>
                              <SwiperSlide ><img src={nodejs} /></SwiperSlide>
                              <SwiperSlide ><img src={php} /></SwiperSlide>
                              <SwiperSlide ><img src={bootstrap} /></SwiperSlide>
                         </Swiper>
                    </div>
               </div>
          </div>
     );
}

export default Technology;