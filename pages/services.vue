<template>
	<div class="w-full m-auto relative bg-[#1A1A1A] overflow-hidden">
		<!-- initial section -->

		<section
			class="h-[620px] relative z-0 bg-[#E8ECF0] text-[#232323] overflow-hidden"
		>
			<img
				ref="bgRef"
				:class="{ slowAppearing: isBgVisible }"
				src="/icons/bg-sant-avto.png"
				class="absolute top-[170px] left-0 z-0"
				alt=""
			/>
			<img
				ref="carRef"
				:class="{ animateSlideInRight: isCarVisible }"
				src="/icons/bg-service.png"
				class="absolute top-[250px] right-[100px] z-0"
				alt=""
			/>

			<div
				class="flex justify-between max-w-[1600px] w-full m-auto pt-[150px] z-10 relative"
			>
				<!-- quotient -->
				<div
					ref="quotientRef"
					:class="{ animateSlideInLeft: isQuotientVisible }"
					class="flex flex-col gap-[15px] text-[#232323] w-[720px] text-[95px]/[100%] font-bold"
				>
					<h1
						v-for="(text, index) in offeringQuotien"
						class="pl-[80px]"
						:class="[
							{ 'border-l-3 border-[#E67009]': index === 0 },
						]"
					>
						{{ text }}
					</h1>
				</div>

				<div
					ref="asideTextRef"
					:class="{ animateSlideInRight: isAsideTextVisible }"
					class="asideText text-3xl pb-[40px] mr-40px pr-[40px] border-r-3 border-[#E67009] font-medium w-[220px]"
				>
					Список всіх послуг
				</div>
			</div>
		</section>

		<section class="relative z-50 text-white py-[160px]">
			<div
				class="containerServices flex flex-wrap justify-center w-full max-w-[1540px] m-auto"
			>
				<div
					v-for="(service, index) in servicesDetailList"
					class="w-[770px] h-[350px]"
					:class="{
						'mt-12': index > 1 && isLargeScreen,
						animateSlideInLeft:
							index % 2 === 0 && isVisibleList[index].value,
						animateSlideInRight:
							index % 2 === 1 && isVisibleList[index].value,
					}"
					:ref="el => (elRefs[index].value = el)"
				>
					<ServiceDetailType :service="service" />
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import ServiceDetailType from '~/entities/service/ui/ServiceDetailType.vue'
import { servicesDetailList } from '~/entities/service/config/serviceDetailTypeConfig'
import { useMediaQuery } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 1545px)')

import { useVisibility } from '#imports'

const offeringQuotien: string[] = ['Що ми', ' пропонуємо:']

const quotientRef = ref<HTMLElement | null>(null)
const isQuotientVisible = useVisibility(quotientRef)

const carRef = ref<HTMLElement | null>(null)

const isCarVisible = useVisibility(carRef)
const asideTextRef = ref<HTMLElement | null>(null)
const isAsideTextVisible = useVisibility(asideTextRef)

const bgRef = ref<HTMLElement | null>(null)
const isBgVisible = useVisibility(bgRef)
// 1) Масив рефів на елементи
const elRefs = servicesDetailList.map(() => ref<HTMLElement | null>(null))

// 2) Масив булевих видимостей
const isVisibleList = elRefs.map(elRef =>
	useVisibility(elRef, { threshold: 0 }, true)
)
</script>

<style scoped>
@media screen and (max-width: 1545px) {
	.containerServices {
		gap: 20px;
	}
}
/* Планшеты (1024px и менее) */
@media (max-width: 1024px) {
	.h-\[620px\] {
		height: 500px;
	}

	.pt-\[150px\] {
		padding-top: 100px;
	}

	.text-\[95px\]\/\[100\%\] {
		font-size: 70px;
		line-height: 100%;
	}

	.w-\[720px\] {
		width: 600px;
	}

	.pl-\[80px\] {
		padding-left: 60px;
	}

	.text-3xl {
		font-size: 1.5rem;
	}

	.w-\[220px\] {
		width: 180px;
	}

	.py-\[160px\] {
		padding-top: 100px;
		padding-bottom: 100px;
	}
}

/* Малые планшеты (768px и менее) */
@media (max-width: 768px) {
	.asideText {
		margin-top: 40px;
		padding-left: 40px !important;
	}
	.containerServices {
		gap: 20px !important;
	}
	.h-\[620px\] {
		height: 400px;
	}

	.pt-\[150px\] {
		padding-top: 60px;
	}

	.flex.justify-between {
		flex-direction: column;
	}

	.text-\[95px\]\/\[100\%\] {
		font-size: 48px;
		line-height: 100%;
	}

	.w-\[720px\] {
		width: 100%;
	}

	.pl-\[80px\] {
		padding-left: 40px;
	}

	.text-3xl {
		font-size: 1.25rem;
	}

	.w-\[220px\] {
		width: 100%;
		border-right: none;
		border-left: 3px solid #e67009;
		padding-left: 20px;
		padding-right: 0;
		margin-right: 0;
	}

	.py-\[160px\] {
		padding-top: 60px;
		padding-bottom: 60px;
	}

	.max-w-\[1540px\] {
		padding: 0 20px;
	}

	.w-\[770px\] {
		width: 100%;
		max-width: none;
		/* margin: 0 10px; */
	}

	.h-\[350px\] {
		height: auto;
		min-height: 280px;
	}
}

/* Мобильные устройства (480px и менее) */
@media (max-width: 480px) {
	.asideText {
		margin-top: 40px;
		padding-left: 20px !important;
	}
	.h-\[620px\] {
		height: 350px;
	}

	.pt-\[150px\] {
		padding-top: 40px;
	}

	.text-\[95px\]\/\[100\%\] {
		font-size: 36px;
		line-height: 100%;
	}

	.pl-\[80px\] {
		padding-left: 20px;
	}

	.gap-\[15px\] {
		gap: 10px;
	}

	.text-3xl {
		font-size: 1.125rem;
	}

	.py-\[160px\] {
		padding-top: 40px;
		padding-bottom: 40px;
	}

	.max-w-\[1540px\] {
		padding: 0 15px;
	}

	/* Скрытие фоновых изображений на мобильных */
	img[src='/icons/bg-sant-avto.png'],
	img[src='/icons/bg-service.png'] {
		display: none;
	}
}
</style>
