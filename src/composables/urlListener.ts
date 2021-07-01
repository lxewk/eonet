import { isRef, Ref, watch, unref, ref, reactive, toRefs } from 'vue'

const useUrlQuery = <T, K = T | null>(
	url: string | Ref<string>,
	initial: K
	) => {
	const result = ref<K>(initial)
	const state = reactive({
		isLoading: false,
		error: null as any,
	})

	let controller: AbortController | null = null
	const reload = async () => {
		controller?.abort()
		state.isLoading = true
		try {
			controller = new AbortController()
			const res = await fetch(unref(url), {signal: controller.signal })
			result.value = await res.json()
			state.isLoading = false
		}
		catch (e) {
			if(e.name === "AbortError") {
				// request was aborted
				return
			}
			// will set error and disable 'isLoading' only if it wasn't aborted
			state.isLoading = false
			state.error = e
			console.log(e)
		}
	}

	if (isRef(url)) { // if url is reactive
		watch(url, reload)
	}	
	
	return { 
		...toRefs(state),
		result,
		reload,
	}
}

export default useUrlQuery