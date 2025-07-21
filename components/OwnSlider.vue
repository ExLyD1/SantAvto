<template>
	<div class="w-full max-w-7xl mx-auto">
		<!-- Slider container with arrows -->
		<div class="sliderContainer relative px-16 xl:px-20">
			<!-- Desktop navigation arrows (positioned outside) -->
			<button
				@click="previousSlide"
				:disabled="currentIndex === 0"
				:aria-label="'Previous review'"
				class="asideButton absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-lg disabled:hover:text-gray-600"
			>
				<svg
					class="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
			</button>

			<button
				@click="nextSlide"
				:disabled="isAtEnd"
				:aria-label="'Next review'"
				class="asideButton absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-lg disabled:hover:text-gray-600"
			>
				<svg
					class="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5l7 7-7 7"
					/>
				</svg>
			</button>

			<!-- Slider viewport -->
			<div
				class="overflow-hidden"
				@keydown="handleKeydown"
				tabindex="0"
				role="region"
				aria-label="Customer reviews slider"
			>
				<div
					class="reviewsSlidesContainer flex transition-transform duration-500 ease-in-out gap-4"
					:style="{ transform: `translateX(-${translateX}%)` }"
				>
					<div
						v-for="(review, index) in reviews"
						:key="index"
						class="flex-shrink-0 slider-item"
						:aria-hidden="!isSlideVisible(index)"
					>
						<ReviewCard :review="review" />
					</div>
				</div>
			</div>
		</div>

		<!-- Mobile navigation (below slider) -->
		<div class="lg:hidden flex justify-center items-center mt-8 space-x-6">
			<button
				@click="previousSlide"
				:disabled="currentIndex === 0"
				:aria-label="'Previous review'"
				class="flex w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-lg disabled:hover:text-gray-600"
			>
				<svg
					class="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
			</button>

			<!-- Current slide indicator -->
			<div
				class="flex items-center space-x-2 text-sm text-gray-600 font-medium min-w-0"
			>
				<span>{{ currentPage + 1 }}</span>
				<span class="text-gray-400">of</span>
				<span>{{ totalPages }}</span>
			</div>

			<button
				@click="nextSlide"
				:disabled="isAtEnd"
				:aria-label="'Next review'"
				class="flex w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-lg disabled:hover:text-gray-600"
			>
				<svg
					class="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5l7 7-7 7"
					/>
				</svg>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { IReview } from '~/entities/reviews/config/reviewConfig'
import ReviewCard from '~/entities/reviews/ui/ReviewCard.vue'

interface Props {
	reviews: IReview[]
}

const props = defineProps<Props>()

const currentIndex = ref(0)
const slidesPerView = ref(1)

// Responsive breakpoint detection
const updateSlidesPerView = (): void => {
	const width = window.innerWidth
	if (width >= 1600) {
		slidesPerView.value = 3 // Desktop: 3 slides
	} else if (width >= 1024) {
		slidesPerView.value = 2 // Tablet: 2 slides
	} else {
		slidesPerView.value = 1 // Mobile: 1 slide
	}

	// Adjust current index if needed
	const maxIndex = Math.max(0, props.reviews.length - slidesPerView.value)
	if (currentIndex.value > maxIndex) {
		currentIndex.value = maxIndex
	}
}

// Computed properties
const totalPages = computed(() => {
	return Math.ceil(props.reviews.length / slidesPerView.value)
})

const currentPage = computed(() => {
	return Math.floor(currentIndex.value / slidesPerView.value)
})

const translateX = computed(() => {
	const slideWidth = 100 / slidesPerView.value
	return currentIndex.value * slideWidth
})

const isAtEnd = computed(() => {
	return currentIndex.value >= props.reviews.length - slidesPerView.value
})

// Navigation methods
const nextSlide = (): void => {
	const maxIndex = props.reviews.length - slidesPerView.value
	if (currentIndex.value < maxIndex) {
		currentIndex.value = Math.min(
			currentIndex.value + slidesPerView.value,
			maxIndex
		)
	}
}

const previousSlide = (): void => {
	if (currentIndex.value > 0) {
		currentIndex.value = Math.max(
			currentIndex.value - slidesPerView.value,
			0
		)
	}
}

const goToPage = (pageIndex: number): void => {
	currentIndex.value = pageIndex * slidesPerView.value
}

const isSlideVisible = (index: number): boolean => {
	return (
		index >= currentIndex.value &&
		index < currentIndex.value + slidesPerView.value
	)
}

const handleKeydown = (event: KeyboardEvent): void => {
	switch (event.key) {
		case 'ArrowLeft':
			event.preventDefault()
			previousSlide()
			break
		case 'ArrowRight':
			event.preventDefault()
			nextSlide()
			break
		case 'Home':
			event.preventDefault()
			currentIndex.value = 0
			break
		case 'End':
			event.preventDefault()
			currentIndex.value = Math.max(
				0,
				props.reviews.length - slidesPerView.value
			)
			break
	}
}

// Lifecycle hooks
onMounted(() => {
	updateSlidesPerView()
	window.addEventListener('resize', updateSlidesPerView)
})

onUnmounted(() => {
	window.removeEventListener('resize', updateSlidesPerView)
})
</script>

<style scoped>
/* Responsive slider item widths */
.slider-item {
	width: 100%; /* Mobile: 1 slide (100%) */
}

@media (min-width: 1024px) {
	.slider-item {
		width: calc(50% - 8px); /* Tablet: 2 slides (50% each with gap) */
	}
}

@media (min-width: 1600px) {
	.slider-item {
		width: calc(
			33.333% - 10.667px
		); /* Desktop: 3 slides (33.33% each with gap) */
	}
}

/* Smooth transitions for responsive changes */
@media (prefers-reduced-motion: no-preference) {
	.slider-item {
		transition: width 0.3s ease-in-out;
	}
}

/* Touch-friendly sizing for mobile */
@media (max-width: 1023px) {
	button {
		min-width: 44px;
		min-height: 44px;
	}

	.asideButton {
		display: none;
	}

	.sliderContainer {
		padding: 0px;
	}

	.reviewsSlidesContainer {
		gap: 0px;
	}
}

/* @media screen and (max-width: 385px) {
	.reviewContainer {
		max-width: 350px;
		width: 100%;
	}
} */
</style>
