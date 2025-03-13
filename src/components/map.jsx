const Map = () => {
  return (
    <section id='map' className='map'>
        <h2>Ubicación</h2>
        <iframe src='https://storage.googleapis.com/maps-solutions-3banz5a662/locator-plus/l219/locator-plus.html'
            className='map__map card'
            loading='lazy'>
        </iframe>
    </section>
  )
}

export default Map