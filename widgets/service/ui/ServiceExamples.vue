<template>
	<div
		class="fullExamplesContainer h-[650px] w-full max-w-[1600px] relative m-auto px-10"
	>
		<div
			class="exampleImagesContainer mt-[-50px] flex justify-center items-center"
		>
			<span
				v-for="(imageUrl, index) in images"
				:ref="el => (elRefs[index].value = el)"
				:class="{ animateSlideInTop: isVisibleList }"
			>
				<NuxtImg
					height="650"
					width="533"
					:lazy="false"
					class="object-cover min-w-0 min-h-0 exampleImage"
					:src="imageUrl"
					alt="service-example-type-image"
				/>
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	images: string[]
}>()

// 1) Масив рефів на елементи
const elRefs = props.images.map(() => ref<HTMLElement | null>(null))

// 2) Масив булевих видимостей
const isVisibleList = elRefs.map(elRef =>
	useVisibility(elRef, { threshold: 0.1 }, true)
)
</script>

<style scoped>
/* Планшеты (1024px и менее) */
@media (max-width: 1024px) {
	.fullExamplesContainer {
		height: fit-content;
	}

	.w-\[1600px\] {
		width: 100%;
		max-width: 1200px;
	}

	.w-\[533px\] {
		width: 400px;
	}

	.flex {
		flex-wrap: wrap;
		justify-content: center;
		gap: 10px;
	}
}

/* Малые планшеты (768px и менее) */
@media (max-width: 768px) {
	.h-\[650px\] {
		height: 400px;
	}

	.w-\[1600px\] {
		width: 100%;
		padding: 0 20px;
	}

	.mt-\[-50px\] {
		margin-top: -30px;
	}

	.flex {
		flex-wrap: wrap;
		justify-content: center;
		gap: 10px;
	}

	.w-\[533px\] {
		width: calc(50% - 5px);
		min-width: 250px;
	}
}

/* Мобильные устройства (480px и менее) */
@media (max-width: 480px) {
	.h-\[650px\] {
		height: auto;
		min-height: 300px;
	}

	.w-\[1600px\] {
		width: 100%;
		padding: 0 15px;
	}

	.mt-\[-50px\] {
		margin-top: -20px;
	}

	.flex {
		flex-direction: column;
		gap: 15px;
	}

	.w-\[533px\] {
		width: 100%;
		height: 200px;
	}
}

@media screen and (max-width: 1600px) {
	.exampleImage {
		height: 500px !important;
		width: 383px !important;
	}
	.exampleImagesContainer {
	}
}

@media screen and (max-width: 1180px) {
	.w-\[533px\] {
		width: calc(50% - 5px);
		min-width: 250px;
	}
}
</style>
