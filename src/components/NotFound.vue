<template>
  <div class="notFound">
    <h2>404</h2>
    <h3>Page not found</h3>
    <router-link :to="{ name: 'Home' }" class="router-link">
      <h3 id="link">Home</h3>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    
})
</script>

<style scoped>
  .notFound {
    max-width: 960px;
    margin: 40px auto;
  }
  .notFound h2 {
    margin: 0 0 10px;
    text-transform: capitalize;
    color: #228c53;
  }
  .notFound h3 {
    color: #2c3e50;
  }
  #link {
    color: #5e17d1;
  }
  
</style>