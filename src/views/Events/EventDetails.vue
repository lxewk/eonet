<template>
    <div class="container">
      <div class="heading">
        <div v-if="error" class="error">{{ error }}</div>
      </div>
      <div v-if="event" class="card">
        <div class="card-header">
          <h1>{{ event.title }}</h1>
        </div>
        <div v-if="event" class="card-body">
          <h2>Category : {{ event.categories.title }}</h2>
          <h2>Date of event : {{ event.geometry.date }}</h2>
          <h2>Coördinates : {{ event.geometry.coordinates }}</h2>
          <h2>Closed : {{ event.closed }}</h2>
          <a :href="event.sources.url" class="source-link">source</a>
        </div>
      </div>
        <div v-else class="loading">
          <p>Loading event details...</p>
        </div>
      
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import getEvent from '../../composables/getEvent'


export default defineComponent({
  name: 'EventDetail',
  props: ['id'],
  setup(props) {
    const { event, error, load } = getEvent(props.id)
    console.log(event)
    load()



    return { event, error }
  } 
  
})
</script>

<style scoped>
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
    background: linear-gradient(to right, #228c53, #46c480);
    color: #2c3e50;
  }
  .card-body {
    padding: 30px 20px;
    text-align: left;
    font-size: 15px;
    color: #2c3e50;
  }
  .loading {
    display: center;
    text-align: center;
    font-weight: bolder;
    color: #2c3e50;
  }
  .error {
    display: center;
    text-align: center;
    font-weight: bolder;
    color: #2c3e50;
  }
</style>
