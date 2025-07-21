<template>
	<button :class="` bg-[#E67009] text-white cursor-pointer `">
		{{ label }}
	</button>
</template>

<script setup lang="ts">
defineProps<{
	label: string
}>()
</script>

<style scoped></style>
