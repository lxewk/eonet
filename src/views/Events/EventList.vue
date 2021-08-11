<template>
	<div class="event-list">
		<transition-group tag="ul" name="list" mode="out-in" appear>
      <li v-for="eventsEntry in sorting" :key="eventsEntry.id">
        <router-link :to="{ name: 'EventDetails', params: { id: eventsEntry.id }}">
          <h2 @click.self="showDetail('Wave')">{{ eventsEntry.title }}</h2>
        </router-link>
        <router-link :to="{ name: 'Category' }">
          <div v-for="category in eventsEntry.categories" :key="category.id"  class="event-categorie">
            <h3>Category: <span>{{ category.title }}</span></h3> 	
          </div>
        </router-link>
        <div v-for="source in eventsEntry.sources" :key="source.id" class="event-source">
          <h3>Source of information:</h3>
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
import Events from '../../types/Events'

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
  emits: ['handleWorldClick'],
  setup(props, context) {
    const sorting = computed(() => {
      return [...props.eonet_event.events].sort((a: Events, b: Events) => {
        let fa = a.categories.filter(c => {c.id.includes(props.sortTerm)}),
        fb = b.categories.filter(d => d.id.includes(props.sortTerm))
        return fa < fb ? 1 : -1
      })
    })

    const showDetail = (value: string) => {
      context.emit('handleWorldClick', value)
    }
    
    return { 
      sorting,
      showDetail
    }
  }

})
</script>

<style>
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.event-list h2 {
	margin: 0 0 10px;
	text-transform: capitalize;
	color: #2295b4;
  cursor: pointer;
}
.event-list h3 {
	color: #2c3e50;
  cursor: pointer;
}
.event-list a {
  text-decoration: none;
}
.event-categorie {
	display: flex;
}
.event-categorie h3 span {
  color: #5e17d1;
}
.event-source {
	display: flex;
  flex-direction: column;
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

