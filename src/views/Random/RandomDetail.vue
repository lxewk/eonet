<template>
  <div class="container">
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
        <div>
          <h2 v-if="event.closed === null ">Event is : Open </h2>
          <h2 v-else>Event is closed on :{{ event.closed }}</h2>
        </div>
        <div v-for="source in event.sources" :key="source.id">
          <h2>Source :<SourceDetails :source_id="source.id" /></h2>
        </div>
      </div>
    </div>
  </div> 
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import SourceDetails from '../Sources/SourceDetail.vue'

export default defineComponent({
  props: ['event'],
  components: { SourceDetails }, 
})
</script>


<style scoped>
  .container {
    width: 90%;
    margin: 50px auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
    border-radius: 4px;
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