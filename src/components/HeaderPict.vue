<template>
  <div v-if="pageImg" class="picture">
    <img :src="pageImg.img" :alt="pageImg.alt">
      <h2>{{ title }}</h2>
  </div>
</template>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Image from '../types/Images'

export default defineComponent({
  props: {
    pageImg: {
      required: true,
      type: Object as PropType<Image>
    }
  },
  setup() {
    const title = 'Earth Observatory Natural Event Tracker - NASA'
    
    return {
      title
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
    display: block;
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 4px;
    position: relative;
    z-index: 0;
  }
  .header h2 {
    position: absolute;
    top: 10px;
    left: 10px;
    color: #cedaeb;
    background: linear-gradient(to right,#2295b4,#07252d) ;
    letter-spacing: 3px;
    margin: 5px;
    padding: 4px 4px 15px 4px;
    border-radius: 4px;
    -webkit-box-reflect: below 1px linear-gradient(transparent,#0004);
    outline: none;
  }
  

</style>