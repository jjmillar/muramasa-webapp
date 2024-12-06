import { handleClick } from '../assets/utils'

const ContactUs = () => {
  return (
    <section id='contact-us' key='contact-us' className='contact-us'>
      <h2>Contáctanos</h2>
      <div id='contact-us__wrapper' className='contact-us__wrapper card' key='contact-us__wrapper'>
        <ion-icon name='map-outline' />
        <p>José Manso de Velasco 474, Los Ángeles.</p>
        <ion-icon name='call-outline' />
        <button type='button' className='contact-us__btn' onClick={() => handleClick('call')}>+56 9 7215 1199</button>
      </div>
    </section>
  )
}

export default ContactUs
