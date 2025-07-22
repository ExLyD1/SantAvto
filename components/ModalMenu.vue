<template>
	<!-- Modal Sidebar -->

	<div class="fixed right-0 inset-0 z-50 bg-[#232323]/60 backdrop-blur-sm">
		<div
			class="fixed right-0 top-0 h-full w-80 bg-sidebar shadow-2xl border-r border-sidebar-border"
		>
			<!-- Header -->
			<div
				class="flex items-center justify-between p-6 border-b border-white"
			>
				<NuxtImg height="70" width="175" src="/icons/logo_white.svg" />

				<button
					@click="emit('close')"
					class="text-[#ffffff] hover:bg-sidebar-accent w-8 h-8 flex items-center justify-center cursor-pointer"
				>
					X
				</button>
			</div>

			<!-- Content -->
			<div class="flex flex-col h-full text-white">
				<div class="flex-1 overflow-y-auto p-6">
					<!-- Navigation -->
					<nav class="space-y-2 mb-8">
						<h3
							class="text-sm font-semibold text-[#ffffff] uppercase tracking-wide mb-4 px-2"
						>
							Навігація
						</h3>
						<NuxtLink
							v-for="item in navigationItems"
							:key="item.name"
							:to="item.href"
							class="flex items-center gap-3 py-3 px-4 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-lg transition-all duration-200 hover:text-primary"
						>
							<span>{{ item.name }}</span>
						</NuxtLink>
					</nav>

					<!-- Services -->
					<div class="mb-8">
						<h3
							class="text-sm font-semibold text-sidebar-foreground/70 uppercase tracking-wide mb-4 px-2"
						>
							Послуги
						</h3>
						<nav class="space-y-1">
							<NuxtLink
								v-for="item in serviceItems"
								:key="item.name"
								:to="item.href"
								class="flex items-center gap-3 py-2.5 px-4 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-lg transition-all duration-200 hover:text-primary"
							>
								<span>{{ item.name }}</span>
							</NuxtLink>
						</nav>
					</div>

					<!-- Contact -->
					<div class="mb-8">
						<h3
							class="text-sm font-semibold text-sidebar-foreground/70 uppercase tracking-wide mb-4 px-2"
						>
							Контакти
						</h3>
						<div class="space-y-3 px-2">
							<a
								href="mailto:santavtodetailing@gmail.com"
								class="flex items-center gap-3 text-sidebar-foreground transition-colors hover:text-primary"
							>
								<span class="text-sm"
									>santavtodetailing@gmail.com</span
								>
							</a>
							<a
								:href="`tel:${cleanNumber}`"
								class="flex items-center gap-3 text-sidebar-foreground transition-colors hover:text-primary"
							>
								<span class="text-sm">+380 (67) 868 50 00</span>
							</a>
						</div>
					</div>

					<!-- Social -->
					<div class="mb-6">
						<h3
							class="text-sm font-semibold text-sidebar-foreground/70 uppercase tracking-wide mb-4 px-2"
						>
							Слідкуйте за нами
						</h3>
						<div class="space-y-2 px-2">
							<NuxtLink
								to="https://youtube.com/@santavto?si=bINsRGf8FYXLXhAO"
								target="_blank"
								class="flex items-center gap-3 text-sidebar-foreground transition-colors hover:text-primary text-sm"
								>Ютуб</NuxtLink
							>

							<NuxtLink
								to="https://www.instagram.com/sant_avto?igsh=MXdtMWFpczF5Z2V5MA%3D%3D&utm_source=qr"
								target="_blank"
								class="flex items-center gap-3 text-sidebar-foreground transition-colors hover:text-primary text-sm"
								>Інстаграм</NuxtLink
							>
						</div>
					</div>
				</div>

				<!-- CTA -->
				<div class="p-6 border-t border-sidebar-border">
					<NuxtLink
						to="/contact"
						class="w-full py-3 text-base font-semibold bg-primary text-white rounded-lg"
					>
						Написати нам
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
const formattedNumber = '+380 (67) 868 50 00'

const cleanNumber = formattedNumber.replace(/[^+\d]/g, '')

const navigationItems = [
	{ name: 'Головна', href: '/' },
	{ name: 'Послуги', href: '/services' },
	{ name: "Зв'язатися з нами", href: '/contact' },
	{ name: 'Портфоліо', href: '/portfolio' },
]

const serviceItems = [
	{ name: 'Детейлінг', href: '/detailing' },
	{ name: 'Кузовні роботи', href: '/wrench' },
	{ name: 'Захист авто', href: '/protect' },
	{ name: 'Фарбування', href: '/pallete' },
]

const emit = defineEmits(['close'])
</script>
<style scoped></style>
