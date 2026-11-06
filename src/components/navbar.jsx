import { handleClick } from '../assets/utils'

const Navbar = () => {
  return (
    <nav id='navbar' className='navbar' key='navbar'>
      <button type='button' className='navbar__btn' aria-label='Llamar' onClick={() => handleClick('call')}><ion-icon name='call-outline' aria-hidden='true' /></button>
      <button type='button' className='navbar__btn' aria-label='WhatsApp' onClick={() => handleClick('whatsapp')}><ion-icon name='logo-whatsapp' aria-hidden='true' /></button>
      <button type='button' className='navbar__btn' aria-label='Agendar clase' onClick={() => handleClick('calendar')}><ion-icon name='calendar-number-outline' aria-hidden='true' /></button>
      <button type='button' className='navbar__btn' aria-label='Instagram' onClick={() => handleClick('instagram')}><ion-icon name='logo-instagram' aria-hidden='true' /></button>
    </nav>
  )
}

export default Navbar
