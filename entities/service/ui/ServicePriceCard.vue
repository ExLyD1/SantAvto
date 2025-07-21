<template>
	<div
		class="h-[460px] w-[500px] flex items-center justify-between flex-col p-12 border border-[#2A2A2A] text-white relative"
		ref="cardRef"
	>
		<!-- car description / info -->
		<div class="flex flex-col items-center gap-4 w-fit h-fit">
			<img :src="serviceGroup.imgUrl" alt="" />
			<h1 class="text-[#E8ECF0] text-2xl">{{ serviceGroup.title }}</h1>
		</div>

		<div class="flex flex-col w-full gap-5">
			<div class="flex flex-col gap-3 relative h-[150px]">
				<div
					v-for="(service, index) in serviceGroup.services"
					:key="index"
					class="flex flex-col"
				>
					<!-- Service Header -->
					<div
						@click="handleServiceClick(service, index)"
						class="flex gap-1 text-sm items-center transition-all duration-300 py-2"
						:class="[
							{
								'cursor-pointer hover:text-[#E67009]':
									service.isExpanded,
							},
							{
								'text-[#E67009]':
									activeServiceIndex === index &&
									isPriceListOpen,
							},
						]"
					>
						<div
							v-if="service.isExpanded"
							class="flex items-center gap-1 w-full"
						>
							<p>{{ service.label }}</p>
							<svg
								width="8"
								height="5"
								viewBox="0 0 8 5"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="transition-transform duration-300 ml-auto"
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

						<div
							v-else
							class="flex items-center w-full justify-between"
						>
							<p>{{ service.label }}</p>
							<p class="text-[#E67009]">{{ service.price }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Overlay for click outside detection -->
		<div
			v-if="isPriceListOpen"
			class="fixed inset-0 z-40"
			@click="closePriceList"
		></div>

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
				class="absolute w-[500px] bottom-0 left-[45px] z-50 shadow-2xl"
				@click.stop
			>
				<ServiceMenu
					:services="transformedServices"
					@close="closePriceList"
				/>
			</div>
		</Transition>
	</div>
</template>

<script setup lang="ts">
import type {
	IServicePriceGroup,
	IServicePrice,
} from '../config/servicePriceConfig'
import type { IServiceMenu } from '../config/servicePriceConfig'
import { transformServicePriceItemsToMenu } from '../config/servicePriceConfig'
import ServiceMenu from '~/widgets/service/ui/ServiceMenu.vue'

/**
 * Props для компонента ServicePriceCard
 */
interface ServicePriceCardProps {
	/** Группа услуг для отображения */
	serviceGroup: IServicePriceGroup
}

const props = defineProps<ServicePriceCardProps>()

import { useServicePriceStore } from '#imports'
const servicePriceStore = useServicePriceStore()

// Template ref for the card container
const cardRef = ref<HTMLElement>()

// Local state for price list functionality
const isPriceListOpen = ref(false)
const activeServiceIndex = ref<number | null>(null)
const transformedServices = ref<IServiceMenu[]>([])

// Handle service item click
const handleServiceClick = (item: IServicePrice, index: number) => {
	if (!item.isExpanded) return

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

	// Transform services to the format expected by ServiceMenu
	// const rawServices = servicePriceStore.getServicesByType(
	// 	props.serviceGroup.type
	// )
	const rawServices = [props.serviceGroup]
	console.log(props.serviceGroup)
	console.log(rawServices)

	// Find the current service group and transform its services
	const currentServiceGroup = rawServices.find(
		(group: IServicePriceGroup) =>
			group.serviceType === props.serviceGroup.serviceType
	)

	if (currentServiceGroup) {
		transformedServices.value = transformServicePriceItemsToMenu(
			currentServiceGroup.services
		)
	}

	isPriceListOpen.value = true
}

// Close price list
const closePriceList = () => {
	isPriceListOpen.value = false
	activeServiceIndex.value = null
	transformedServices.value = []
}

// Close price list on escape key and handle click outside
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
.price-list-leave-from {
	opacity: 1;
	transform: scale(1) translateY(0);
}

/* Планшеты (1024px и менее) */
@media (max-width: 1024px) {
	.h-\[460px\] {
		height: 400px;
	}

	.w-\[500px\] {
		width: 450px;
	}

	.p-12 {
		padding: 2rem;
	}

	.text-2xl {
		font-size: 1.5rem;
	}

	.h-\[150px\] {
		height: 130px;
	}

	.absolute.w-\[500px\] {
		width: 450px;
	}

	.left-\[45px\] {
		left: 35px;
	}
}

/* Малые планшеты (768px и менее) */
@media (max-width: 768px) {
	.h-\[460px\] {
		height: 350px;
	}

	.w-\[500px\] {
		width: 100%;
		max-width: 400px;
		margin: 0 10px;
	}

	.p-12 {
		padding: 1.5rem;
	}

	.text-2xl {
		font-size: 1.25rem;
	}

	.gap-4 {
		gap: 0.75rem;
	}

	.gap-5 {
		gap: 1rem;
	}

	.h-\[150px\] {
		height: 120px;
	}

	.text-sm {
		font-size: 0.75rem;
	}

	.absolute.w-\[500px\] {
		width: calc(100vw - 40px);
		max-width: 400px;
	}

	.left-\[45px\] {
		left: 20px;
	}
}

/* Мобильные устройства (480px и менее) */
@media (max-width: 480px) {
	.h-\[460px\] {
		height: 320px;
	}

	.w-\[500px\] {
		width: 100%;
		margin: 0 5px;
	}

	.p-12 {
		padding: 1rem;
	}

	.text-2xl {
		font-size: 1.125rem;
	}

	.gap-4 {
		gap: 0.5rem;
	}

	.gap-5 {
		gap: 0.75rem;
	}

	.h-\[150px\] {
		height: 100px;
	}

	.text-sm {
		font-size: 0.6875rem;
	}

	.py-2 {
		padding-top: 0.375rem;
		padding-bottom: 0.375rem;
	}

	.absolute.w-\[500px\] {
		width: calc(100vw - 20px);
		max-width: 320px;
	}

	.left-\[45px\] {
		left: 10px;
	}
}
</style>
