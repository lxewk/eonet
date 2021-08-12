<template>
	<div class="source">
    <header id="source-header">
      <div id="source-intro">
        <p>
          EONET make choices about the sources to use in EONET, and also they make decisions about what events from any one source are included in the system. Some of these choices are based on a desire to keep their feeds from getting overly congested, some are made based on a perceived ability to see the event with modern satellite remote sensing (one of EONET primary customers is NASA’s Worldview application). 
        </p>
        <p>
          EONET frequently re-evaluating their criteria and may occasionally reprocess a data source to improve their coverage. EONET should not be viewed as the ultimate collection of natural event metadata but EONET does strive to include as much as their time and effort permits.
        </p>
      </div>
    </header>
		<div v-if="error" class="error">{{ error }}</div>
    <div v-if="eonet_source.sources.length" class="src-detail">
      <transition-group tag="ul" name="sourceList" appear>
        <li v-for="sourcesEntry in eonet_source.sources" :key="sourcesEntry.id">
          <a :href="sourcesEntry.source">{{ sourcesEntry.title }}</a>
        </li>
      </transition-group>
    </div>
		<div v-else class="loading">Loading...</div>
	</div>    
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
	name: 'Source',
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

<style>
  .source {
    width: 90%;
    margin: 50px auto;
  }
  #source-intro {
    line-height: 1.4;
  }
  .source .src-detail a {
		color: #5e17d1;
		text-decoration: none;
	}
  .source .src-detail a:hover {
    color:#4505ac;
    font-weight: bold;
  }
  .source .src-detail li {
    padding: 8px;
  }

  /* sourceList transition */
  .sourceList-enter-from {
    opacity: 0;
    transform: scale(0.6);
  }
  .sourceList-enter-to {
    opacity: 1;
    transform: scale(1);
  }
  .sourceList-enter-active {
    transition: all 0.8s ease;
  }

  @media (max-width: 600px) {
    #source-header {
      height: 500px;
    }
  }
</style>