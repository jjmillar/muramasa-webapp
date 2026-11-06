import images from '../assets/images'

const Gallery = () => {
  return (
    <section id='carousel' className='gallery section container' aria-label='Fotos de Muramasa BJJ'>
      <ul className='gallery__grid'>
        {images.map((i) => (
          <li className='gallery__item' key={i.id}>
            <img src={i.image} alt='foto muramasa bjj los angeles' width='960' height='960' decoding='async' loading='lazy' />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Gallery
