<template>
	<div
		class="serviceCard flex flex-col lg:flex-row gap-6 lg:gap-10 w-full max-w-[790px] mx-auto"
	>
		<!-- service img -->
		<NuxtImg
			:src="service.imgUrl"
			alt="service-variation-img"
			class="serviceImg w-full lg:w-[360px] h-auto lg:h-[480px] object-cover flex-shrink-0"
			:lazy="false"
			format="png"
			loading="eager"
			priority
			width="360"
			height="480"
		/>

		<div class="serviceCardText flex-1 flex flex-col">
			<!-- title -->
			<h1 class="text-[#E8ECF0] text-2xl md:text-3xl lg:text-4xl">
				{{ service.title }}
			</h1>

			<!-- description -->
			<p
				class="mt-4 md:mt-6 text-[14px] md:text-[16px] text-[rgba(232,236,240,0.6)] leading-relaxed"
			>
				{{ service.description }}
			</p>

			<!-- more button -->
			<NuxtLink
				:to="service.moreLink"
				class="detailButton text-[#E8ECF0] w-fit mt-5 font-medium pb-1 border-b border-[#E67009] lg:pl-[100px] lg:ml-[-100px] bottom-[50px] lg:absolute cursor-pointer"
			>
				Детальніше
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IServiceVariation } from '../config/serviceConfig'

defineProps<{
	service: IServiceVariation
}>()
</script>

<style scoped>
/* Нічого не потрібно — все через Tailwind */
</style>
