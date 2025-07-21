<template>
	<div class="flex flex-col gap-[80px]">
		<h1 class="text-[#E8ECF0] text-5xl text-center font-medium">
			Вартість сервісу:
		</h1>

		<div
			ref="videoRef"
			:class="{ animateSlideInTop: isVideoVisible }"
			class="flex"
		>
			<ServicePriceCard
				v-for="(serviceGroup, index) in servicesPriceGroup"
				:service-group="serviceGroup"
				class="bg-[#2A2A2A]"
				:class="[{ 'bg-[#1A1A1A]!': Number(index) % 2 === 0 }]"
			/>
		</div>

		<div class="text-[#E8ECF0] text-center text-sm primitka">
			<span class="text-[#E67009]">Примітка:</span> Остаточна вартість
			послуг визначається після огляду авто. У разі сильного забруднення
			чи складності робіт ціна може зрости або навпаки.
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IServicePriceGroup } from '~/entities/service/config/servicePriceConfig'
import ServicePriceCard from '~/entities/service/ui/ServicePriceCard.vue'

defineProps<{
	servicesPriceGroup: IServicePriceGroup[]
}>()

const videoRef = ref<HTMLElement | null>(null)
const isVideoVisible = useVisibility(videoRef, {
	threshold: 0.1,
})
</script>

<style scoped>
@media screen and (max-width: 1600px) {
	.gap-\[80px\] {
		gap: 40px;
	}

	.text-5xl {
		font-size: 2rem;
	}

	.flex:nth-child(2) {
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
	}

	.text-sm {
		font-size: 0.75rem;
		padding: 0 20px;
	}
}
/* Планшеты (1024px и менее) */
@media (max-width: 1024px) {
	.gap-\[80px\] {
		gap: 60px;
	}

	.text-5xl {
		font-size: 2.5rem;
	}
}

/* Малые планшеты (768px и менее) */
@media (max-width: 768px) {
	.gap-\[80px\] {
		gap: 40px;
	}

	.text-5xl {
		font-size: 2rem;
	}

	.flex:nth-child(2) {
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
	}

	.text-sm {
		font-size: 0.75rem;
		padding: 0 20px;
	}
}

/* Мобильные устройства (480px и менее) */
@media (max-width: 480px) {
	.gap-\[80px\] {
		gap: 30px;
	}

	.text-5xl {
		font-size: 1.5rem;
	}

	.flex:nth-child(2) {
		flex-direction: column;
		align-items: center;
		gap: 15px;
	}

	.text-sm {
		font-size: 0.6875rem;
		padding: 0 15px;
	}
	.primitka {
		padding-bottom: 20px;
	}
}
</style>
