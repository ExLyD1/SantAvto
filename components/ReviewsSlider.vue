<template>
	<div class="reviews-slider">
		<div class="slider-container">
			<div class="swiper" ref="swiperContainer">
				<div class="swiper-wrapper">
					<div
						v-for="(review, index) in reviews"
						:key="index"
						class="swiper-slide"
					>
						<ReviewCard
							:review="review"
							class="review-card-slide"
						/>
					</div>
				</div>

				<!-- Navigation arrows -->
				<div
					class="swiper-button-prev slider-nav-prev"
					aria-label="Previous slide"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M15 18L9 12L15 6"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
				<div
					class="swiper-button-next slider-nav-next"
					aria-label="Next slide"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9 6L15 12L9 18"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>

				<!-- Pagination dots -->
				<div class="swiper-pagination slider-pagination"></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IReview } from '~/entities/reviews/config/reviewConfig'

import ReviewCard from '~/entities/reviews/ui/ReviewCard.vue'
// 1) Core (з дефолтного експорту)
import SwiperCore from 'swiper'

// 2) Модулі — саме так, із 'swiper/modules'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules' // :contentReference[oaicite:0]{index=0}

// 3) Vue‑компоненти для шаблону
import Swiper from 'swiper/bundle'

// стилі
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/a11y'

// 4) Реєструємо модулі
SwiperCore.use([Navigation, Pagination, Autoplay, A11y])

interface Props {
	reviews: IReview[]
	autoplay?: boolean
	autoplayDelay?: number
	loop?: boolean
	spaceBetween?: number
}

const props = withDefaults(defineProps<Props>(), {
	autoplay: true,
	autoplayDelay: 4000,
	loop: true,
	spaceBetween: 24,
})

const swiperContainer = ref<HTMLElement | null>(null)
let swiperInstance: any | null = null

onMounted(() => {
	if (swiperContainer.value) {
		try {
			swiperInstance = new Swiper(swiperContainer.value, {
				// Responsive breakpoints
				slidesPerView: 1,
				spaceBetween: props.spaceBetween,
				breakpoints: {
					// Mobile: 1 slide
					320: {
						slidesPerView: 1,
						spaceBetween: 16,
					},
					// Tablet: 2 slides
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					// Desktop: 2 slides
					1024: {
						slidesPerView: 2,
						spaceBetween: props.spaceBetween,
					},
				},

				// Navigation
				navigation: {
					nextEl: '.slider-nav-next',
					prevEl: '.slider-nav-prev',
				},

				// Pagination
				pagination: {
					el: '.slider-pagination',
					clickable: true,
					dynamicBullets: true,
					dynamicMainBullets: 3,
				},

				// Autoplay
				autoplay: props.autoplay
					? {
							delay: props.autoplayDelay,
							disableOnInteraction: false,
							pauseOnMouseEnter: true,
					  }
					: false,

				// Loop
				loop: props.loop && props.reviews.length > 2,

				// Accessibility
				a11y: {
					enabled: true,
					prevSlideMessage: 'Previous slide',
					nextSlideMessage: 'Next slide',
					firstSlideMessage: 'This is the first slide',
					lastSlideMessage: 'This is the last slide',
					paginationBulletMessage: 'Go to slide {{index}}',
				},

				// Touch and mouse
				touchRatio: 1,
				touchAngle: 45,
				grabCursor: true,

				// Performance
				watchOverflow: true,
				observer: true,
				observeParents: true,

				// Smooth transitions
				speed: 600,
				effect: 'slide',

				// Keyboard navigation
				keyboard: {
					enabled: true,
					onlyInViewport: true,
				},

				// Error handling
				on: {
					init: function () {
						console.log('Reviews slider initialized successfully')
					},
					slideChange: function () {
						// Optional: Add analytics or custom logic here
					},
					reachEnd: function () {
						// Optional: Handle end of slides
					},
				},
			})
		} catch (error) {
			console.error('Failed to initialize reviews slider:', error)
		}
	}
})

onUnmounted(() => {
	if (swiperInstance) {
		swiperInstance.destroy(true, true)
		swiperInstance = null
	}
})

// Expose methods for parent component control
defineExpose({
	slideNext: () => swiperInstance?.slideNext(),
	slidePrev: () => swiperInstance?.slidePrev(),
	slideTo: (index: number) => swiperInstance?.slideTo(index),
	autoplayStart: () => swiperInstance?.autoplay?.start(),
	autoplayStop: () => swiperInstance?.autoplay?.stop(),
})
</script>

<style scoped>
.reviews-slider {
	width: 100%;
	position: relative;
	padding: 20px 0;
}

.slider-container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
	position: relative;
}

.swiper {
	width: 100%;
	height: auto;
	overflow: hidden;
	border-radius: 12px;
	padding-bottom: 60px;
	position: relative;
}

.swiper-wrapper {
	display: flex;
	align-items: stretch;
}

.swiper-slide {
	height: auto;
	display: flex;
	align-items: stretch;
}

.review-card-slide {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}

