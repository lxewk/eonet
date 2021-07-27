<template>
  <div class="navbar-links">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/category">Category</router-link></li>
      <li><router-link to="/source">Sources</router-link></li>
      <li><router-link to="/random">Random Event</router-link></li>
      <li><a href="https://worldview.earthdata.nasa.gov/">Worldview</a></li>
    </ul>
  </div>
  <a href="#" class="toggle-btn" @click="toggleButton">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      showNavbar: false,
    }
  },
  methods: {
    toggleButton() {
      const navbarLinks = document.getElementsByClassName('navbar-links')[0]
      this.showNavbar = !this.showNavbar
      navbarLinks.classList.toggle('active')
    }
  }
})
</script>

<style scoped>
  #nav .navbar-links ul {
    margin: 0;
    padding: 0;
    display: flex;
  }
  #nav .navbar-links li {
    list-style: none;
  }
  #nav .navbar-links li a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 10px;
    border-radius: 4px;
    display: block;
  }
  #nav .navbar-links li a.router-link-exact-active {
    color: white;
    background: #5e17d1;
  }
  #nav .toggle-btn {
    position: absolute;
    right: 2rem;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
  }
  #nav .toggle-btn .bar {
    height: 3px;
    width: 100%;
    background-color: #2c3e50;
    border-radius: 10px;
  }

  @media (max-width: 600px) {
    #nav .toggle-btn {
      display: flex;
    }
    #nav .navbar-links {
      display: none;
      width: 100%;
    }
    #nav {
      flex-direction: column;
      align-items: flex-start;
    }
    #nav .navbar-links ul {
      width: 50%;
      flex-direction: column;
    }
    #nav .navbar-links li {
      text-align: center;
    }
    #nav .navbar-links li a {
      padding: .5rem 1rem;
    }
    #nav .navbar-links.active {
      display: flex;
    }
  }
</style>