<template>
	<div class="w-full m-auto relative bg-[#1A1A1A]">
		<!-- initial section -->
		<section
			class="min-h-screen lg:h-[1000px] relative z-0 bg-[#E8ECF0] w-full"
		>
			<!-- Background image - hidden on mobile, visible on tablet+ -->
			<NuxtImg
				src="/icons/bg-sant-avto.png"
				class="absolute top-[170px] left-0 z-0 w-full slowAppearing hidden md:block"
				loading="eager"
				:lazy="false"
				format="png"
				alt="Hintergrundbild"
			/>
			<!-- Car image - responsive positioning and sizing -->
			<NuxtImg
				src="/icons/car.png"
				class="absolute top-[50px] right-0 z-0 animateSlideInTop w-[180px] h-[330px] md:w-[280px] md:h-[510px] lg:w-[355px] lg:h-[651px] lg:top-[100px] hidden sm:block"
				loading="eager"
				:lazy="false"
				format="png"
				alt="Auto-Icon"
			/>

			<div
				class="max-w-[1600px] w-full m-auto px-4 sm:px-6 lg:px-8 pt-[60px] sm:pt-[100px] lg:pt-[150px] gap-[30px] sm:gap-[50px] lg:gap-[70px] flex flex-col z-10 relative"
			>
				<!-- quotient - responsive text sizing and spacing -->
				<div
					class="flex flex-col gap-[8px] sm:gap-[10px] lg:gap-[15px] text-[#232323] w-full lg:w-[720px] text-[32px]/[110%] sm:text-[45px]/[105%] lg:text-[75px]/[100%] font-bold animateSlideInLeft"
				>
					<h1
						v-for="(text, index) in initialSectionWords"
						class="pl-[20px] sm:pl-[40px] lg:pl-[80px]"
						:class="[
							{ 'border-l-3 border-[#E67009]': index === 0 },
						]"
					>
						{{ text }}
					</h1>
				</div>

				<!-- button - responsive sizing and positioning -->
				<NuxtLink to="/contact" class="animateSlideInLeft">
					<FilledButton
						class="w-[280px] h-[70px] sm:w-[300px] sm:h-[80px] lg:w-[321px] lg:h-[100px] text-lg lg:text-xl ml-[20px] sm:ml-[40px] lg:ml-[80px]"
						:label="'Замовити послугу'"
					/>
				</NuxtLink>

				<!-- location and info data - responsive layout -->
				<div
					class="flex flex-col sm:flex-row gap-[25px] sm:gap-[35px] lg:gap-[55px] relative animateSlideInLeft pl-[20px] sm:pl-[40px] lg:pl-0"
				>
					<NuxtImg
						src="/icons/mouse.svg"
						alt="computer-mouse-icon"
						class="hidden lg:block"
					/>

					<div class="text-sm lg:text-base">
						<div>Місцезнаходження</div>
						<div class="text-[#E67009]">
							<a
								href="https://www.google.com/maps/place/вулиця+Тепловозна,+1,+Київ,+02000/@50.4253765,30.6301958,21z/data=!4m6!3m5!1s0x40d4c5131d7ca879:0x6fa48028f40f9c8d!8m2!3d50.4253459!4d30.6301327!16s%2Fg%2F11sv87yndt?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D"
								target="_blank"
								>м. Київ, вул. Тепловозна 1</a
							>
						</div>
					</div>

					<div class="text-sm lg:text-base">
						<div>
							<a href="mailto:santavtodetailing@gmail.com"
								>santavtodetailing@gmail.com</a
							>
						</div>
						<div class="text-[#E67009]">
							<a :href="`tel:${cleanNumber}`"
								>+380 (67) 868 50 00</a
							>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- experience - responsive layout and sizing -->
		<section
			class="exp_bg_img max-w-[1600px] w-full m-auto relative z-99999"
		>
			<div
				class="mt-[-50px] lg:mt-[-100px] py-[30px] lg:py-[60px] px-[20px] sm:px-[50px] lg:px-[100px] flex flex-col lg:flex-row justify-between items-center gap-[30px] lg:gap-0 backdrop-blur-xs"
			>
				<!-- quotient - responsive text sizing -->
				<div
					ref="experienceQuotientRef"
					:class="{
						animateSlideInLeft: isExperienceQuotientVisible,
					}"
					class="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[15px] text-[#E8ECF0] w-full lg:w-fit text-[28px]/[110%] sm:text-[40px]/[105%] lg:text-[55px]/[100%] text-center lg:text-left h-fit"
				>
					<h1
						v-for="(text, index) in experienceQuotient"
						class="pl-[20px] sm:pl-[35px] lg:pl-[50px]"
						:class="[
							{ 'border-l-3 border-[#E67009]': index === 0 },
						]"
					>
						{{ text }}
					</h1>
				</div>

				<!-- statistic - responsive sizing and padding -->
				<div
					ref="experienceStatistic"
					:class="{ animateSlideInTop: isExperienceStatisticVisible }"
					class="h-auto lg:h-[520px] w-full max-w-[500px] lg:w-[500px] bg-[#1A1A1A] px-[30px] sm:px-[50px] lg:px-[75px] py-[40px] sm:py-[60px] lg:py-[85px] flex flex-col justify-between gap-[30px] lg:gap-0"
				>
					<div class="text-white text-lg lg:text-xl">Статистика</div>

					<div
						class="flex flex-col gap-[30px] lg:gap-[45px] text-white"
					>
						<div
							class="flex flex-col sm:flex-row gap-[15px] sm:gap-[40px] lg:gap-[70px] pl-[20px] lg:pl-[40px] border-l-3 items-start sm:items-center border-[#E67009]"
						>
							<AnimatedCounter :target-number="11" />

							<div class="text-base lg:text-lg text-[#E67009]">
								Років досвіду
							</div>
						</div>

						<div
							class="w-full border-b border-[rgba(255,255,255,0.5)]"
						></div>

						<div
							class="flex flex-col sm:flex-row gap-[15px] sm:gap-[40px] lg:gap-[70px] pl-[20px] lg:pl-[40px] border-l-3 items-start sm:items-center border-[#E67009]"
						>
							<AnimatedCounter :target-number="9" />

							<div class="text-base lg:text-lg text-[#E67009]">
								Обслуговано клієнтів
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- services - responsive layout with stacking on mobile -->
		<section
			ref="container"
			class="services flex flex-col lg:flex-row justify-between max-w-[1600px] w-full m-auto px-4 sm:px-6 lg:px-8 pt-[60px] lg:pt-[120px] scroll-auto gap-[40px] lg:gap-0"
		>
			<!-- left part - no longer sticky on mobile -->
			<div
				ref="servicesBlockRef"
				:class="{ animateSlideInLeft: isServicesBlockRefVisible }"
				class="servicesLeftPart static lg:sticky lg:top-[230px] h-fit gap-[30px] lg:gap-[70px] flex flex-col w-full lg:w-[450px]"
			>
				<!-- quotient - responsive text sizing -->
				<div
					class="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[15px] text-[#E8ECF0] w-full lg:w-[720px] text-[32px]/[110%] sm:text-[45px]/[105%] lg:text-[55px]/[100%] font-bold"
				>
					<h1
						v-for="(text, index) in servicesQuotient"
						class="pl-[20px] sm:pl-[40px] lg:pl-[60px]"
						:class="[
							{ 'border-l-3 border-[#E67009]': index === 0 },
						]"
					>
						{{ text }}
					</h1>
				</div>

				<!-- description text - responsive sizing -->
				<div
					class="text-base lg:text-lg text-[rgba(232,236,240,0.8)] pl-[20px] sm:pl-[40px] lg:pl-[60px]"
				>
					Надаємо професійний догляд за вашим авто — від глибокого
					очищення до кузовних робіт. Працюємо з преміум-матеріалами,
					щоб зберегти ідеальний вигляд кожної деталі.
				</div>

				<!-- button - responsive sizing -->
				<NuxtLink to="/services"
					><FilledButton
						class="w-[250px] h-[70px] sm:w-[320px] sm:h-[80px] lg:w-[372px] lg:h-[96px] text-lg lg:text-xl ml-[20px] sm:ml-[40px] lg:ml-[60px]"
						:label="'Переглянути всі послуги'"
				/></NuxtLink>
			</div>

			<!-- right part list of services - responsive spacing -->
			<div
				class="flex flex-col gap-[40px] lg:gap-[80px] w-full lg:w-auto overflow-hidden"
			>
				<div
					v-for="(service, index) in serviceVariationList"
					:key="index"
					ref="itemsSlideInRight"
					class="element"
					:class="{ 'element animateSlideInRight': visible[index] }"
				>
					<ServiceVariation :service />
				</div>
			</div>
		</section>

		<!-- before / after - responsive layout -->
		<section
			ref="beforeAfterRef"
			:class="{
				'animateSlideInTop duration-700': isBeforeAfterVisible,
			}"
			class="max-w-[1600px] w-full mb-[-50px] lg:mb-[-100px] mt-[60px] lg:mt-[120px] mx-auto relative z-10 h-[400px] sm:h-[600px] lg:h-[900px]"
		>
			<div class="relative flex h-full">
				<!-- BEFORE/AFTER combined layout -->
				<div class="flex w-full h-full relative">
					<div
						class="beforeImg bg-no-repeat bg-left bg-cover w-1/2 h-full flex flex-col justify-end items-start px-[20px] sm:px-[50px] lg:px-[95px] py-[30px] sm:py-[60px] lg:py-[85px] gap-2"
					>
						<div
							class="pl-[15px] sm:pl-[25px] lg:pl-[40px] border-l-3 border-[#E67009] text-[#E8ECF0]"
						>
							<h1
								class="text-2xl sm:text-3xl lg:text-5xl font-bold"
							>
								До
							</h1>
							<p class="text-sm sm:text-base lg:text-lg">
								Хімчистки
							</p>
						</div>
					</div>

					<!-- AFTER -->
					<div
						class="afterImg bg-no-repeat bg-right bg-cover w-1/2 h-full flex flex-col justify-end items-end px-[20px] sm:px-[50px] lg:px-[95px] py-[30px] sm:py-[60px] lg:py-[85px] gap-2"
					>
						<div
							class="pr-[15px] sm:pr-[25px] lg:pr-[40px] border-r-3 border-[#E67009] text-[#232323]"
						>
							<h1
								class="text-2xl sm:text-3xl lg:text-5xl font-bold"
							>
								Після
							</h1>
							<p class="text-sm sm:text-base lg:text-lg">
								Хімчистки
							</p>
						</div>
					</div>
				</div>

				<!-- SLIDER ICON -->
				<div
					class="absolute inset-0 flex items-center justify-center z-50"
				>
					<NuxtImg
						src="/icons/slider.png"
						alt="slider-icon"
						id="dragableCircle"
						ref="dragableCircle"
						class="cursor-pointer hover:scale-110 select-none draggable"
						width="60"
						height="60"
						:lazy="false"
					/>
				</div>
			</div>
		</section>

		<!-- reviews - responsive layout and spacing -->
		<section
			class="bg-[#E8ECF0] pt-[80px] lg:pt-[150px] pb-[50px] lg:pb-[100px]"
		>
			<div
				class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[20px] z-[999999] relative"
			>
				<!-- title - responsive text sizing -->
				<h2
					ref="reviewsH1Ref"
					:class="{ animateSlideInLeft: isReviewsH1Visible }"
					class="pl-[20px] sm:pl-[30px] lg:pl-[40px] border-l-3 border-[#E67009] text-[#232323] text-3xl sm:text-5xl lg:text-7xl font-bold mb-[30px] lg:mb-[60px]"
				>
					Відгуки клієнтів
				</h2>

				<!-- reviews slider - responsive configuration -->
				<div
					class="relative mt-[40px] lg:mt-[110px] z-[999999]"
					ref="reviewsSwiperRef"
					:class="{ animateSlideInTop: isReviewsSwiperVisible }"
				>
					<ClientOnly>
						<!-- <ReviewsSlider
							class="z-[999999]"
							:reviews="reviewsList"
						/> -->
						<OwnSlider :reviews="reviewsList">
							<!-- <template #slides
								><ReviewCard
									v-for="review in reviewsList"
									:review
							/></template> -->
						</OwnSlider>
					</ClientOnly>
				</div>

				<!-- more reviews button - responsive sizing -->
				<div class="mt-[40px] lg:mt-[80px] flex justify-center">
					<FilledButton
						:label="'Більше відгуків'"
						class="w-[200px] h-[60px] lg:w-[218px] lg:h-[67px]"
					/>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
