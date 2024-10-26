import { call, whatsapp, openCalendar, openInsta } from '../assets/utils'

const Navbar = () => {
  return (
    <nav id='navbar' className='navbar' key='navbar'>
      <button type='button' className='navbar__btn' onClick={call}><ion-icon name='call-outline' aria-label='call' /></button>
      <button type='button' className='navbar__btn' onClick={whatsapp}><ion-icon name='logo-whatsapp' aria-label='whatsapp' /></button>
      <button type='button' className='navbar__btn' onClick={openCalendar}><ion-icon name='calendar-number-outline' aria-label='calendar' /></button>
      <button type='button' className='navbar__btn' onClick={openInsta}><ion-icon name='logo-instagram' aria-label='instagram' /></button>
    </nav>
  )
}

export default Navbar
