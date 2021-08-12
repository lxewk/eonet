<template>
  <h4 @click="toggleModal">{{ title }}</h4>
  <div v-if="showModal">
    <Modal theme="sitemap" @close="toggleModal">
      <h1>Sitemap</h1>
      <template v-slot:siteLinks>
        <a href="/">Home</a>
        <a href="/category">Category</a>
        <a href="/source">Sources</a>
        <a href="/random">Random Event</a>
        <a href="/curation">Curation</a>
        <a href="/search">Search</a>
        <a href="#">Home - Title - Event details</a>
      </template>
    </Modal>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import Modal from './Modal.vue'

export default defineComponent({
  components: { Modal },
  data() {
    return {
      title: 'Sitemap',
      showModal: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
})
</script>

<style scoped>
  h4 {
    cursor: pointer;
  }
</style>
