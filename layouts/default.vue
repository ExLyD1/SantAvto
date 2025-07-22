<template>
	<div class="flex flex-col min-h-screen">
		<Header />

		<main class="flex-grow bg-[#E8ECF0]">
			<slot></slot>
		</main>

		<Footer />

		<Analytics />
	</div>
</template>

<script setup lang="ts">
import Header from '~/features/header/ui/Header.vue'
import Footer from '~/features/footer/ui/Footer.vue'
import { Analytics } from '@vercel/analytics/nuxt'
</script>

<style scoped></style>
