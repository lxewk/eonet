import { ref } from 'vue'
import Events from '../types/Events'

const getEvent = (id: string) => {
  const event = ref<Events[]>([])
  const error = ref<any>(null)

  const load = async () => {
    try {
      const data = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/events/'+ id)
      if (!data.ok) {
        throw Error('No event with that id available.')
      }
      event.value = await data.json()
    }
    catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return { event, error, load }
}

export default getEvent