/* eslint-disable vue/no-side-effects-in-computed-properties */
<template>
  <div class="search">
    <transition name="fade" appear>
      <form @submit.prevent="getSearchResult" id="search-form">
        <label for="search">Search events by category</label>
        <select id="search" name="search" v-model="searchCategory">
          <option value="drought">Drought</option>
          <option value="dustHaze">Dust and Haze</option>
          <option value="earthquakes">Earthquakes</option>
          <option value="floods">Floods</option>
          <option value="landslides">Landslides</option>
          <option value="manmade">Manmade</option>
          <option value="seaLakeIce">Sea and Lake Ice</option>
          <option value="severeStorms">Severe Storms</option>
          <option value="snow">Snow</option>
          <option value="tempExtremes">Temperature Extremes</option>
          <option value="volcanoes">Volcanoes</option>
          <option value="waterColor">Water Color</option>
          <option value="wildfires">Wildfires</option>
        </select>
        <label for="status">Open or Closed events</label>
        <select id="status" name="status" v-model="status">
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
        <label>Start period</label>
        <input type="date" name="start" v-model="startDate">
        <label>End period</label>
        <input type="date" name="end" v-model="endDate">
        <button>Search</button>
      </form>
    </transition>
    <div v-if="error" class="error">{{ error }}</div>
    
    <transition name="switch" mode="out-in" appear>
      <div v-if="showResult" class="search-list">
        <div v-for="event in foundEvents" :key="event.id" class="search-details">
          <router-link :to="'/event/' + event.id">
            <div class="search-title">
              <h2>{{ event.title}}</h2>
            </div>    
            <div v-for="cat in event.categories" :key="cat.id" class="search-cat">
              <h3>{{ cat.title }}</h3>
            </div>
            <div v-if="startDate" class="search-date">
              <p>Search period: {{ startDate }} to {{ endDate }}</p>
              <div v-if="!event.closed === null">
              <p>Event is {{ event.closed }}</p>
              </div>
              <div v-else>
              <p>Event is open</p>
              </div>
            </div>
            <div class="search-description">
              <h3>Description:</h3>
              <div v-if="event.description">
                <p>{{ event.description}}</p>
              </div>
              <div v-else>
                <p>None</p>
              </div>
            </div> 
            <hr> 
          </router-link>
        </div>
      </div>
      <div v-else class="noEvents">
        {{ noEvents }}
      </div>
    </transition>

  </div>
</template> 

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import Events from '../types/Events'
import moment from 'moment'
import useUrlQuery from '../composables/urlListener'

type EventItem = {
  title: string,
  description: string,
  link: string,
  events: Events[]
}

const defaultPlaceholder = {
  title: "search page",
  description: "",
  link: "",
  events: []
} as EventItem

export default defineComponent({
  name: 'Search',
  setup() {
    const foundEvents = ref<Events[]>([])
    const noEvents = ref<string>('No events found with these criteria')
    const showResult = ref(true)
    const searchCategory = ref<string>('')
    const status = ref<string>('')
    const startDate = ref<string>('')
    const endDate = ref<string>('')

    const url = computed(() => 
      `https://eonet.sci.gsfc.nasa.gov/api/v3/events?limit=15&status=${status.value}&category=${searchCategory.value}&start=${startDate.value}&end=${endDate.value}`
    )

    const { result, reload, isLoading, error } = useUrlQuery(url, defaultPlaceholder)
        
    reload()
    

    const setStartDate = () => {
      startDate.value = moment().format('YYYY-MM-DD')
    }

    const setEndDate = () => {
      endDate.value = moment().format('YYYY-MM-DD')
    }

    const getSearchResult = () => {
        foundEvents.value = result.value.events 
        if (foundEvents.value.length === 0) {
          showResult.value = false
        } else {
          showResult.value = true
        }

        searchCategory.value = ''
        status.value = ''
        
        console.log(foundEvents.value)
    }

    onMounted(() => {
      setStartDate()
      setEndDate()
    })
    

    return {
      searchCategory,
      getSearchResult,
      status,
      startDate,
      endDate,
      foundEvents,
      noEvents,
      showResult,
      isLoading,
      error,
    }
  }
})
</script>

<style>
  #search-form {
    max-width: 960px;
    margin: 50px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  #search-form label {
    font-weight: bold;
    color: #2c3e50;
    display: inline-block;
    font-size: 1.1em;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 25px 0 15px;
  }
  #search-form select {
    padding: 10px 6px;
    width: 100%;
    font-weight: bold;
    font-size: 1.1em;
    letter-spacing: 0.6px;
    display: block;
    color: #2c3e50;
    background-color: #f1f1f1;
    border-radius: 4px;
    cursor: pointer;
  }
  #search-form input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    color: #2c3e50;
    font-weight: bold;
    font-size: 1.1em;
    letter-spacing: 0.6px;
    background-color: #f1f1f1;
    border-radius: 4px;
  }
  #search-form button {
    width: 100%;
    margin: 20px 0;
    color: white;
    padding: 16px;
    font-size: 1.1em;
    font-weight: bold;
  }
  .search-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 120px;
    padding: 0px 20px;
    background: white;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .search-details {
    max-width: 50%;
    flex: 1 1 50%;
    padding: 16px 8px;    
  }
  .search-title h2 {
	text-transform: capitalize;
	color: #2295b4;
  }
  .search-cat {
    color: #5e17d1;
  }
  .search-description {
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    height: auto;
  }
  .noEvents {
    max-width: 960px;
    margin: 20px auto;
    background: white;
    text-align: center;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-weight: bold;
    color: #2c3e50;
    font-size: 1.1em;
    text-transform: uppercase;
    letter-spacing: 1px;
    
  }
  /* fade transition */
  .fade-enter-from {
    opacity: 0;
    transform: scaleY(0.6);
  }
  .fade-enter-to {
    opacity: 1;
    transform: scaleY(1);
  }
  .fade-enter-active {
    transition: all 1s ease;
  }
  
  /* switch transitions */
  .switch-enter-from,
  .switch-leave-to {
    opacity: 0;
    transform: translateY(-20px)
  }
  .switch-enter-to,
  .switch-leave-from {
    opacity: 1;
    transform: translateY(0)
  }
  .switch-enter-active,
  .switch-leave-active {
    transition: all 1s ease;
  }
  
  @media (max-width: 600px) {
    .search-list {
      margin: auto;
    }
  }
  

</style>

