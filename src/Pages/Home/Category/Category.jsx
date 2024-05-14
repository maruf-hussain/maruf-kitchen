
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import SectionTitle from '../../../componets/SectionTitle/SectionTitle';



const Category = () => {
    return (
        <section>
            <SectionTitle
             subheading={"11.00 am- 9.00 pm"}
             heading={"Order Online"}>
             </SectionTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className=" mb-2"
            >
                <SwiperSlide><img src={slide1} alt="" />
                    <h4 className='text-xl uppercase text-center  pb-12 text-white bold'>Salad</h4>
                </SwiperSlide>
                <SwiperSlide><img src={slide1} alt="" /><h4 className='text-xl uppercase text-center -mt-16 text-white bold'>Pizza</h4></SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" /><h4 className='text-xl uppercase text-center -mt-16 text-white bold'>Soup</h4></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" /><h4 className='text-xl uppercase text-center -mt-16 text-white bold'>Desert</h4></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" /><h4 className='text-xl uppercase text-center -mt-16 text-white bold'>Salad</h4></SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;