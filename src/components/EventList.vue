<template>
	<div class="event-list">
		<ul>
			<li v-for="eventsEntry in neonet_event.events" :key="eventsEntry.id">
				<h2>{{ eventsEntry.title }}</h2>
        <router-link :to="{ name: 'Category'}">
          <div v-for="category in eventsEntry.categories" :key="category.id"  class="event-categorie">
            <h3>Category: {{ category.title }}</h3>	
          </div>
        </router-link>
				<div v-for="source in eventsEntry.sources" :key="source.id" class="event-source">
					<SourceDetails :source_id="source.id" />
				</div>
			</li>
		</ul>
	</div>
</template>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import SourceDetails from './SourceDetails.vue'
import Event from '../types/Event'

export default defineComponent({
	props: {
    neonet_event: {
      required: true,
      type: Object as PropType<Event>
    },
    
  },
	components: { SourceDetails }
})
</script>

<style scoped>
.event-list {
	max-width: 960px;
	margin: 40px auto;
}
.event-list ul {
	padding: 0;
}
.event-list li {
	list-style-type: none;
	background: white;
	padding: 16px;
	margin: 16px;
	border-radius: 4px;
}
.event-list h2 {
	margin: 0 0 10px;
	text-transform: capitalize;
	color: #39bf78;
}
.event-list h3 {
	color: #2c3e50;
}
.event-list a {
  text-decoration: none;
}
.event-categorie {
	display: flex;
}
.event-source {
	display: flex;
}


</style>