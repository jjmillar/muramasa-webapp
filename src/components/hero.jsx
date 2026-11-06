import { handleClick } from '../assets/utils'
import Typewriter from 'typewriter-effect'
import data from '../assets/data'

const HeroSection = () => {
  return (
    <section id='hero' className='hero'>
      <h2 className='hero__title' id='hero__title'>Descubre el poder del Jiujitsu Brasileño</h2>
      <p className='sr-only'>{data.heroText}</p>
      <div className='hero__quote' aria-hidden='true'>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 80,
            strings: [data.heroText],
            pauseFor: 5000
          }}
        />
      </div>
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
    </section>
  )
}

export default HeroSection
