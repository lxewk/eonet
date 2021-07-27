<template>
	<div class="event-list">
    <p>Sort by {{ sortTerm }}</p>
		<transition-group tag="ul" name="list" mode="out-in" appear>
      <li v-for="eventsEntry in eonet_event.events" :key="eventsEntry.id">
        <router-link :to="{ name: 'EventDetail', params: { id: eventsEntry.id }}">
          <h2>{{ eventsEntry.title }}</h2>
        </router-link>
        <router-link :to="{ name: 'Category' }">
          <div v-for="category in eventsEntry.categories" :key="category.id"  class="event-categorie">
            <h3>Category: {{ category.title }}</h3>	
          </div>
        </router-link>
        <div v-for="source in eventsEntry.sources" :key="source.id" class="event-source">
          <SourceDetail :source_id="source.id" />
        </div>
      </li>
		</transition-group>
	</div>
</template>


<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import SourceDetail from '../Sources/SourceDetail.vue'
import Event from '../../types/Event'
// import Events from '../../types/Events'

import Category from '../../types/Category'


export default defineComponent({
	props: {
    eonet_event: {
      required: true,
      type: Object as PropType<Event>
    },
    sortTerm: {
      required: true,
      type: String as PropType<string>
    },
  },
	components: { SourceDetail },
  setup(props) {
    console.log(props.eonet_event)

    const sortedCategory = computed(() => {
      return [...props.eonet_event.events].forEach(c => c.categories
        .slice()
        .sort((a: Category, b: Category) => {
          let fa = a.id.includes(props.sortTerm), fb = b.id.includes(props.sortTerm)
          return fa < fb ? 1 : -1
        }) 
      )}
    )
    console.log(props.eonet_event)

    return { 
       sortedCategory
    }
  }

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
.list-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.list-enter-to {
  opacity: 1;
  transform: scale(1);
}
.list-enter-active {
  transition: all 0.6s ease;
}
</style>

