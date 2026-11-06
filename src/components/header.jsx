import { handleClick } from '../assets/utils'

const Header = () => {
  return (
    <header id='header' className='header'>
      <div className='header__inner container'>
        <a className='header__brand' href='#main'>
          <img src='/muramasa-logo.png' alt='' width='40' height='40' />
          <h1>Muramasa Brazilian Jiujitsu</h1>
        </a>
        <button type='button' className='header__cta btn btn--primary btn--compact' onClick={() => handleClick('calendar')}>
          Agenda una clase gratis
        </button>
      </div>
    </header>
  )
}

export default Header
