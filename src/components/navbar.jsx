import { handleClick } from '../assets/utils'

const actions = [
  { id: 'call', icon: 'call-outline', label: 'Llamar' },
  { id: 'whatsapp', icon: 'logo-whatsapp', label: 'WhatsApp' },
  { id: 'calendar', icon: 'calendar-number-outline', label: 'Agendar clase', primary: true },
  { id: 'instagram', icon: 'logo-instagram', label: 'Instagram' }
]

const Navbar = () => {
  return (
    <nav id='navbar' className='navbar' aria-label='Contacto rápido'>
      {actions.map(({ id, icon, label, primary }) => (
        <button
          type='button'
          key={id}
          className={primary ? 'navbar__btn navbar__btn--primary' : 'navbar__btn'}
          onClick={() => handleClick(id)}
        >
          <ion-icon name={icon} aria-hidden='true' />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  )
}

export default Navbar
