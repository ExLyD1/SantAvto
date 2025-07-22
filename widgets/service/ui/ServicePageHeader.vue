<template>
	<section
		class="h-[620px] relative z-0 bg-[#E8ECF0] text-[#232323] overflow-hidden allConentContainer"
	>
		<img
			ref="bgRef"
			:class="{ slowAppearing: isBgVisible }"
			src="/public/icons/bg-sant-avto.png"
			class="bgImage absolute top-[170px] left-0 z-0"
			alt="bg-santavot-image"
			fetchpriority="high"
			loading="eager"
		/>

		<div
			class="flex gap-8 max-w-[1600px] w-full m-auto pt-[150px] z-10 relative"
		>
			<!-- quotient -->
			<div
				ref="portfolioQuotientRef"
				:class="{ animateSlideInLeft: isPortfolioQuotientVisible }"
				class="flex flex-col gap-[15px] text-[#232323] w-[720px] text-[65px]/[100%] font-bold [font-family:'Raleway',sans-serif]"
			>
				<h1
					v-for="(text, index) in quotientArr"
					class="pl-[80px]"
					:class="[{ 'border-l-3 border-[#E67009]': index === 0 }]"
				>
					{{ text }}
				</h1>
			</div>

			<div
				ref="asideTextRef"
				:class="{ animateSlideInRight: isAsideTextVisible }"
				class="flex flex-col gap-14 w-[650px] pr-5"
			>
				<h1 class="text-[rgba(35,35,35,0.7)] text-2xl">
					{{ description }}
				</h1>

				<div class="flex items-center gap-20">
					<a href="#price"
						><FilledButton
							class="w-[249px] h-[80px]"
							:label="'Дізнатися ціну'"
						></FilledButton
					></a>

					<div class="flex flex-col">
						<div class="text-black">Сервіс:</div>
						<div class="text-[#E67009]">
							<a
								href="https://www.google.com/maps/place/вулиця+Тепловозна,+1,+Київ,+02000/@50.4253765,30.6301958,21z/data=!4m6!3m5!1s0x40d4c5131d7ca879:0x6fa48028f40f9c8d!8m2!3d50.4253459!4d30.6301327!16s%2Fg%2F11sv87yndt?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D"
								target="_blank"
								>м. Київ, вул. Тепловозна 1</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
defineProps<{
	quotientArr: string[]
	description: string
}>()
const portfolioQuotientRef = ref<HTMLElement | null>(null)
const isPortfolioQuotientVisible = useVisibility(portfolioQuotientRef, {
	threshold: 0.1,
})
const asideTextRef = ref<HTMLElement | null>(null)
const isAsideTextVisible = useVisibility(asideTextRef, {
	threshold: 0.1,
})
const bgRef = ref<HTMLElement | null>(null)
const isBgVisible = useVisibility(bgRef, {
	threshold: 0.1,
})
</script>

<style scoped>
/* Планшеты (1024px и менее) */
@media (max-width: 1024px) {
	.h-\[620px\] {
		height: 500px;
	}

	.pt-\[150px\] {
		padding-top: 100px;
	}

	.text-\[65px\]\/\[100\%\] {
		font-size: 50px;
		line-height: 100%;
	}

	.w-\[720px\] {
		width: 600px;
	}

	.w-\[650px\] {
		width: 550px;
	}

	.pl-\[80px\] {
		padding-left: 60px;
	}

	.gap-14 {
		gap: 2.5rem;
	}

	.w-\[249px\] {
		width: 200px;
	}

	.h-\[80px\] {
		height: 65px;
	}

	.gap-20 {
		gap: 3rem;
	}
}

/* Малые планшеты (768px и менее) */
@media (max-width: 768px) {
	.allConentContainer {
		padding-top: 50px;
	}
	.h-\[620px\] {
		height: 400px;
	}

	.pt-\[150px\] {
		padding-top: 60px;
	}

	.max-w-\[1600px\] {
		padding: 0 20px;
	}

	.flex.gap-8 {
		flex-direction: column;
		gap: 30px;
	}

	.text-\[65px\]\/\[100\%\] {
		font-size: 40px;
		line-height: 100%;
	}

	.w-\[720px\] {
		width: 100%;
	}

	.w-\[650px\] {
		width: 100%;
	}

	.pl-\[80px\] {
		padding-left: 40px;
	}

	.gap-14 {
		gap: 1.5rem;
	}

	.text-2xl {
		font-size: 1.25rem;
	}

	.flex.items-center.gap-20 {
		flex-direction: column;
		gap: 1.5rem;
		align-items: flex-start;
	}

	.h-\[80px\] {
		height: 60px;
	}

	/* Скрытие фонового изображения */
	img[src='/icons/bg-sant-avto.png'] {
		display: none;
	}
	.bgImage {
		display: none;
	}
}

/* Мобильные устройства (480px и менее) */
@media (max-width: 480px) {
	.h-\[620px\] {
		height: 350px;
	}

	.pt-\[150px\] {
		padding-top: 40px;
	}

	.max-w-\[1600px\] {
		padding: 0 15px;
	}

	.text-\[65px\]\/\[100\%\] {
		font-size: 32px;
		line-height: 100%;
	}

	.pl-\[80px\] {
		padding-left: 20px;
	}

	.gap-\[15px\] {
		gap: 10px;
	}

	.gap-14 {
		gap: 1rem;
	}

	.text-2xl {
		font-size: 1rem;
	}

	.h-\[80px\] {
		height: 50px;
	}

	.flex.items-center.gap-20 {
		gap: 1rem;
	}
}

@media screen and (max-width: 900px) {
	.allConentContainer {
		height: 600px;
	}
}
</style>
