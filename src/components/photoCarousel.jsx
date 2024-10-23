import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import images from '../assets/images'
import 'swiper/css'
import 'swiper/css/navigation'

const PhotoCarousel = () => {
  return (
    <section id='carousel' className='carousel' key='carousel'>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: true
        }}
        modules={[Navigation, Autoplay]}
        className='mySwiper swiper-container'
      >
        {images.map((i) => (
          <SwiperSlide className='swiper-slide' key={i.id}>
            <img src={i.image} alt='foto muramasa bjj los angeles' />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default PhotoCarousel
