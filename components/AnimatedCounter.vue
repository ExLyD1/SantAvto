<template>
	<div ref="counterRef" class="flex text-5xl lg:text-7xl">
		<span>{{ displayNumber }}</span>
		<span class="text-[rgba(255,255,255,0.5)]">+</span>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
	targetNumber: number
}>()

const displayNumber = ref(0)
const counterRef = ref(null)

const animateCount = () => {
	let start: any = null
	const duration = 1000 // 1 секунда

	const step = (timestamp: any) => {
		if (!start) start = timestamp
		const progress = timestamp - start
		const progressRatio = Math.min(progress / duration, 1)
		displayNumber.value = Math.floor(progressRatio * props.targetNumber)
		if (progress < duration) {
			requestAnimationFrame(step)
		} else {
			displayNumber.value = props.targetNumber
		}
	}

	requestAnimationFrame(step)
}

onMounted(() => {
	const observer = new IntersectionObserver(
		entries => {
			if (entries[0].isIntersecting) {
				animateCount()
				observer.disconnect()
			}
		},
		{ threshold: 0.5 }
	)

	if (counterRef.value) {
		observer.observe(counterRef.value)
	}
})
</script>
