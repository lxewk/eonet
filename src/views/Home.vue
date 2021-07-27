<template>
  <div class="home">
    <header>
      <div class="dropdown">
        <button class="dropbtn">sort by Category</button>
        <div class="dropdown-content">
          <span @click="handleClick('drought')">Drought</span>
          <span @click="handleClick('dustHaze')">Dust And Haze</span>
          <span @click="handleClick('earthquakes')">Earthquakes</span>
          <span @click="handleClick('floods')">Floods</span>
          <span @click="handleClick('landslides')">Landslides</span>
          <span @click="handleClick('manmade')">Manmade</span>
          <span @click="handleClick('seaLakeIce')">Sea and Lake Ice</span>
          <span @click="handleClick('severeStorms')">Severe Storms</span>
          <span @click="handleClick('snow')">Snow</span>
          <span @click="handleClick('tempExtremes')">Temperature Extremes</span>
          <span @click="handleClick('volcanoes')">Volcanoes</span>
          <span @click="handleClick('waterColor')">Water Color</span>
          <span @click="handleClick('wildfires')">Wildfires</span>
        </div>
      </div>
    </header>
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="eonet_event.events.length">
        <EventList :eonet_event="eonet_event" :sortTerm="sortTerm" />
      </div>
      <div v-else class="loading">Loading...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EventList from './Events/EventList.vue'
import useUrlQuery from '../composables/urlListener'
import Events from '../types/Events'

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
  name: 'Home',
  components: { EventList },
  setup() {
		const { result: eonet_event, reload, isLoading, error } = 
      useUrlQuery('https://eonet.sci.gsfc.nasa.gov/api/v3/events?limit=25', defaultPlaceholder)

    reload()

    const sortTerm = ref<string>('severeStorms')

    const handleClick = (term: string) => {
      sortTerm.value = term
    }

		return {
			eonet_event,
			reload,
			isLoading,
			error,
      handleClick,
      sortTerm,
		}	
	}
})
</script>


<style scoped>
  .home {
    max-width: 960px;
    margin: 20px auto;
  }
  header {
    text-align: right;
  } 
  .dropbtn {
    color: white;
    padding: 16px;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  .dropdown-content span {
    color: #2c3e50;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    cursor: pointer;
  }
  .dropdown-content span:hover {background-color: #ddd;}

  .dropdown:hover .dropdown-content {display: block;}

  

</style>