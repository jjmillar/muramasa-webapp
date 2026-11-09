import { handleClick } from '../assets/utils'
import data from '../assets/data'

const HeroSection = () => {
  return (
    <section id='hero' className='hero'>
      <div className='hero__media' aria-hidden='true'>
        <img src='/3.webp' alt='' width='960' height='960' />
      </div>
      <div className='hero__content container'>
        <p className='eyebrow'>Academia en Los Ángeles, Chile</p>
        <h2 className='hero__title' id='hero__title'>Descubre el poder del Jiujitsu Brasileño</h2>
        <p className='hero__quote'>{data.heroText}</p>
        <div id='hero__btn__wrapper' className='hero__btn__wrapper'>
          <button type='button' className='hero__btn btn' onClick={() => handleClick('calendar')}>
            Agenda una clase gratis
          </button>
          <button type='button' className='hero__btn btn btn--ghost' onClick={() => handleClick('call')}>
            Llama ahora
          </button>
        </div>
        <p className='hero__when'>Lunes, Miércoles y Viernes · 20:00 - 22:00</p>
      </div>
    </section>
  )
}

export default HeroSection
