import { handleClick } from '../assets/utils'

const Header = () => {
  return (
    <header id='header' className='header'>
      <div className='header__inner container'>
        <div className='header__brand'>
          <img src='/logo.svg' alt='' width='36' height='40' />
          <h1>Muramasa Brazilian Jiujitsu</h1>
        </div>
        <button type='button' className='header__cta btn btn--primary btn--compact' onClick={() => handleClick('calendar')}>
          Agenda una clase gratis
        </button>
      </div>
    </header>
  )
}

export default Header
