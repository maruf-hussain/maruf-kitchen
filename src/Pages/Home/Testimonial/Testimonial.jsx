import SectionTitle from "../../../componets/SectionTitle/SectionTitle";
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section>
            <SectionTitle
                subheading={'What Our Client Say'}
                heading={'Testimonial'}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center my-10 mx-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <img style={{borderRadius:'30px'}} className="w-1/12 mt-4" src={review.image} alt="img" />
                            <p className="py-4 w-1/2">{review.details}</p>
                            <h3 className="text-3xl text-yellow-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>
                    )
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;