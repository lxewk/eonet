<template>
  <div class="event-detail">
    <header>
      <div class="introduction">
        <p>
          With NASA ESDIS’ <span><b>Worldview</b></span>, users can browse the entire globe daily and look for natural events as they occur.  
        </p>
        <p>
          Regularly spotted storms in the tropics, dust storms over deserts, forest fires in the summers.<br> These events are constantly occurring, and NASA NRT imagery can represent them all using a variety of different data parameters.
        </p>
      </div>
    </header>
    <div class="container">
      <div class="heading">
        <div v-if="error" class="error">{{ error }}</div>
      </div>
      <div v-if="event" class="card">
        <div class="card-header">
          <h1>{{ event.title }}</h1>
        </div>
        <div class="card-body">
          <h2 v-for="cat in event.categories" :key="cat.id">Category : {{ cat.title }}</h2>
          <h2 v-for="geo in event.geometry" :key="geo.date">Date of event : {{ geo.date }}</h2>
          <div v-for="metry in event.geometry" :key="metry.date">
            <h2 v-for="coor in metry.coordinates" :key="coor.index">Coördinates : {{ coor }}</h2>
          </div>
          <div v-if="event">
            <h2 v-if="event.closed === null ">Event is : Open </h2>
            <h2 v-else>Event is closed on :{{ event.closed }}</h2>
          </div>
          <div v-for="source in event.sources" :key="source.id">
            <h2>Source :<SourceDetails :source_id="source.id" /></h2>
          </div>
        </div>
      </div>
        <div v-else class="loading">
          <p>Loading event details...</p>
        </div>
    </div> 
  </div>   
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import getEvent from '../../composables/getEvent'
import SourceDetails from '../Sources/SourceDetail.vue'


export default defineComponent({
  name: 'EventDetails',
  props: ['id'],
  components: { SourceDetails },
  setup(props) {
    const { event, error, load } = getEvent(props.id)
    
    load()

    return { event, error }
  } 
  
})
</script>

<style scoped>
  .event-detail {
    width: 100%;
    margin: 50px auto;
  }
  .container {
    width: 90%;
    margin: 50px auto;
  }
  .heading {
    text-align: center;
    font-size: 20px;
    margin-bottom: 50px;
    color: #365a7e;
  }
  .card {
    width: 100%;
    background: white;
    border: 1px solid #ccc;
    margin-bottom: 30px;
    transition: 0.3s;
  }
  .card-header {
    text-align: left;
    padding: 20px 10px;
    background: linear-gradient(to right, #2295b4, #07252d);
    color: #cedaeb;
  }
  .card-body {
    padding: 30px 20px;
    text-align: left;
    font-size: 15px;
    color: #2c3e50;
  }
  .card-body a {
    cursor: pointer;
  }
</style>
