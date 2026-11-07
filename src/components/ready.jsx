import { handleClick } from '../assets/utils'

const Ready = () => {
  return (
    <section id='ready' className='ready section'>
      <div className='ready__bg' aria-hidden='true'>
        <img src='/2.webp' alt='' width='960' height='960' loading='lazy' decoding='async' />
      </div>
      <div className='container'>
        <h2>¿Listo para empezar?</h2>
        <p className='ready__p' id='ready__p'>Da el primer paso hacia tu transformación hoy mismo</p>
        <button type='button' className='ready__btn btn btn--primary' onClick={() => handleClick('calendar')}>Agenda tu clase de prueba GRATIS!</button>
      </div>
    </section>
  )
}

export default Ready
