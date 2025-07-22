<template>
	<div
		class="w-full m-auto relative bg-[#1A1A1A] text-[#232323] z-10 overflow-hidden"
	>
		<!-- initial section -->
		<section
			v-cloak
			class="initialSectionPortfolio h-[620px] relative z-0 bg-[#E8ECF0] overflow-hidden"
		>
			<img
				src="/icons/bg-sant-avto.png"
				class="absolute top-[170px] left-0 z-0"
				alt=""
			/>
			<div
				class="max-w-[1600px] w-full m-auto pt-[150px] gap-[70px] flex flex-col z-10 relative"
			>
				<!-- quotient -->
				<div
					ref="portfolioQuotientRef"
					:class="{ animateSlideInLeft: isPortfolioQuotientVisible }"
					class="flex flex-col gap-[15px] text-[#232323] w-[720px] text-[75px]/[100%] font-bold"
				>
					<h1
						v-for="(text, index) in quotientArr"
						class="pl-[80px]"
						:class="[
							{ 'border-l-3 border-[#E67009]': index === 0 },
						]"
					>
						{{ text }}
					</h1>
				</div>
			</div>
		</section>

		<!-- images section -->
		<section
			v-cloak
			class="max-w-[1600px] w-full m-auto relative z-50 px-10"
		>
			<div
				class="mt-[-50px] flex justify-center items-center gap-4 relative"
			>
				<span
					ref="elRefs"
					v-for="(imageUrl, index) in imagesArr"
					:class="{ animateSlideInTop: isVisibleList[index] }"
				>
					<NuxtImg
						height="300"
						width="300"
						:lazy="false"
						class="object-cover min-w-0 min-h-0"
						:src="imageUrl"
						alt="portfolio-example-work-image"
						format="webp"
					/>
				</span>

				<div
					ref="instLogoRef"
					:class="{ animateSlideInTop: isInstLogoVisible }"
					class="instLogo absolute top-[-53px] w-[106px] h-[106px] rounded-full flex items-center justify-center bg-[#232323]"
				>
					<NuxtImg
						:lazy="false"
						height="50"
						width="50"
						src="/icons/instagram.svg"
						alt="instagram-icon"
						format="svg"
					/>
				</div>
			</div>
		</section>

		<!-- inst video -->
		<section v-cloak class="h-[1000px] mt-[40px] mb-[60px]">
			<h1 class="text-[#E8ECF0] text-lg text-center">
				Більше фото та відео наших робіт ви можете переглянути в нашому
				Instagram профілі
			</h1>

			<img
				ref="videoRef"
				:class="{ animateSlideInTop: isVideoVisible }"
				src="/portfolio/inst-video.png"
				class="mt-[40px] m-auto cursor-pointer"
				alt=""
			/>
		</section>

		<!-- examples -->
		<section v-cloak class="h-[802px] mt-[40px] mb-[60px] bg-[#E8ECF0]">
			<div
				class="max-w-[1600px] w-full m-auto pt-[150px] gap-[70px] flex z-10 relative"
			>
				<!-- quotient -->
				<div
					ref="someQuotientRef"
					:class="{ animateSlideInLeft: isSomeQuotientVisible }"
					class="flex flex-col gap-[15px] text-[#232323] w-[550px] text-[50px]/[100%]"
				>
					<h1
						v-for="(text, index) in quotientArr2"
						class="pl-[60px] text-[#232323] font-semibold"
						:class="[
							{ 'border-l-3 border-[#E67009]': index === 0 },
						]"
					>
						{{ text }}
					</h1>

					<div class="text-[#000000] text-lg mt-[40px] pl-[60px]">
						Акуратне відновлення без фарбування. Кузов знову
						виглядає ідеально.
					</div>
				</div>

				<div
					class="flex bg-[#DDE1E4] w-[842px] h-[532px] p-3 items-center justify-center gap-3"
				>
					<!-- first img -->
					<div
						ref="firstImgRef"
						:class="{ animateSlideInLeft: isFirstImgVisible }"
					>
						<img
							src="/portfolio/first.png"
							class="h-[501.88px] w-[401.32px] object-cover"
							alt=""
						/>
					</div>

					<!-- second img -->
					<div
						ref="secondImgRef"
						:class="{ animateSlideInRight: isSecondImgVisible }"
						class="flex flex-col justify-between h-full gap-5"
					>
						<div
							class="text-[#232323] flex-grow text-center border border-[#E67009] w-full flex items-center justify-center"
						>
							<p class="text-lg w-[170px]">
								Результат нашої роботи
							</p>
						</div>

						<img
							class="w-[400.6px] h-[396.88px] object-cover"
							src="/portfolio/second.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
