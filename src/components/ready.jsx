import { handleClick } from '../assets/utils'

const Ready = () => {
  return (
    <section id='ready' className='ready section container'>
      <div className='ready__card'>
        <div className='ready__bg' aria-hidden='true'>
          <img src='/5.webp' alt='' width='1080' height='1080' loading='lazy' decoding='async' />
        </div>
        <p className='eyebrow'>Primera clase gratis</p>
        <h2>¿Listo para empezar?</h2>
        <p className='ready__p' id='ready__p'>Da el primer paso hacia tu transformación hoy mismo</p>
        <button type='button' className='ready__btn btn' onClick={() => handleClick('calendar')}>Agenda tu clase de prueba</button>
      </div>
    </section>
  )
}

export default Ready
