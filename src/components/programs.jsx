import { handleClick } from '../assets/utils'
import Rail from './rail'

const programs = [
  { name: 'Fundamentales', hint: 'Para empezar desde cero', image: '/1.webp', focus: '30% 50%' },
  { name: 'Gi', hint: 'Con kimono', image: '/4.webp', focus: '72% 50%' },
  { name: 'NoGi', hint: 'Sin kimono', image: '/6.webp', focus: '50% 50%' },
  { name: 'Avanzados', hint: 'Para quienes ya entrenan', image: '/2.webp', focus: '68% 50%' }
]

const Programs = () => {
  return (
    <section id='programs' className='programs section container' aria-labelledby='programs__title'>
      <div className='section__head'>
        <p className='eyebrow'>Programas</p>
        <h2 id='programs__title'>Nuestros programas</h2>
        <p className='section__lead'>Cuatro formas de entrenar, a tu nivel y desde tu primera clase.</p>
      </div>
      <Rail className='programs__grid' label='Programas'>
        {programs.map(({ name, hint, image, focus }) => (
          <li className='program' key={name}>
            <img src={image} alt='' width='960' height='960' loading='lazy' decoding='async' style={{ objectPosition: focus }} />
            <div className='program__body'>
              <p className='program__hint'>{hint}</p>
              <h3 className='program__name'>{name}</h3>
              <button type='button' className='btn btn--compact' onClick={() => handleClick('calendar')}>Agenda una clase</button>
            </div>
          </li>
        ))}
      </Rail>
    </section>
  )
}

export default Programs
