<template>
	<div
		class="bg-[#1A1A1A] border border-[#2A2A2A] text-[#E8ECF0] p-6 max-w-md font-medium rounded-lg shadow-2xl max-h-[500px] overflow-y-auto"
	>
		<!-- Main Categories -->
		<div class="space-y-4">
			<div
				v-for="(serviceBlock, blockIndex) in localServices"
				:key="blockIndex"
			>
				<!-- Category Header -->
				<div class="flex items-center justify-between mb-3">
					<h2
						@click="toggleCategory(blockIndex)"
						class="text-lg font-semibold flex items-center gap-2 cursor-pointer hover:text-[#E67009] transition-colors duration-200"
					>
						{{ serviceBlock.title }}
						<svg
							width="8"
							height="5"
							viewBox="0 0 8 5"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="transition-transform duration-300"
							:class="{ 'rotate-180': serviceBlock.isExpanded }"
						>
							<path
								d="M1 1L4 4L7 1"
								stroke="#E67009"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</h2>
					<span class="text-sm text-gray-400">Від</span>
				</div>

				<!-- Category Services (Collapsible) -->
				<Transition
					name="expand"
					enter-active-class="transition-all duration-300 ease-out"
					leave-active-class="transition-all duration-300 ease-in"
					enter-from-class="opacity-0 max-h-0"
					enter-to-class="opacity-100 max-h-[1000px]"
					leave-from-class="opacity-100 max-h-[1000px]"
					leave-to-class="opacity-0 max-h-0"
				>
					<div
						v-if="serviceBlock.isExpanded"
						class="space-y-2 overflow-hidden"
					>
						<div
							v-for="(
								service, serviceIndex
							) in serviceBlock.services"
							:key="serviceIndex"
							class="border-l-2 border-transparent hover:border-[#E67009] transition-colors duration-200"
						>
							<!-- Main Service Item -->
							<div
								class="flex justify-between items-center py-2 px-3 rounded hover:bg-[#2A2A2A] transition-all duration-200 group"
							>
								<div class="flex items-center gap-2">
									<span
										class="text-sm group-hover:text-white transition-colors duration-200"
									>
										{{ service.label }}
									</span>
								</div>
								<span
									class="text-[#E67009] font-medium group-hover:scale-105 transition-transform duration-200"
								>
									{{ service.price }}
								</span>
							</div>
						</div>
					</div>
				</Transition>

				<!-- Divider between categories -->
				<div
					v-if="blockIndex < localServices.length - 1"
					class="border-t border-[#2A2A2A] my-4"
				></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IServiceMenu } from '../config/serviceConfig'
import type { IServicePrice } from '~/entities/service/config/servicePriceConfig'

const props = defineProps<{
	services: IServiceMenu[] | IServicePrice[]
}>()

const emit = defineEmits(['close'])
console.log(1)

// Create local reactive copy of services for state management
const localServices = ref<IServiceMenu[]>([])

// Initialize local services with proper reactivity
onMounted(() => {
	localServices.value = JSON.parse(JSON.stringify(props.services))
})

// Watch for props changes and update local state
watch(
	() => props.services,
	newServices => {
		localServices.value = JSON.parse(JSON.stringify(newServices))
	},
	{ deep: true }
)

// Toggle main category expansion
const toggleCategory = (categoryIndex: number) => {
	localServices.value[categoryIndex].isExpanded =
		!localServices.value[categoryIndex].isExpanded
}
</script>

<style scoped>
/* Custom scrollbar for the menu */
::-webkit-scrollbar {
	width: 6px;
}

::-webkit-scrollbar-track {
	background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
	background: #e67009;
	border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
	background: #d86308;
}

/* Smooth expand/collapse animations */
.expand-enter-active,
.expand-leave-active {
	transition: all 0.3s ease;
	overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
	opacity: 0;
	max-height: 0;
}

.expand-sub-enter-active,
.expand-sub-leave-active {
	transition: all 0.25s ease;
	overflow: hidden;
}

.expand-sub-enter-from,
.expand-sub-leave-to {
	opacity: 0;
	max-height: 0;
}

/* Планшеты (1024px и менее) */
@media (max-width: 1024px) {
	.max-w-md {
		max-width: 24rem;
	}

	.p-6 {
		padding: 1.25rem;
	}

	.max-h-\[500px\] {
		max-height: 450px;
	}
}

/* Малые планшеты (768px и менее) */
@media (max-width: 768px) {
	.max-w-md {
		max-width: 20rem;
	}

	.p-6 {
		padding: 1rem;
	}

	.text-lg {
		font-size: 1rem;
	}

	.text-sm {
		font-size: 0.75rem;
	}

	.py-2 {
		padding-top: 0.375rem;
		padding-bottom: 0.375rem;
	}

	.px-3 {
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}

	.space-y-4 > * + * {
		margin-top: 0.75rem;
	}

	.max-h-\[500px\] {
		max-height: 400px;
	}
}

/* Мобильные устройства (480px и менее) */
@media (max-width: 480px) {
	.max-w-md {
		max-width: 18rem;
	}

	.p-6 {
		padding: 0.75rem;
	}

	.text-lg {
		font-size: 0.875rem;
	}

	.text-sm {
		font-size: 0.6875rem;
	}

	.py-2 {
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
	}

	.px-3 {
		padding-left: 0.375rem;
		padding-right: 0.375rem;
	}

	.space-y-4 > * + * {
		margin-top: 0.5rem;
	}

	.space-y-2 > * + * {
		margin-top: 0.25rem;
	}

	.my-4 {
		margin-top: 0.75rem;
		margin-bottom: 0.75rem;
	}

	.max-h-\[500px\] {
		max-height: 350px;
	}

	.gap-2 {
		gap: 0.25rem;
	}

	.mb-3 {
		margin-bottom: 0.5rem;
	}
}
</style>
