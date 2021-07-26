<template>
  <transition name="fade">
    <div v-if="showEvents">
      <h2>Another Random Detail</h2>
    </div>
  </transition>
  <div>
    <transition name="switch" mode="out-in">
      <div v-if="noEvent" class="error">{{ noEvent }}</div>
      <div v-else>
        <transition-group tag="div" name="detail" appear>
          <div v-for="id in matchingIndex" :key="id.id" class="random-list">
            <RandomDetail :id="id.id" />
          </div>
        </transition-group>
      </div>
    </transition>
    <div>
      <button @click="handleClick" class="btn">another event</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, onUpdated, PropType, ref } from 'vue'
import Event from '../../types/Event'
import Events from '../../types/Events'
import RandomDetail from './RandomDetail.vue'

export default defineComponent({
  props: {
    eonet_event: {
      required: true,
      type: Object as PropType<Event>
    }
  },
  components: { RandomDetail },
  setup(props) {
    const eventObj = ref<Events[]>([])
    const matchingIndex = ref<Events[]>([])
    const noEvent = ref<string>('')
    const showEvents = ref(false)

    props.eonet_event.events.map(event => {
      eventObj.value.push({
        id: event.id,
        title: event.title,
        description: event.description,
        link: event.link,
        closed: event.closed,
        categories: event.categories,
        sources: event.sources,
        geometries: event.geometries
      })
    })   
    
    const eventIndex = () => {
      if (eventObj.value) {
        const randomIndex = Math.floor(Math.random() * 100)
        matchingIndex.value = eventObj.value.filter((event, index) => index === randomIndex)
        return matchingIndex
      } else {
        noEvent.value = 'No events add the moment.'
      } 
    }

    eventIndex()

    const handleShowEvents = () => {
      showEvents.value = !showEvents.value
    }
    
    const handleClick = () => {
      eventIndex()
      handleShowEvents()
    }

    onMounted(() => console.log('RandomList mounted'))
    onUnmounted(() => console.log('RandomList unmounted'))
    onUpdated(() => console.log('RandomList updated'))

    return { 
      eventObj,
      matchingIndex, 
      noEvent, 
      showEvents,
      handleClick 
    }
  }
})
</script>

<style>
  .random-list {
    width: 90%;
    margin: 50px auto;
  }
  .btn {
    color: white;
    padding: 16px;
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
  .detail-enter-from {
  opacity: 0;
  transform: scale(0.6);
  }
  .detail-enter-to {
    opacity: 1;
    transform: scale(1);
  }
  .detail-enter-active {
    transition: all 0.8s ease;
  }
  .switch-enter-from,
  .switch-enter-to {
    opacity: 0;
    transform: translateY(20px)
  }
  .switch-enter-to,
  .switch-leave-from {
    opacity: 1;
    transform: translateY(0)
  }
  .switch-enter-active,
  .switch-leave-active {
    transition: all 0.5s ease;
  }
   
</style>