// import { Carousel, Slide, Navigation } from 'vue3-carousel'
// import 'vue3-carousel/style.css'

import ServiceVariation from '~/widgets/service/ui/ServiceVariation.vue'
import { serviceVariationList } from '~/widgets/service/config/serviceConfig'

import ReviewCard from '~/entities/reviews/ui/ReviewCard.vue'
import { reviewsList } from '~/entities/reviews/config/reviewConfig'

// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { useVisibility } from '~/composables/useVisibility'

import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'

import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/vue'

const breakpoints = {
	1024: {
		slidesPerView: 3,
		allowTouchMove: false,
	},
}

import { useMediaQuery } from '@vueuse/core'
import { rewriteDefault } from 'vue/compiler-sfc'

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const isPreferredDark = useMediaQuery('(prefers-color-scheme: dark)')

const initialSectionWords: string[] = ['Досконалість', 'Престиж', 'Догляд']
const experienceQuotient: string[] = ['Тільки ', 'Професіонали з', 'Досвідом']
const servicesQuotient: string[] = ['Послуги з ', 'Детейлінгу ']

const formattedNumber = '+380 (67) 868 50 00'

const cleanNumber = formattedNumber.replace(/[^+\d]/g, '')

const container = ref<HTMLElement | null>(null)

const itemsSlideInRight = ref<HTMLElement[]>([])
// Состояние видимости
const visible = ref<boolean[]>(serviceVariationList.map(() => false))

