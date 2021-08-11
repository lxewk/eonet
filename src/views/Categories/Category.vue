<template>
	<div class="category">
    <header>
      <div class="introduction">
        <p>
          The curation of events is a significant component of the EONET system, and while the technical details are, to an extent, straight forward, the definition of what exactly constitutes an event is fluid and dares EONET to be constrained.
        </p>
        <p>
          What are the contextual parameters of an event? What if one curator defines a specific wildfire in Idaho as a discrete event and another defines the summer wildfire season in the Pacific Northwest as a single event.
        </p>
        <p>
          The developers of EONET are still thinking about these issues and how to best represent them within EONET. If you have ideas or suggestions, <a href="https://eonet.sci.gsfc.nasa.gov/contact">get in touch with EONET</a>
        </p>
      </div>
    </header>
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

<style>
  .category {
    width: 100%;
    margin: 50px auto;
  }
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
    transition: all 0.6s ease;
  }

</style>
