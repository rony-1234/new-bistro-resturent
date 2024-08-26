import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




// import required modules
import { Pagination } from 'swiper/modules';

// import image 
import slider1 from '../../../assets/assets/home/slide1.jpg';
import slider2 from '../../../assets/assets/home/slide2.jpg';
import slider3 from '../../../assets/assets/home/slide3.jpg';
import slider4 from '../../../assets/assets/home/slide4.jpg';
import slider5 from '../../../assets/assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <>
        <section>
            <SectionTitle subHeading={'11.00am to 10.00pm'}
                         heading={'Order Online'}>
                
                    
            
            </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slider1} alt=''/>
            <h3 className='text-3xl uppercase text-center text-white -mt-16'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider2} alt=''/>
        <h3 className='text-3xl uppercase text-center text-white -mt-16'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider3} alt=''/>
        <h3 className='text-3xl uppercase text-center text-white -mt-16'>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider4} alt=''/>
        <h3 className='text-3xl uppercase text-white text-center -mt-16'>Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider5} alt=''/>
        <h3 className='text-3xl uppercase text-white -mt-16 text-center'>Salads</h3>
        </SwiperSlide>
        
      </Swiper>
      </section>
      </>

    )
    }

    


export default Category;