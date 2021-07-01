<template>
	<div class="category">
		<div v-if="error" class="error">{{ error }}</div>
		<div v-if="neonet_category.categories.length">
      <CategoryList :neonet_category="neonet_category" />
    </div>
    <div v-else class="loading">Loading...</div>
	</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import CategoryList from '../components/CategoryList.vue'
import useUrlQuery from '../composables/urlListener'
import Categories from '../types/Categories'

type CategoryItem = {
	title: string,
	description: string,
	link: string,
	categories: Categories[]
}

const defaultPlaceholder = {
	title: "default",
	description: "",
	link: "",
	categories: []
} as CategoryItem

export default defineComponent({
	name: 'Category',
	components: { CategoryList },
	setup() {
		const { result: neonet_category, reload, isLoading, error } = useUrlQuery('https://eonet.sci.gsfc.nasa.gov/api/v3/categories', defaultPlaceholder)

		reload()

		return {
			neonet_category,
			reload,
			isLoading,
			error,
		}
	}
})
</script>

<style scoped>
	.loading {
    display: center;
    text-align: center;
    font-weight: bolder;
    color: #2c3e50;
  }
  .error {
    display: center;
    text-align: center;
    font-weight: bolder;
    color: #2c3e50;
  }

</style>
