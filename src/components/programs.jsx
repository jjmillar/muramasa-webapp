const programs = ['Fundamentales', 'Gi', 'NoGi', 'Avanzados']

const Programs = () => {
  return (
    <section id='programs' className='programs section container'>
      <h2 className='programs__title' id='programs__title'>Nuestros programas</h2>
      <ul id='programs__wrapper' className='programs__list'>
        {programs.map((name) => (
          <li className='programs__item' key={name}>{name}</li>
        ))}
      </ul>
    </section>
  )
}

export default Programs
