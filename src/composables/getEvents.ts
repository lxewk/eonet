import { ref } from 'vue'
import Event from '../types/Event'

const getEvents = () => {
  const events = ref<Event>()
  const error = ref<any>(null)

  const load = async () => {
    try {
      const data = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/events')
      if (!data.ok) {
        throw Error('no data available')
      }
      events.value = await data.json()
    }
    catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return { events, error, load }
}

export default getEvents