const scrollY = ref(0)
function onScrollWindow() {
	scrollY.value = window.scrollY
}

function onScroll() {
	itemsSlideInRight.value.forEach((el, i) => {
		if (!el) return
		const rect = el.getBoundingClientRect()

		if (rect.top < window.innerHeight && rect.bottom > 0) {
			visible.value[i] = true
		} else {
			visible.value[i] = false
		}
	})
}

function getItemVisibility(el: HTMLElement | null) {
	if (!el) return
	const rect = el.getBoundingClientRect()

	if (rect.top < window.innerHeight && rect.bottom > 0) {
		return true
	} else {
		return false
	}
}

const experienceQuotientRef = ref<HTMLElement | null>(null)
const isExperienceQuotientVisible = computed(() => {
	scrollY.value
	return getItemVisibility(experienceQuotientRef.value)
})

const experienceStatistic = ref<HTMLElement | null>(null)
const isExperienceStatisticVisible = ref(
	useVisibility(experienceStatistic, {
		threshold: 0,
	})
)

const servicesBlockRef = ref<HTMLElement | null>(null)
const isServicesBlockRefVisible = computed(() => {
	scrollY.value
	return getItemVisibility(servicesBlockRef.value)
})

const beforeAfterRef = ref<HTMLElement | null>(null)
const isBeforeAfterVisible = useVisibility(beforeAfterRef, { threshold: 0 })