/* Navigation Arrows */
.swiper-button-prev,
.swiper-button-next {
	width: 48px;
	height: 48px;
	background: rgba(255, 255, 255, 0.95);
	border-radius: 50%;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	color: #333;
	transition: all 0.3s ease;
	backdrop-filter: blur(10px);
	border: 1px solid rgba(255, 255, 255, 0.2);
	z-index: 10;
}

/* Desktop and large tablet positioning - prevent overlap with content */
@media (min-width: 768px) {
	.swiper-button-prev,
	.swiper-button-next {
		top: 50%;
		margin-top: -24px;
	}

	.swiper-button-prev {
		left: -60px;
	}

	.swiper-button-next {
		right: -60px;
	}

	/* For medium screens (800-1100px) - position arrows outside content area */
	@media (min-width: 800px) and (max-width: 1100px) {
		.slider-container {
			padding: 0 80px;
		}

		.swiper-button-prev {
			left: 20px;
		}

		.swiper-button-next {
			right: 20px;
		}
	}
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
	background: rgba(255, 255, 255, 1);
	transform: scale(1.05);
	box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.swiper-button-prev:after,
.swiper-button-next:after {
	display: none;
}

.swiper-button-prev svg,
.swiper-button-next svg {
	width: 20px;
	height: 20px;
}

.swiper-button-disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

.swiper-button-disabled:hover {
	transform: none;
}

/* Pagination */
.swiper-pagination {
	position: absolute;
	bottom: 20px;
	left: 0;
	right: 0;
	text-align: center;
	z-index: 10;
}

.swiper-pagination :deep(.swiper-pagination-bullet) {
	width: 12px;
	height: 12px;
	background: #d1d5db;
	opacity: 1;
	margin: 0 6px;
	transition: all 0.3s ease;
	cursor: pointer;
}

.swiper-pagination :deep(.swiper-pagination-bullet-active) {
	background: #e67009;
	transform: scale(1.2);
}

.swiper-pagination :deep(.swiper-pagination-bullet:hover) {
	background: #9ca3af;
	transform: scale(1.1);
}

/* Responsive Design */
@media (max-width: 767px) {
	.slider-container {
		padding: 0 16px;
	}

	.swiper {
		padding-bottom: 120px;
	}

	/* Mobile navigation - fixed at bottom-left under slider */
	.swiper-button-prev,
	.swiper-button-next {
		width: 40px;
		height: 40px;
		position: absolute;
		bottom: 60px;
		margin-top: 0;
		z-index: 15;
		top: 270px;
	}

	.swiper-button-prev svg,
	.swiper-button-next svg {
		width: 16px;
		height: 16px;
	}

	/* Position buttons at bottom-left, horizontally aligned */
	.swiper-button-prev {
		left: 150px;
	}

	.swiper-button-next {
		left: 210px;
	}

	/* Pagination positioned below navigation buttons */
	.swiper-pagination {
		bottom: 20px;
		text-align: left;
		padding-left: 20px;
	}

	.swiper-pagination :deep(.swiper-pagination-bullet) {
		width: 10px;
		height: 10px;
		margin: 0 4px;
	}
}

@media (max-width: 479px) {
	.slider-container {
		padding: 0 12px;
	}

	.swiper {
		padding-bottom: 110px;
	}

	/* Small mobile adjustments */
	.swiper-button-prev,
	.swiper-button-next {
		width: 36px;
		height: 36px;
		bottom: 55px;
	}

	.swiper-button-prev svg,
	.swiper-button-next svg {
		width: 14px;
		height: 14px;
	}

	.swiper-button-prev {
		left: 16px;
	}

	.swiper-button-next {
		left: 68px;
	}

	.swiper-pagination {
		padding-left: 16px;
	}
}

/* Tablet specific adjustments */
@media (min-width: 768px) and (max-width: 1023px) {
	.slider-container {
		padding: 0 80px;
	}

	.swiper-button-prev,
	.swiper-button-next {
		width: 44px;
		height: 44px;
		top: 50%;
		margin-top: -22px;
	}

	.swiper-button-prev svg,
	.swiper-button-next svg {
		width: 18px;
		height: 18px;
	}

	.swiper-button-prev {
		left: 20px;
	}

	.swiper-button-next {
		right: 20px;
	}

	.swiper-pagination {
		position: relative;
		bottom: auto;
		margin-top: 24px;
		text-align: center;
		padding-left: 0;
	}
}

/* Loading state */
.swiper-container-loading {
	opacity: 0.7;
}

/* Focus styles for accessibility */
.swiper-button-prev:focus,
.swiper-button-next:focus,
.swiper-pagination :deep(.swiper-pagination-bullet:focus) {
	outline: 2px solid #e67009;
	outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
	.swiper-button-prev,
	.swiper-button-next {
		background: white;
		border: 2px solid black;
		color: black;
	}

	.swiper-pagination :deep(.swiper-pagination-bullet) {
		border: 1px solid black;
	}
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
	.swiper-button-prev,
	.swiper-button-next,
	.swiper-pagination :deep(.swiper-pagination-bullet) {
		transition: none;
	}

	.swiper-button-prev:hover,
	.swiper-button-next:hover {
		transform: none;
	}
}
</style>
