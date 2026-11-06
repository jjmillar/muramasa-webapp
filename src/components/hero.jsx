import { handleClick } from '../assets/utils'
import data from '../assets/data'

const HeroSection = () => {
  return (
    <section id='hero' className='hero'>
      <div className='hero__media' aria-hidden='true'>
        <img src='/3.webp' alt='' width='960' height='960' />
      </div>
      <div className='hero__content container'>
        <img className='hero__logo' src='/muramasa-logo.png' alt='Muramasa' width='160' height='160' />
        <h2 className='hero__title' id='hero__title'>Descubre el poder del Jiujitsu Brasileño</h2>
        <blockquote className='hero__quote'>
          <p>{data.heroText}</p>
        </blockquote>
        <div id='hero__btn__wrapper' className='hero__btn__wrapper'>
          <button type='button' className='hero__btn btn btn--primary' onClick={() => handleClick('calendar')}>
            <ion-icon name='calendar-number-outline' aria-hidden='true' />
            Agenda una clase gratis
          </button>
          <button type='button' className='hero__btn btn btn--ghost' onClick={() => handleClick('call')}>
            <ion-icon name='call-outline' aria-hidden='true' />
            Llama ahora
          </button>
        </div>
        <p className='hero__when'>
          <ion-icon name='time-outline' aria-hidden='true' />
          Lunes, Miércoles y Viernes · 20:00 - 22:00
        </p>
      </div>
    </section>
  )
}

export default HeroSection
