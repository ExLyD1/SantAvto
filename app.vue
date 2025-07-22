<!-- app.vue -->
<template>
	<NuxtLoadingIndicator />
	<NuxtLayout>
		<!-- Поки не змонтувалися — показуємо спінер/завантажувач -->
		<div
			v-if="!isMounted"
			class="bg-[#E8ECF0] h-[700px] flex justify-center items-start mt-[15%]"
		>
			<Loader :variant="'spinner'" :size="'xl'" />
		</div>
		<!-- 'spinner' | 'ring' | 'dots' | 'pulse' | 'bars' -->
		<!-- Після mounted — рендеримо сторінку -->
		<NuxtPage v-else />
	</NuxtLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Loader from '~/components/Loader.vue' // підкоригуй шлях, якщо потрібно

// прапорець, що показує — відбулася клієнтська ініціалізація
const isMounted = ref(false)

// коли клієнтський код "прокинеться" — увімкнемо рендер сторінок
onMounted(() => {
	isMounted.value = true
})
</script>

<style>
html {
	scroll-behavior: smooth;
}
/* Chrome, Edge, Safari */
::-webkit-scrollbar {
	width: 8px; /* толщина скролла */
	height: 8px; /* толщина горизонтального */
}

::-webkit-scrollbar-track {
	background: #1a1a1a; /* фон трека */
}

::-webkit-scrollbar-thumb {
	background-color: #e67009; /* цвет ползунка */
	border-radius: 4px; /* скругление */
	border: 2px solid #1a1a1a; /* отступы вокруг ползунка */
}

::-webkit-scrollbar-thumb:hover {
	background-color: #ff8c00; /* цвет по ховеру */
}

/* Firefox */
* {
	scrollbar-width: thin; /* тонкий скролл */
	scrollbar-color: #e67009 #1a1a1a; /* thumb track */
}

/* Убираем кнопки-стрелки */
::-webkit-scrollbar-button {
	display: none !important;
	width: 0 !important;
	height: 0 !important;
}

/* Убираем “угловой” квадратик, если он есть */
::-webkit-scrollbar-corner {
	background: transparent !important;
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
</style>
