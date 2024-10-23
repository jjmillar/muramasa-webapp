import { call, whatsapp, openCalendar, openInsta } from '../assets/utils'

const Navbar = () => {
  return (
    <nav id='navbar' className='navbar' key='navbar'>
      <button type='button' className='navbar__btn' onClick={call}><ion-icon name='call-outline' /></button>
      <button type='button' className='navbar__btn' onClick={whatsapp}><ion-icon name='logo-whatsapp' /></button>
      <button type='button' className='navbar__btn' onClick={openCalendar}><ion-icon name='calendar-number-outline' /></button>
      <button type='button' className='navbar__btn' onClick={openInsta}><ion-icon name='logo-instagram' /></button>
    </nav>
  )
}

export default Navbar
