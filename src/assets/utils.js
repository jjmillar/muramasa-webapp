import data from './data'

const handleClick = (e) => {
  if (e === 'instagram') { window.open(data.instagram, '_blank', 'noopener,noreferrer') }
  if (e === 'calendar') { window.open(data.calendar, '_blank', 'noopener,noreferrer') }
  if (e === 'whatsapp') { window.open(`https://wa.me/${data.phone}`, '_blank', 'noopener,noreferrer') }
  if (e === 'call') { window.location.href = `tel:${data.phone}` }
}

export {
  handleClick
}
