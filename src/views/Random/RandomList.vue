<template>
  <div v-if="noEvent" class="error">{{ noEvent }}</div>
  <div v-for="id in matchingIndex" :key="id.id" class="random-list">
    <div>
      <RandomDetail :id="id.id" />
    </div>
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
    
    const handleClick = () => {
      eventIndex()
    }

    onMounted(() => console.log('RandomList mounted'))
    onUnmounted(() => console.log('RandomList unmounted'))
    onUpdated(() => console.log('RandomList updated'))

    return { 
      eventObj,
      matchingIndex, 
      noEvent, 
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
</style>

