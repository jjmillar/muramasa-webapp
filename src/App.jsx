import Header from './components/header'
import HeroSection from './components/hero'
import PhotoCarousel from './components/photoCarousel'
import Navbar from './components/navbar'
import Programs from './components/programs'
import Ready from './components/ready'
import Schedule from './components/schedule'
import ContactUs from './components/contact-us'
import Map from './components/map'
import './App.css'

function App () {
  return (
    <>
      <Header />
      <main id='main' className='main' key='main'>
        <HeroSection />
        <PhotoCarousel />
        <Programs />
        <Ready />
        <Schedule />
        <ContactUs />
        <Map />
      </main>
      <Navbar />
      <footer id='footer' className='footer' key='footer'>©2024 JJ Studio. Todos los derechos reservados.</footer>
    </>
  )
}

export default App
/**/
