import images from '../assets/images'
import Rail from './rail'

const Gallery = () => {
  return (
    <section id='carousel' className='gallery section container' aria-labelledby='gallery__title'>
      <div className='section__head'>
        <p className='eyebrow'>Comunidad</p>
        <h2 id='gallery__title'>Entrena con nosotros</h2>
      </div>
      <Rail className='gallery__grid' label='Fotos'>
        {images.map((i) => (
          <li className='gallery__item' key={i.id}>
            <img src={i.image} alt='foto muramasa bjj los angeles' width='960' height='960' decoding='async' loading='lazy' />
          </li>
        ))}
      </Rail>
    </section>
  )
}

export default Gallery
