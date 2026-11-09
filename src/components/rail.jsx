/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'

// Fila deslizable en móvil con flechas de respaldo. En escritorio cada sección la convierte en grilla.
const Rail = ({ className, label, children }) => {
  const track = useRef(null)
  const [edge, setEdge] = useState({ start: true, end: false })

  const update = () => {
    const el = track.current
    if (!el) return
    setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 })
  }

  useEffect(update, [])

  const move = (dir) => {
    const item = track.current?.firstElementChild
    if (!item) return
    track.current.scrollBy({ left: dir * (item.getBoundingClientRect().width + 8), behavior: 'smooth' })
  }

  return (
    <>
      <ul className={`rail ${className}`} ref={track} onScroll={update}>
        {children}
      </ul>
      <div className='rail__nav'>
        <button type='button' className='rail__arrow' aria-label={`${label}: anterior`} disabled={edge.start} onClick={() => move(-1)}>
          <ion-icon name='chevron-back' aria-hidden='true' />
        </button>
        <button type='button' className='rail__arrow' aria-label={`${label}: siguiente`} disabled={edge.end} onClick={() => move(1)}>
          <ion-icon name='chevron-forward' aria-hidden='true' />
        </button>
      </div>
    </>
  )
}

export default Rail