const quotientArr = ['Детейлінг, що', 'Вражає']
const quotientArr2 = ['Видалення вм’ятин']

const imagesArr = [
	'/portfolio/portfolio1.png',
	'/portfolio/portfolio2.png',
	'/portfolio/portfolio3.png',
	'/portfolio/portfolio4.png',
]

const portfolioQuotientRef = ref<HTMLElement | null>(null)
const isPortfolioQuotientVisible = useVisibility(portfolioQuotientRef, {
	threshold: 0,
})

const elRefs = ref(imagesArr.map(() => ref<HTMLElement | null>(null)))

// 2) Масив булевих видимостей
const isVisibleList = ref(
	elRefs.value.map(elRef => useVisibility(elRef, { threshold: 0 }, true))
)

const instLogoRef = ref<HTMLElement | null>(null)
const isInstLogoVisible = useVisibility(instLogoRef)

const videoRef = ref<HTMLElement | null>(null)
const isVideoVisible = useVisibility(videoRef)

const someQuotientRef = ref<HTMLElement | null>(null)
const isSomeQuotientVisible = useVisibility(
	someQuotientRef,
	{
		threshold: 0,
	},
	true
)

const firstImgRef = ref<HTMLElement | null>(null)
const isFirstImgVisible = useVisibility(
	firstImgRef,
	{
		threshold: 0,
	},
	true
)

const secondImgRef = ref<HTMLElement | null>(null)
const isSecondImgVisible = useVisibility(
	secondImgRef,
	{
		threshold: 0,
	},
	true
)
</script>

<style scoped>
[v-cloak] {
	opacity: 0;
	/* або visibility: hidden; або transform: translateX(-50px); */
}
/* Планшеты (1024px и менее) */
@media (max-width: 1024px) {
	.h-\[620px\] {
		height: 500px;
	}

	.pt-\[150px\] {
		padding-top: 100px;
	}

	.text-\[75px\]\/\[100\%\] {
		font-size: 60px;
		line-height: 100%;
	}

	.w-\[720px\] {
		width: 600px;
	}

	.pl-\[80px\] {
		padding-left: 60px;
	}

	.w-\[360px\] {
		width: 300px;
	}

	.h-\[360px\] {
		height: 300px;
	}

	.left-\[750px\] {
		left: 600px;
	}

	.w-\[106px\] {
		width: 90px;
	}

	.h-\[106px\] {
		height: 90px;
	}

	.h-\[1000px\] {
		height: 800px;
	}

	.h-\[802px\] {
		height: 650px;
	}

	.text-\[50px\]\/\[100\%\] {
		font-size: 40px;
		line-height: 100%;
	}

	.w-\[550px\] {
		width: 450px;
	}

	.pl-\[60px\] {
		padding-left: 40px;
	}

	.w-\[842px\] {
		width: 700px;
	}

	.h-\[532px\] {
		height: 450px;
	}

	.h-\[501\.88px\] {
		height: 420px;
	}

	.w-\[401\.32px\] {
		width: 330px;
	}

	.w-\[400\.6px\] {
		width: 330px;
	}

	.h-\[396\.88px\] {
		height: 320px;
	}
}

