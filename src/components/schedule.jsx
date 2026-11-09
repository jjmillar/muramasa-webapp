const days = ['Lunes', 'Miércoles', 'Viernes']

const Schedule = () => {
  return (
    <section id='schedule' className='schedule section tile'>
      <h2>Horario de Clases</h2>
      <dl id='schedule__wrapper' className='rows'>
        {days.map((day) => (
          <div className='row' key={day}>
            <dt>{day}</dt>
            <dd>20:00 - 22:00</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default Schedule