const reviewsH1Ref = ref<HTMLElement | null>(null)
const isReviewsH1Visible = useVisibility(reviewsH1Ref, { threshold: 0 })

const reviewsSwiperRef = ref<HTMLElement | null>(null)
const isReviewsSwiperVisible = useVisibility(reviewsSwiperRef, {
	threshold: 0.1,
})

onMounted(() => {
	scrollY.value = window.scrollY
	// items.value автоматически заполнится нодами в том порядке, как v-for
	window.addEventListener('scroll', onScroll, { passive: true })
	window.addEventListener('scroll', onScrollWindow, { passive: true })
	// Запустить проверку сразу
	onScroll()
})

onUnmounted(() => {
	window.removeEventListener('scroll', onScroll)
	window.removeEventListener('scroll', onScrollWindow)
})

gsap.registerPlugin(Draggable)
const dragableCircle = ref<any>(null)

const beforeImgRef = ref<HTMLElement | null>(null)
const afterImgRef = ref<HTMLElement | null>(null)
// jggjjffj yield

// function changeImagesWidth(moreThanZero: boolean) {
// 	const beforeEl = beforeImgRef.value!
// 	const afterEl = afterImgRef.value!

// 	// 1. Извлекаем текущее числовое значение (в пикселях)
// 	const beforeWidth = parseInt(getComputedStyle(beforeEl).width, 10) // число, px
// 	const afterWidth = parseInt(getComputedStyle(afterEl).width, 10)

