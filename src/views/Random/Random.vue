<template>
  <div v-if="error" class="error">{{ error }}</div>
  <div v-if="eonet_event.events.length" class="random">
  <RandomList :eonet_event="eonet_event" />
  </div>
  <div v-else class="loading">Loading...</div>	
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import Events from '../../types/Events'
import useUrlQuery from '../../composables/urlListener'
import RandomList from '../Random/RandomList.vue'

type EventItem = {
  title: string,
  description: string,
  link: string,
  events: Events[]
}

const defaultPlaceholder = {
  title: "default",
  description: "",
  link: "",
  events: []
} as EventItem

export default defineComponent({
	name: 'Random',
  components: { RandomList },
  setup() {
    const { result: eonet_event, reload, isLoading, error } = useUrlQuery('https://eonet.sci.gsfc.nasa.gov/api/v3/events', defaultPlaceholder)

    reload()
    console.log(eonet_event)

    return {
      eonet_event,
      reload,
      isLoading,
      error,
    }
  }	
})
</script>

<style>
  
</style>



