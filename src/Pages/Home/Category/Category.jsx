import { Swiper, SwiperSlide } from 'swiper/react';

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


const Category = () => {
    return (
        <>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slider1} alt=''/>
            <h3 className='text-3xl  text-white justify-center font-semibold -mt-16 '>SALADS</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider2} alt=''/>
            <h3 className='text-3xl text-white justify-center font-semibold -mt-16 '>SOUPS</h3>

        </SwiperSlide>
        <SwiperSlide>
            <img src={slider3} alt=''/>
            <h3 className='text-3xl text-white justify-center font-semibold -mt-16'>PIZZAS</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider4} alt=''/>
            <h3 className='text-3xl text-white justify-center font-semibold -mt-16'>DESSERTS</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider5} alt=''/>
        </SwiperSlide>
       
      </Swiper>
      </>
    );
};

export default Category;