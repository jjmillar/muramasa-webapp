import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, A11y } from 'swiper/modules'

import images from '../assets/images'
import 'swiper/css'
import 'swiper/css/pagination'

const PhotoCarousel = () => {
  return (
    <section id='carousel' className='carousel' aria-label='Fotos de Muramasa BJJ'>
      <Swiper
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: true
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, A11y]}
      >
        {images.map((i, index) => (
          <SwiperSlide key={i.id}>
            <img src={i.image} alt='foto muramasa bjj los angeles' width='960' height='960' decoding='async' loading={index === 0 ? undefined : 'lazy'} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default PhotoCarousel
