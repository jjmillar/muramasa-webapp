import Header from './components/header'
import HeroSection from './components/hero'
import Gallery from './components/photoCarousel'
import Navbar from './components/navbar'
import Programs from './components/programs'
import Ready from './components/ready'
import Schedule from './components/schedule'
import ContactUs from './components/contact-us'
import './App.css'

function App () {
  return (
    <>
      <Header />
      <main id='main' className='main'>
        <HeroSection />
        <Programs />
        <Gallery />
        <Ready />
        <div className='info container'>
          <Schedule />
          <ContactUs />
        </div>
      </main>
      <Navbar />
      <footer id='footer' className='footer'>
        <img src='/muramasa-logo.png' alt='' width='40' height='40' loading='lazy' />
        <p>©2024 JJ Studio. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default App
