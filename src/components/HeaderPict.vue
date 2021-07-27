<template>
  <div class="picture">
    <img src="../assets/pictures/Homepage-background.jpeg" alt="Beam in grey clouds">
    <h2>{{ title }}<br />{{ nasaLogo }}</h2>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      title: 'Earth Observatory Natural Event Tracker',
      nasaLogo: 'Nasa',
      images: [
        { element: 'Cloud', img: '../assets/pictures/Homepage-background.jpeg', alt: 'Grey clouds with beam', isActivePage: false },
        { element: 'Fire', img: '../assets/pictures/smokeWithCar.jpeg', alt: 'Forrest fire', isActivePage: false },
        { element: 'Wave', img: '../assets/pictures/seaWave.jpeg', alt: 'Sea wave', isActivePage: false },
        { element: 'Tornado', img: '../assets/pictures/tornadoBlueSky.jpeg', alt: 'Tornado', isActivePage: false },
        { element: 'Hurricane', img: '../assets/pictures/hurricane.jpeg', alt: 'Hurricane', isActivePage: false },
        { element: 'Flooding', img: '../assets/pictures/floodingVillage.jpeg', alt: 'Flooded town', isActivePage: false },
      ]
    }
  }
})
</script>


<style>
  .header .picture {
    width: 100%;
    height: 400px;
    border-radius: 4px;
  }
  .header .picture img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
  .header h2 {
    position: absolute;
    top: 10px;
    left: 25px;
    text-decoration: underline;
  }

</style>