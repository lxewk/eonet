<template>
	<div class="category-list">
		<ul>
			<li v-for="categoryEntry in neonet_category.categories" :key="categoryEntry.id">
				<h1>{{ categoryEntry.title }}</h1>
				<div class="category-description">
          <h3>Description *</h3>
					<p>{{ categoryEntry.description }}</p>
				</div>			
			</li>
		</ul>
	</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: ['neonet_category'],
})
</script>

<style scoped>
.category-list {
	max-width: 960px;
	margin: 40px auto;
}
.category-list ul {
	padding: 0;
}
.category-list li {
	list-style-type: none;
	background: white;
	padding: 16px;
	margin: 16px;
	border-radius: 4px;
}
.category-list h1 {
	margin: 0 0 10px;
	text-transform: capitalize;
	color: #39bf78;
}
.category-description {
	display: flex;
  flex-direction: column;
	color: #2c3e50;
}

</style>

// The curation of events is a significant component of the EONET system,
//  and while the technical details are, to an extent, straight forward, 
// the definition of what exactly constitutes an event is fluid and daring us to be constrained.