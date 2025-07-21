<template>
	<div class="w-full m-auto relative bg-[#1A1A1A]">
		<!-- initial section -->

		<ServicePageHeader :quotient-arr="protectQuotient" :description />

		<ServiceExamples :images="protectImages" />

		<!-- price -->
		<section id="price" class="mt-[90px] pb-[80px] w-fit m-auto">
			<ServicePriceGroup :services-price-group="protectMenu" />
		</section>
	</div>
</template>

<script setup lang="ts">
import ServicePageHeader from '~/widgets/service/ui/ServicePageHeader.vue'
import ServiceExamples from '~/widgets/service/ui/ServiceExamples.vue'
import { protectImages } from '~/widgets/service/config/serviceExampleImages'

import ServicePriceGroup from '~/widgets/service/ui/ServicePriceGroup.vue'
import { protectMenu } from '~/entities/service/config/servicePriceConfig'

const protectQuotient: string[] = ['Захист', 'Вашого', 'Авто']
const description =
	'Захист авто — це естетика і довговічність, наша кераміка надає блиск і захист, плівки зберігають лкп, антикор протистоїть іржі, усе щоб авто виглядало дорого і служило довше.'
</script>

<style scoped>
/* Планшеты (1024px и менее) */
@media (max-width: 1024px) {
	.mt-\[90px\] {
		margin-top: 60px;
	}

	.pb-\[80px\] {
		padding-bottom: 60px;
	}
}

/* Малые планшеты (768px и менее) */
@media (max-width: 768px) {
	.mt-\[90px\] {
		margin-top: 40px;
	}

	.pb-\[80px\] {
		padding-bottom: 40px;
	}

	.w-fit {
		width: 100%;
		padding: 0 20px;
	}
}

/* Мобильные устройства (480px и менее) */
@media (max-width: 480px) {
	.mt-\[90px\] {
		margin-top: 30px;
	}

	.pb-\[80px\] {
		padding-bottom: 30px;
	}

	.w-fit {
		padding: 0 15px;
	}
}
</style>