// 	// 2. Меняем ширину
// 	const newBefore = moreThanZero
// 		? Math.max(0, beforeWidth + 1)
// 		: Math.max(0, beforeWidth - 1)
// 	const newAfter = moreThanZero
// 		? Math.max(0, afterWidth - 1)
// 		: Math.max(0, afterWidth + 1)

// 	// 3. Присваиваем обратно c 'px'
// 	beforeEl.style.width = `${newBefore}px`
// 	afterEl.style.width = `${newAfter}px`
// }

// onMounted(() => {
// 	const el = dragableCircle.value?.$el ?? null
// 	if (!(el instanceof HTMLElement)) return

// 	Draggable.create(el, {
// 		type: 'x',
// 		bounds: el.parentElement,
// 		onDrag() {
// 			//   const raw = Math.round(this.x + track.clientWidth/2)

// 			changeImagesWidth(this.x > 0)
// 		},
// 	})
// })

// Ширина маски before (в px)
// const beforeWidth = ref(0)

// onMounted(() => {
// 	// Гарантуємо, що елементи в DOM
// 	const wrapper = beforeAfterRef.value!
// 	const before = beforeImgRef.value!
// 	const handle = dragableCircle.value?.$el ?? null
// 	if (!(handle instanceof HTMLElement)) return

// 	// Ініціалізуємо початкову ширину — 50% контейнера
// 	beforeWidth.value = wrapper.clientWidth / 2

// 	// Використовуємо GSAP Draggable
// 	Draggable.create(handle, {
// 		type: 'x',
// 		bounds: wrapper,
// 		inertia: false,

// 		onDrag() {
// 			// this.x — зміщення від початкової position (center)
// 			const halfW = wrapper.clientWidth / 2
// 			//  normalizedX: -halfW ... +halfW
// 			const normalizedX = this.x
// 			// нова ширина before: center + зміщення
// 			let newW = halfW + normalizedX
// 			// обмежуємо від 0 до повної ширини
// 			newW = Math.min(Math.max(newW, 0), wrapper.clientWidth)
// 			beforeWidth.value = newW
// 		},
// 	})
// })
</script>

<style scoped>
.custom-prev,
.custom-next {
	position: absolute;
	width: 50px;
	height: 50px;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid rgba(0, 0, 0, 0.2);
	background-color: #fff;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	transition: background-color 0.2s ease;
	z-index: 10;
}

