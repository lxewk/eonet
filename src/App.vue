<template>
  <div class="header">
    <HeaderPict :pageImg="pageImg" />
  </div>
  <div id="nav">
    <Navbar :images="images" @handleClick="handleClick" :showWorldview="showWorldview" />
  </div>
  <router-view @worldViewClick="worldViewClick"/>
  <div class="footer">
    <Sitemap />
  </div>
</template>

<script lang="ts">
import {  defineComponent, ref } from 'vue'
import Sitemap from './components/Sitemap.vue'
import Navbar from './components/Navbar.vue'
import HeaderPict from './components/HeaderPict.vue'
import Image from './types/Images'


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
  setup() {
    const images = ref<Image[]>([
      { element: 'Cloud', img: 'https://live.staticflickr.com/5675/22226752819_d12be58c78_b.jpg', alt: 'Grey clouds with beam' },
      { element: 'Fire', img: 'https://www.ncronline.org/sites/default/files/styles/article_slideshow/public/stories/images/20130613cnsbr0685%20%5Bcolorado%20fire%5D-001.jpg?itok=28lUeQD3', alt: 'Forrest fire' },
      { element: 'Hurricane', img: 'https://c4.wallpaperflare.com/wallpaper/323/830/562/nasa-hurricane-typhoon-cyclone-wallpaper-preview.jpg', alt: 'Hurricane' },
      { element: 'Flooding', img: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80', alt: 'Flooded town' },
      { element: 'Tornado1', img: 'https://graphicdesignblog.org/wp-content/uploads/2011/03/tornado.jpg', alt: 'Flooded town' },
      { element: 'Volcano', img: 'https://www.desktopbackground.org/download/2560x1440/2011/05/10/201041_download-wallpapers-3840x2160-volcano-eruption-smoke-4k-ultra-hd_3840x2160_h.jpg', alt: 'Volcano' },
      { element: 'Wave', img: 'https://c4.wallpaperflare.com/wallpaper/128/145/154/heavy-rain-on-the-eve-of-the-sea-waves-wallpaper-preview.jpg', alt: 'Sea wave' },
    ])

    const pageImg = ref<Image>(images.value[0])
    const showWorldview = ref(false)

    const handleClick = (obj: Image) => {
      pageImg.value = obj
      showWorldview.value = false
    }

    const worldViewClick = (wave: string) => {
      if (wave === 'Wave') {
        showWorldview.value = true
      } else {
        showWorldview.value = false
      }
    }

    return {
      images,
      pageImg,
      handleClick,
      showWorldview,
      worldViewClick
    }
  }
});
</script>

<style scoped>
  .header {
    position: relative;
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
    width: 100%;
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
