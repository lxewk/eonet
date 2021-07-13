<template>
	<div class="event-list">
    <p>Sort by {{ sortTerm }}</p>
		<ul>
      <li v-for="eventsEntry in neonet_event.events" :key="eventsEntry.id">
        <router-link :to="{ name: 'EventDetail', params: { id: eventsEntry.id }}">
          <h2>{{ eventsEntry.title }}</h2>
        </router-link>
        <router-link :to="{ name: 'Category' }">
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
import { computed, defineComponent, PropType, ref } from 'vue'
import SourceDetails from '../Sources/SourceDetails.vue'
import Event from '../../types/Event'
import CategoryTerm from '../../types/CategoryTerm'
import Category from '../../types/Category'

export default defineComponent({
	props: {
    neonet_event: {
      required: true,
      type: Object as PropType<Event>
    },
    sortTerm: {
      required: true,
      type: String as PropType<CategoryTerm>
    },
  },
	components: { SourceDetails },
  setup(props) {
    const categoryObj = ref<Category[]>([])
    
    props.neonet_event.events.map(category => 
      category.categories.map(title => {
        categoryObj.value.push({
          id: title.id,
          title: title.title
        })
      })
    )
    console.log(categoryObj)
    
    // the value of the title should be compared to sortTerm
    const sortedTitle = computed(() => {
      return [...categoryObj.value].sort((a: Category, b: Category) => {
        return a[props.sortTerm] > b[props.sortTerm] ? 1 : -1
      })
                    
    })
    
    
    return { sortedTitle }
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
.list-move {
  transition: all 1s;
}


</style>