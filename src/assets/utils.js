import data from './data'

const openInsta = () => {
  window.open(data.instagram, '_blank')
}
const call = () => {
  window.location.href = `tel:${data.phone}`
}

const whatsapp = () => {
  window.open(`https://wa.me/${data.phone}`, '_blank')
}

const openCalendar = () => {
  window.open(data.calendar, '_blank')
}

export {
  openInsta,
  call,
  whatsapp,
  openCalendar
}
