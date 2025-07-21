export function useVisibility(
	elRef: any,
	options = { threshold: 0 },
	isAutoChange: boolean = false
) {
	const isVisible = ref(false)
	let observer: IntersectionObserver

	onMounted(() => {
		observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				isVisible.value = true
				if (elRef.value && !isAutoChange)
					observer.unobserve(elRef.value)
			} else if (isAutoChange && !entry.isIntersecting) {
				isVisible.value = false
			}
		})

		if (elRef.value) observer.observe(elRef.value)
	})

	onUnmounted(() => {
		if (elRef.value) observer.unobserve(elRef.value)
	})

	return isVisible
}
