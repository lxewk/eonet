<template>
	<div class="category-list">
		<ul>
			<li v-for="categoryEntry in neonet_category.categories" :key="categoryEntry.id">
				<h1>{{ categoryEntry.title }}</h1>
				<div class="category-description">
          <h3>Description</h3>
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.category-list h1 {
	margin: 0 0 10px;
	text-transform: capitalize;
	color: #2295b4;
}
.category-description {
	display: flex;
  flex-direction: column;
	color: #2c3e50;
}

</style>
