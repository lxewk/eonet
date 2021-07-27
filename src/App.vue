<template>
  <div class="header">
    <HeaderPict />
  </div>
  <div id="nav">
    <Navbar />
  </div>
  <router-view/>
  <div class="footer">
    <Sitemap />
  </div>
</template>

<script lang="ts">
import {  defineComponent } from 'vue'
import Sitemap from './components/Sitemap.vue'
import Navbar from './components/Navbar.vue'
import HeaderPict from './components/HeaderPict.vue'


export default defineComponent({
  name: 'App',
  components: { Sitemap, Navbar, HeaderPict },
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
  },
});
</script>

<style>
  .header {
    position: relative;
    background-color: #3b495e;
    color: #228c53;
    padding: 1px;
    text-align: center;
    width: 100%;
    height: 400px;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .footer {
    position: relative;
    background-color: #bdc9db;
    color: #2c3e50;
    margin: 10px auto;
    padding-top: 10px; 
    text-align: center;
    width: 100%;
    height: 70px;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  #nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #2c3e50;
    padding: 20px;
    background: #bdc9db;
    border-radius: 4px;
  }
  
  .sticky {
    position: fixed;
    top: 0;
    width: 95%;
  }
</style>
