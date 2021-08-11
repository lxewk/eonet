<template>
  <div class="random">
    <div v-if="error" class="error">{{ error }}</div>
    <div v-else-if="eonet_event.events.length">
      <div class="container-btn">
        <button @click="handleClick" class="random-btn">Random Event</button>
      </div>
      <div>
        <transition name="fade" mode="out-in" appear>
          <RandomDetail :event="index"/>
        </transition>
      </div>
    </div>  
    <div v-else class="loading">Loading...</div>	
  </div>
</template>


<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import Event from '../../types/Event'
import useUrlQuery from '../../composables/urlListener'
import RandomDetail from './RandomDetail.vue'


const defaultPlaceholder = {
  title: "default",
  description: "",
  link: "",
  events: []
} as Event

export default defineComponent({
	name: 'Random',
  components: { RandomDetail },
  setup() {
    const noEvent = ref('No event at the moment')

    const { result: eonet_event, reload, isLoading, error } = 
      useUrlQuery('https://eonet.sci.gsfc.nasa.gov/api/v3/events?limit=100', defaultPlaceholder)

    reload()

    const randomIndex = ref(Math.floor(Math.random() * 100))

    const handleClick = () => {
      randomIndex.value = Math.floor(Math.random() * 100)
    }
    
    const index = computed(() => {
      return eonet_event.value.events[randomIndex.value]
    })

    return {
      noEvent,
      eonet_event,
      reload,
      isLoading,
      error,
      handleClick,
      index
    }
  }	
})
</script>

<style>
  .random {
    width: 90%;
    margin: 50px auto;
  }
  .container-btn {
    margin: auto;
    width: 90%;
    text-align: center;
  }
  .random-btn {
    color: white;
    padding: 16px;
    width: 60%;
    font-weight: bold;
    font-size: 1.1em;
    letter-spacing: 0.6px;
  }

  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 2s ease;
  }
  .fade-leave-to {
    opacity: 0;
  }
  .fade-move {
    transition: all 0.3s ease;
  }

</style>



