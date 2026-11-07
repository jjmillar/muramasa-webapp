import { useEffect, useRef, useState } from 'react'
import images from '../assets/images'

const Gallery = () => {
  const track = useRef(null)
  const [edge, setEdge] = useState({ start: true, end: false })

  const update = () => {
    const el = track.current
    if (!el) return
    setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 })
  }

  useEffect(update, [])

  const move = (dir) => {
    const el = track.current
    const item = el?.firstElementChild
    if (!item) return
    el.scrollBy({ left: dir * (item.getBoundingClientRect().width + 12), behavior: 'smooth' })
  }

  return (
    <section id='carousel' className='gallery section container' aria-label='Fotos de Muramasa BJJ'>
      <ul className='gallery__grid' ref={track} onScroll={update}>
        {images.map((i) => (
          <li className='gallery__item' key={i.id}>
            <img src={i.image} alt='foto muramasa bjj los angeles' width='960' height='960' decoding='async' loading='lazy' />
          </li>
        ))}
      </ul>
      <div className='gallery__nav'>
        <button type='button' className='gallery__arrow' aria-label='Foto anterior' disabled={edge.start} onClick={() => move(-1)}>
          <ion-icon name='chevron-back' aria-hidden='true' />
        </button>
        <button type='button' className='gallery__arrow' aria-label='Foto siguiente' disabled={edge.end} onClick={() => move(1)}>
          <ion-icon name='chevron-forward' aria-hidden='true' />
        </button>
      </div>
    </section>
  )
}

export default Gallery
