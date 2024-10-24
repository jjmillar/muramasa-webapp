import { call, openCalendar } from '../assets/utils'
import Typewriter from 'typewriter-effect'
import data from '../assets/data'

const HeroSection = () => {
  return (
    <section id='hero' className='hero' key='hero'>
      <h2 className='hero__title' id='hero__title' key='hero__title'>Descubre el poder del Jiujitsu Brasileño</h2>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: 80,
          strings: [data.heroText],
          pauseFor: 5000
        }}
      />
      <div id='hero__btn__wrapper' className='hero__btn__wrapper' key='hero__btn__wrapper'>
        <button type='button' className='hero__btn btn' onClick={call}>
          <ion-icon name='call-outline' />
          <p className='hero__btn__text'>Llama ahora</p>
        </button>
        <button type='button' className='hero__btn btn' onClick={openCalendar}>
          <ion-icon name='calendar-number-outline' />
          <p className='hero__btn__text'>Agenda una clase gratis</p>
        </button>
      </div>
    </section>
  )
}

export default HeroSection
