<template>
	<div class="category">
    <transition name="switch" mode="out-in" appear>
      <div v-if="error" class="error">{{ error }}</div>
      <div v-else-if="neonet_category.categories.length">
        <CategoryList :neonet_category="neonet_category" />
      </div>
      <div v-else class="loading">Loading...</div>
    </transition>
	</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import CategoryList from './CategoryList.vue'
import useUrlQuery from '../../composables/urlListener'
import Categories from '../../types/Categories'

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
  .switch-enter-from,
  .switch-enter-to {
    opacity: 0;
    transform: translateY(20px)
  }
  .switch-enter-to,
  .switch-leave-from {
    opacity: 1;
    transform: translateY(0)
  }
  .switch-enter-active,
  .switch-leave-active {
    transition: all 0.5s ease;
  }

</style>
