<template>
	<div class="w-full m-auto relative bg-[#1A1A1A]">
		<!-- initial section -->

		<ServicePageHeader :quotient-arr="palleteQuotient" :description />

		<ServiceExamples :images="palleteImages" />

		<!-- price -->
		<section id="price" class="mt-[90px] pb-[80px] w-fit m-auto">
			<ServicePriceGroup :services-price-group="palleteMenu" />
		</section>
	</div>
</template>

<script setup lang="ts">
import ServicePageHeader from '~/widgets/service/ui/ServicePageHeader.vue'
import ServiceExamples from '~/widgets/service/ui/ServiceExamples.vue'
import { palleteImages } from '~/widgets/service/config/serviceExampleImages'

import ServicePriceGroup from '~/widgets/service/ui/ServicePriceGroup.vue'
import { palleteMenu } from '~/entities/service/config/servicePriceConfig'

const palleteQuotient: string[] = ['Стайлінг', 'Авто']
const description =
	'Стиль авто — це вираження індивідуальності. Ми змінюємо колір за допомогою плівок, тонуємо скло, прибираємо хром, створюючи образ, що вирізняється на дорозі. Кожна деталь працює на результат — естетичний, цілісний та захищений.'
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
