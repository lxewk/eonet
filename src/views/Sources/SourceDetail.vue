<template>
	<div v-if="error" class="error">{{ error }}</div>
	<div v-if="eonet_source.sources.length" class="src-detail">
		<ul v-for="sourceEntry in eonet_source.sources" :key="sourceEntry.id">
			<li v-if="sourceEntry.id === source_id">
				<a :href="sourceEntry.source">{{ sourceEntry.title }}</a>
			</li>
		</ul>
	</div>
	<div v-else class="loading">Loading source...</div>  
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useUrlQuery from '../../composables/urlListener'
import Sources from '../../types/Sources'


type SourceItem = {
	title: string,
	description: string,
	link: string,
	sources: Sources[]
}

const defaultPlaceholder = {
	title: "",
	description: "",
	link: "",
	sources: []
} as SourceItem

export default defineComponent({
	props: [ 'source_id'],  
	setup() {
		const { result: eonet_source, reload, isLoading, error } = 
      useUrlQuery('https://eonet.sci.gsfc.nasa.gov/api/v3/sources', defaultPlaceholder)

		reload()

		return {
			eonet_source,
			reload,
			isLoading,
			error,
		}	
	}	
})
</script>




