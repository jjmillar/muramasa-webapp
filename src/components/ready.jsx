import { openCalendar } from '../assets/utils'

const Ready = () => {
  return (
    <section id='ready' key='ready' className='ready'>
      <h2>¿Listo para empezar?</h2>
      <p className='ready__p' id='ready__p' key='ready__p'>Da el primer paso hacia tu transformación hoy mismo</p>
      <button type='button' className='ready__btn btn' onClick={openCalendar}>Agenda tu clase de prueba GRATIS!</button>
    </section>
  )
}

export default Ready
