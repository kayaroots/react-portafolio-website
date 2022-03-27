import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos perspiciatis nostrum laudantium quasi vero maiores cupiditate accusamus reprehenderit ipsam eum veritatis amet laborum repellendus reiciendis earum repellat, fugit magnam corporis!",
  },
  {
    avatar: AVTR2,
    name: 'Marcelo Montereal',
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos perspiciatis nostrum laudantium quasi vero maiores cupiditate accusamus reprehenderit ipsam eum veritatis amet laborum epellendus reiciendis earum repellat, fugit magnam corporis!",
  },
  {
    avatar: AVTR3,
    name: 'Alberto Air',
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos perspiciatis nostrum laudantium quasi vero maiores cupiditate accusamus reprehenderit ipsam eum veritatis amet laborum epellendus reiciendis earum repellat, fugit magnam corporis!",
  },
  {
    avatar: AVTR4,
    name: 'Lina Yeng',
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos perspiciatis nostrum laudantium quasi vero maiores cupiditate accusamus reprehenderit ipsam eum epellendus reiciendis earum repellat, fugit magnam perspiciatis nostrum corporis!",
  }
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container" // install Swiper modules
      modules={[Pagination]} 
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => { 
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial