<template>
  <div class="home">
    <header>
      <div class="introduction">
        <p>NASA's Earth Observatory Natural Event Tracker - EONET - is a prototype web service with the goal of:</p>
        <ol>
          <li><p>Providing a curated source of continuously updated natural event metadata.</p></li>
          <li><p>Providing a service that links those natural events to thematically-related web service-enabled image sources (e.g., via WMS, WMTS, etc.).</p></li>
          <ul>
            <li><h5>Development of EONET began in 2015 and has been supported by the following:</h5></li>
            <li><a href="https://earthdata.nasa.gov/">Earth Science Data Systems Program (ESDS)</a></li>
            <li><a href="https://earthobservatory.nasa.gov/">NASA Earth Observatory</a></li>
          </ul>
        </ol> 
      </div>
    </header>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="eonet_event.events.length">
      <transition name="home-btn" appear>
        <div class="btn-cnt">
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
        </div>
      </transition>
      <EventList 
        :eonet_event="eonet_event" 
        :sortTerm="sortTerm" 
        @handleWorldClick="handleWorldClick" />
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
  title: "home",
  description: "",
  link: "",
  events: []
} as EventItem

export default defineComponent({
  name: 'Home',
  components: { EventList },
  emits: ['worldViewClick'],
  setup(props, context) {
		const { result: eonet_event, reload, isLoading, error } = 
      useUrlQuery('https://eonet.sci.gsfc.nasa.gov/api/v3/events?limit=10', defaultPlaceholder)

    reload()

    const sortTerm = ref<string>('severeStorms')

    const handleClick = (term: string) => {
      sortTerm.value = term
    }

    const handleWorldClick = (v: string) => {
      context.emit('worldViewClick', v)
    }

		return {
			eonet_event,
			reload,
			isLoading,
			error,
      handleClick,
      sortTerm,
      handleWorldClick
		}	
	}
})
</script>


<style>
  .home {
    width: 100%;
    margin: 50px auto;
  }
  
  .home .introduction ol {
    margin: 10px;
  }
  .home .introduction ul {
    list-style-type: none;
  }
  .home .btn-cnt {
    text-align: right;
    width: 90%;
  } 
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropbtn {
    color: white;
    padding: 16px;
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

  /* transition home-btn */
  .home-btn-enter-from {
  opacity: 0;
  transform: scale(0.6);
  }
  .home-btn-enter-to {
    opacity: 1;
    transform: scale(1);
  }
  .home-btn-enter-active {
    transition: all 1s ease;
  }

</style>