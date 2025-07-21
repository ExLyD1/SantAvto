<template>
	<div
		class="border border-[#2A2A2A] w-[770px] flex flex-col justify-between bg h-[350px] relative overflow-visible"
	>
		<div
			class="flex-grow p-10 flex gap-5 h-full"
			:class="`${service.bgColor}`"
		>
			<div
				class="flex service-type-icon items-center justify-center w-[140px] h-[140px] rounded-full"
				:class="`${service.opositeColor}`"
			>
				<NuxtImg
					:lazy="false"
					:src="service.asideImgUrl"
					height="35"
					width="35"
					alt="service-type-icon"
				/>
			</div>

			<div class="flex flex-col gap-8 h-full">
				<h1 class="text-2xl text-[#E67009] font-medium">
					{{ service.title }}
				</h1>

				<div class="flex flex-col flex-wrap gap-5 h-[150px] relative">
					<div
						v-for="(item, index) in service.servicesList"
						:key="index"
						@click="handleServiceClick(item, index)"
						class="flex gap-1 text-sm items-center transition-all duration-300"
						:class="[
							{
								'cursor-pointer hover:text-[#E67009]':
									item.onClickFunction,
							},
							{
								'text-[#E67009]':
									activeServiceIndex === index &&
									isPriceListOpen,
							},
						]"
					>
						<p>{{ item.label }}</p>

						<svg
							v-if="item.onClickFunction"
							width="8"
							height="5"
							viewBox="0 0 8 5"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="transition-transform duration-300"
							:class="{
								'rotate-180':
									activeServiceIndex === index &&
									isPriceListOpen,
							}"
						>
							<path
								d="M1 1L4 4L7 1"
								stroke="#E67009"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>

					<!-- Price List Block -->
					<Transition
						name="price-list"
						enter-active-class="transition-all duration-300 ease-out"
						leave-active-class="transition-all duration-300 ease-in"
						enter-from-class="opacity-0 transform scale-95 translate-y-[-10px]"
						enter-to-class="opacity-100 transform scale-100 translate-y-0"
						leave-from-class="opacity-100 transform scale-100 translate-y-0"
						leave-to-class="opacity-0 transform scale-95 translate-y-[-10px]"
					>
						<div
							v-if="isPriceListOpen"
							class="absolute w-[500px] left-[-25px] top-[-25px] z-50 shadow-2xl"
							@click.stop
						>
							<ServiceMenu
								:services="currentServices"
								@close="closePriceList"
							/>
						</div>
					</Transition>
				</div>
			</div>
		</div>

		<NuxtLink :to="service.routeLink">
			<FilledButton
				class="w-full h-[35px] text-sm"
				:label="service.buttonText"
			/>
		</NuxtLink>

		<!-- Overlay to close price list when clicking outside -->
		<div
			v-if="isPriceListOpen"
			class="fixed inset-0 z-40"
			@click="closePriceList"
		></div>
	</div>
</template>

<script setup lang="ts">
import type { IServiceDetail, IDetail } from '../config/serviceDetailTypeConfig'
import { useServiceStore } from '~/stores/service'
import ServiceMenu from '~/widgets/service/ui/ServiceMenu.vue'
import FilledButton from '~/components/FilledButton.vue'

const props = defineProps<{ service: IServiceDetail }>()
const serviceStore = useServiceStore()

// Local state for price list functionality
const isPriceListOpen = ref(false)
const activeServiceIndex = ref<number | null>(null)
const currentServices = ref<any>([])

// Handle service item click
const handleServiceClick = (item: IDetail, index: number) => {
	if (!item.onClickFunction) return

	// If clicking the same service that's already open, close it
	if (activeServiceIndex.value === index && isPriceListOpen.value) {
		closePriceList()
		return
	}

	// Close any open price list first
	if (isPriceListOpen.value) {
		closePriceList()
	}

	// Open price list for the clicked service
	setTimeout(
		() => {
			openPriceList(index)
		},
		isPriceListOpen.value ? 300 : 0
	) // Delay if closing another one first
}

// Open price list
const openPriceList = (index: number) => {
	activeServiceIndex.value = index

	// Get services based on modal type
	currentServices.value = serviceStore.getServicesByType(
		props.service.modalType
	)

	isPriceListOpen.value = true
}

// Close price list
const closePriceList = () => {
	isPriceListOpen.value = false
	activeServiceIndex.value = null
}

// Close price list on escape key
onMounted(() => {
	const handleEscape = (e: KeyboardEvent) => {
		if (e.key === 'Escape' && isPriceListOpen.value) {
			closePriceList()
		}
	}

	document.addEventListener('keydown', handleEscape)

	onUnmounted(() => {
		document.removeEventListener('keydown', handleEscape)
	})
})
</script>

<style scoped>
/* Additional styles for smooth transitions */
.price-list-enter-active,
.price-list-leave-active {
	transition: all 0.3s ease;
}

.price-list-enter-from {
	opacity: 0;
	transform: scale(0.95) translateY(-10px);
}

.price-list-leave-to {
	opacity: 0;
	transform: scale(0.95) translateY(-10px);
}

/* Планшеты (1024px и менее) */
@media (max-width: 1024px) {
	.w-\[770px\] {
		width: 100%;
	}

	.h-\[350px\] {
		height: 320px;
	}

	.p-10 {
		padding: 2rem;
	}

	.w-\[140px\] {
		width: 120px;
	}

	.h-\[140px\] {
		height: 120px;
	}

	.gap-8 {
		gap: 1.5rem;
	}

	.h-\[150px\] {
		height: 130px;
	}

	.w-\[500px\] {
		width: 450px;
	}
}

/* Малые планшеты (768px и менее) */
@media (max-width: 768px) {
	.w-\[770px\] {
		width: 100%;
		max-width: none;
		/* margin: 0 10px; */
	}

	.h-\[350px\] {
		height: auto;
		min-height: 280px;
	}

	.service-type-icon {
		width: 90px !important;
		height: 90px !important;
	}

	.flex.gap-5 {
		flex-direction: column;
		gap: 1rem;
	}

	.w-\[140px\] {
		width: 80px;
		margin: 0 auto;
	}

	.h-\[140px\] {
		height: 80px;
	}

	.gap-8 {
		gap: 1rem;
	}

	.h-\[150px\] {
		height: auto;
		min-height: 100px;
	}

	.flex-col.flex-wrap {
		flex-wrap: nowrap;
	}

	.w-\[500px\] {
		width: calc(100vw - 40px);
		max-width: 400px;
	}

	.left-\[-25px\] {
		left: -15px;
	}
}

/* Мобильные устройства (480px и менее) */
@media (max-width: 480px) {
	.w-\[770px\] {
		width: 100%;
		margin: 0 5px;
	}

	.h-\[350px\] {
		height: auto;
		min-height: 250px;
	}

	.p-10 {
		padding: 1rem;
	}

	.w-\[140px\] {
		width: 60px;
	}

	.h-\[140px\] {
		height: 60px;
	}

	.text-2xl {
		font-size: 1.25rem;
	}

	.gap-5 {
		gap: 0.75rem;
	}

	.text-sm {
		font-size: 0.75rem;
	}

	.w-\[500px\] {
		width: calc(100vw - 20px);
		max-width: 300px;
	}

	.left-\[-25px\] {
		left: -10px;
	}

	.top-\[-25px\] {
		top: -10px;
	}
}
</style>
