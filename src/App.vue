<template>
  <div class="header">
    <img src="./assets/Homepage-background.jpeg" alt="Earth Observatory Natural Event Tracker">
    <h2>Earth Observatory Natural Event Tracker<br />( Nasa )</h2>
  </div>
  <div id="nav">
    <router-link to="/">Home</router-link> 
    <router-link to="/category">Category</router-link> 
    <router-link to="/source">Sources</router-link> 
    <router-link to="/random">Random Event</router-link>  
    <a href="https://worldview.earthdata.nasa.gov/">Worldview</a>
  </div>
  <router-view/>
</template>

<script lang="ts">
import {  defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  mounted() {
    window.onscroll = () => {handleSticky()}

    const navbar = document.getElementById("nav") as HTMLDivElement
    const sticky = navbar?.offsetTop
    
    const handleSticky = () => {
      if (window.pageYOffset >= sticky) {
        navbar?.classList.add("sticky")
      }
      else {
        navbar?.classList.remove("sticky")
      }
    }
  }
  
  
});
</script>

<style scoped>
  .header {
    position: relative;
    background-color: #3b495e;
    color: #39bf78;
    padding: 1px;
    text-align: center;
    width: 100%;
    height: 400px;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
  h2 {
    position: absolute;
    top: 10px;
    left: 25px;
    text-decoration: underline;
  }

  #nav {
    text-align: left;
    color: #2c3e50;
    padding: 30px;
    background: #bdc9db;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 10px;
    border-radius: 4px;
  }

  #nav a.router-link-exact-active {
    color: white;
    background: #5e17d1;
  }

  .sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

</style>
