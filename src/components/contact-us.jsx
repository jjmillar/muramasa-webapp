import { handleClick } from '../assets/utils'

const ContactUs = () => {
  return (
    <section id='contact-us' className='contact-us section'>
      <h2>Contáctanos</h2>
      <ul id='contact-us__wrapper' className='rows'>
        <li className='row'>
          <ion-icon name='map-outline' aria-hidden='true' />
          <p>José Manso de Velasco 474, Los Ángeles.</p>
        </li>
        <li className='row'>
          <ion-icon name='call-outline' aria-hidden='true' />
          <button type='button' className='contact-us__btn' onClick={() => handleClick('call')}>+56 9 7215 1199</button>
        </li>
      </ul>
    </section>
  )
}

export default ContactUs