.custom-prev {
	left: calc(50% - 70px);
	top: 100%;
	transform: translateY(10px);
}

.custom-next {
	right: calc(50% - 70px);
	top: 100%;
	transform: translateY(10px) rotate(180deg);
}

@media (min-width: 640px) {
	.custom-prev,
	.custom-next {
		width: 60px;
		height: 60px;
	}
}

@media (min-width: 1024px) {
	.custom-prev {
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 80px;
		height: 80px;
	}
	.custom-next {
		right: 0;
		top: 50%;
		transform: translateY(-50%) rotate(180deg);
		width: 80px;
		height: 80px;
	}
}

.custom-prev:hover,
.custom-next:hover {
	background-color: #f3f4f6;
}

.exp_bg_img {
	background-image: url('/icons/experience-bg-img.png');
	background-repeat: no-repeat;
}

.beforeImg {
	background-image: url('/icons/before.png');
	background-repeat: no-repeat;
}

.afterImg {
	background-image: url('/icons/after.png');
	background-repeat: no-repeat;
}

.splide__arrow.splide__arrow--prev {
	position: absolute;
	left: calc(50% - 70px);
	top: 100%;
	transform: translateY(10px);
	width: 50px !important;
	height: 50px;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid rgba(0, 0, 0, 0.2);
	background-color: #fff;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	transition: background-color 0.2s ease;
}

@media (min-width: 640px) and (max-width: 1023px) {
	.splide__arrow.splide__arrow--prev {
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 60px !important;
		height: 60px;
	}
}

@media (min-width: 1024px) {
	.splide__arrow.splide__arrow--prev {
		left: 20px;
		top: 50%;
		transform: translateY(-50%);
		width: 80px !important;
		height: 80px;
	}
}

.splide__arrow.splide__arrow--prev:hover {
	background-color: #f3f4f6;
}

.splide__arrow.splide__arrow--next {
	position: absolute;
	right: calc(50% - 70px);
	top: 100%;
	transform: translateY(10px) rotate(180deg);
	width: 50px;
	height: 50px;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid rgba(0, 0, 0, 0.2);
	background-color: #fff;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	transition: background-color 0.2s ease;
}

@media (min-width: 640px) and (max-width: 1023px) {
	.splide__arrow.splide__arrow--next {
		right: 0;
		top: 50%;
		transform: translateY(-50%) rotate(180deg);
		width: 60px;
		height: 60px;
	}
}

@media (min-width: 1024px) {
	.splide__arrow.splide__arrow--next {
		right: 20px;
		top: 50%;
		transform: translateY(-50%) rotate(180deg);
		width: 80px;
		height: 80px;
	}
}

.splide__arrow.splide__arrow--next:hover {
	background-color: #f3f4f6;
}

.element {
	opacity: 0;
	transform: translateY(50px);
	transition: opacity 0.5s ease, transform 0.5s ease;
}
.animateSlideInRight {
	animation: slideInRight 0.5s ease-out forwards;
}

.animateSlideInTop {
	animation: slideInTop 0.5s ease-out forwards;
}
.animateSlideInLeft {
	animation: slideInLeft 0.5s ease-out forwards;
}

.slowAppearing {
	animation: slowAppearing 0.5s ease-out forwards;
}

@keyframes slowAppearing {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes slideInRight {
	from {
		transform: translateX(100px);
		opacity: 0;
	}

	to {
		transform: translateX(0);
		opacity: 1;
	}
}

@keyframes slideInLeft {
	from {
		transform: translateX(-100px);
		opacity: 0;
	}

	to {
		transform: translateX(0);
		opacity: 1;
	}
}

@keyframes slideInTop {
	from {
		transform: translateY(100px);
		opacity: 0;
	}

	to {
		transform: translateY(0);
		opacity: 1;
	}
}

@media screen and (max-width: 1230px) {
	.services {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.servicesLeftPart {
		position: static;
		margin-bottom: 40px;
	}
}
</style>
