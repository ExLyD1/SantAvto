<template>
	<!-- Responsive review card: mobile-first approach -->
	<div
		class="w-full max-w-[350px] sm:max-w-[380px] lg:max-w-[400px] h-[240px] sm:h-[260px] lg:h-[250px] bg-white p-4 sm:p-5 flex flex-col gap-2 mx-auto"
	>
		<!-- review info - responsive layout -->
		<div class="flex items-center justify-between">
			<!-- author info - responsive sizing -->
			<div class="flex items-center gap-2">
				<NuxtImg
					:src="review.authorImg"
					:lazy="false"
					loading="eager"
					format="svg"
					alt="review-author-img"
					class="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full object-cover"
				/>

				<h1
					class="text-base sm:text-lg lg:text-xl text-[#232323] font-semibold"
				>
					{{ review.authorName }}
				</h1>
			</div>

			<!-- rate - responsive star sizing -->
			<div class="flex items-center justify-end gap-[1px]">
				<svg
					v-for="i in review.rate"
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					class="sm:w-6 sm:h-6"
					viewBox="0 0 24 24"
					fill="#E67009"
				>
					<path
						d="M12 2l2.92 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.08-1.01z"
					/>
				</svg>
			</div>
		</div>

		<!-- separator - responsive width -->
		<div
			class="border-b-2 border-[#E67009] w-[120px] sm:w-[140px] lg:w-[150px]"
		></div>

		<!-- text - responsive sizing and line height -->
		<div
			class="text-[rgba(0,0,0,0.8)] text-[15px] leading-relaxed overflow-hidden"
		>
			{{ review.text }}
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IReview } from '../config/reviewConfig'

defineProps<{ review: IReview }>()
</script>

<style scoped></style>
