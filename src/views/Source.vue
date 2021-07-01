<template>
	<div class="source-list">
		<div v-if="error" class="error">{{ error }}</div>
		<ul v-if="neonet_source.sources.length">
			<li v-for="sourcesEntry in neonet_source.sources" :key="sourcesEntry.id">
				<a :href="sourcesEntry.source">{{ sourcesEntry.title }}</a>
			</li>
		</ul>
		<div v-else class="loading">Loading...</div>
	</div>    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useUrlQuery from '../composables/urlListener'
import Sources from '../types/Sources'

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
	name: 'Source',
	setup() {
		const { result: neonet_source, reload, isLoading, error } = useUrlQuery('https://eonet.sci.gsfc.nasa.gov/api/v3/sources', defaultPlaceholder)
		console.log(neonet_source)
		reload()

		return {
			neonet_source,
			reload,
			isLoading,
			error,
		}	
	}	
})
</script>