/* Малые планшеты (768px и менее) */
@media (max-width: 960px) {
	.h-\[620px\] {
		height: 400px;
	}

	.initialSectionPortfolio {
		height: 300px;
		padding-top: 50px;
	}

	.pt-\[150px\] {
		padding-top: 60px;
	}

	.max-w-\[1600px\] {
		padding: 0 20px;
	}

	.text-\[75px\]\/\[100\%\] {
		font-size: 48px;
		line-height: 100%;
	}

	.w-\[720px\] {
		width: 100%;
	}

	.pl-\[80px\] {
		padding-left: 40px;
	}

	.flex.justify-center.items-center {
		flex-wrap: wrap;
		justify-content: center;
	}

	.instLogo {
		top: 43%;
	}

	.w-\[360px\] {
		width: 160px;
	}

	.h-\[360px\] {
		height: 160px;
	}

	.absolute.top-\[-53px\].left-\[750px\] {
		position: static;
		margin-top: 20px;
	}

	.w-\[106px\] {
		width: 80px;
	}

	.h-\[106px\] {
		height: 80px;
	}

	.h-\[1000px\] {
		height: 600px;
	}

	.h-\[802px\] {
		height: auto;
		min-height: 500px;
	}

	.flex.z-10.relative {
		flex-direction: column;
		gap: 30px;
	}

	.text-\[50px\]\/\[100\%\] {
		font-size: 32px;
		line-height: 100%;
	}

	.w-\[550px\] {
		width: 100%;
	}

	.pl-\[60px\] {
		padding-left: 30px;
	}

	.w-\[842px\] {
		width: 100%;
		max-width: 500px;
	}

	.h-\[532px\] {
		height: auto;
		min-height: 400px;
	}

	.flex.bg-\[#DDE1E4\] {
		flex-direction: column;
		padding: 15px;
	}

	.h-\[501\.88px\] {
		height: 300px;
	}

	.w-\[401\.32px\] {
		width: 100%;
		max-width: 300px;
	}

	.w-\[400\.6px\] {
		width: 100%;
		max-width: 300px;
	}

	.h-\[396\.88px\] {
		height: 250px;
	}

	.w-\[170px\] {
		width: 150px;
	}

	/* Скрытие фонового изображения */
	img[src='/icons/bg-sant-avto.png'] {
		display: none;
	}
}

/* Мобильные устройства (480px и менее) */
@media (max-width: 480px) {
	.instLogo {
		display: none;
	}
	.h-\[620px\] {
		height: 350px;
	}

	.initialSectionPortfolio {
		height: 250px;
		padding-top: 30px;
	}

	.pt-\[150px\] {
		padding-top: 40px;
	}

	.max-w-\[1600px\] {
		padding: 50px 15px;
	}

	.text-\[75px\]\/\[100\%\] {
		font-size: 36px;
		line-height: 100%;
	}

	.pl-\[80px\] {
		padding-left: 20px;
	}

	.gap-\[15px\] {
		gap: 10px;
	}

	.flex.justify-center.items-center {
		flex-direction: column;
		gap: 15px;
	}

	.w-\[360px\] {
		width: 280px;
	}

	.h-\[360px\] {
		height: 280px;
	}

	.w-\[106px\] {
		width: 60px;
	}

	.h-\[106px\] {
		height: 60px;
	}

	.h-\[1000px\] {
		height: 400px;
	}

	.mt-\[40px\] {
		margin-top: 20px;
	}

	.mb-\[60px\] {
		margin-bottom: 30px;
	}

	.h-\[802px\] {
		height: auto;
		min-height: 400px;
	}

	.text-\[50px\]\/\[100\%\] {
		font-size: 24px;
		line-height: 100%;
	}

	.pl-\[60px\] {
		padding-left: 20px;
	}

	.text-lg {
		font-size: 1rem;
	}

	.w-\[842px\] {
		width: 100%;
	}

	.h-\[532px\] {
		height: auto;
		min-height: 300px;
	}

	.p-3 {
		padding: 10px;
	}

	.gap-3 {
		gap: 10px;
	}

	.h-\[501\.88px\] {
		height: 200px;
	}

	.w-\[401\.32px\] {
		width: 100%;
	}

	.w-\[400\.6px\] {
		width: 100%;
	}

	.h-\[396\.88px\] {
		height: 180px;
	}

	.gap-5 {
		gap: 10px;
	}

	.w-\[170px\] {
		width: 120px;
	}
}
</style>
