import data from './data'

const handleClick = (e) => {
  if (e === 'instagram') { window.open(data.instagram, '_blank') }
  if (e === 'calendar') { window.open(data.calendar, '_blank') }
  if (e === 'whatsapp') { window.open(`https://wa.me/${data.phone}`, '_blank') }
  if (e === 'call') { window.location.href = `tel:${data.phone}` }
}

export {
  handleClick
}
