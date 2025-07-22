<template>
	<!-- Responsive header: mobile hamburger menu, tablet+ full navigation -->
	<header
		class="w-full h-[60px] sm:h-[70px] lg:h-[80px] text-[#232323] bg-[#E8ECF0]"
		keep-alive
	>
		<div
			class="flex items-center justify-between w-full max-w-[1600px] px-4 sm:px-6 lg:px-[20px] h-full m-auto"
		>
			<!-- logo - responsive sizing -->
			<NuxtLink to="/">
				<NuxtImg
					src="/icons/logo.svg"
					alt="logo-sant-avto-datiling-studio"
					class="w-[100px] h-[36px] sm:w-[120px] sm:h-[43px] lg:w-[138px] lg:h-[50px]"
					:lazy="false"
					format="webp"
					loading="eager"
					priority
				/>
			</NuxtLink>

			<!-- links - hidden on mobile, visible on desktop -->
			<nav class="hidden lg:flex items-center gap-[30px] xl:gap-[50px]">
				<NuxtLink
					:to="item.link"
					v-for="item in headerLinks"
					class="text-sm xl:text-base"
				>
					{{ item.label }}
				</NuxtLink>
			</nav>

			<!-- aside buttons - responsive layout -->
			<div class="flex items-center gap-4 sm:gap-8 lg:gap-[73px]">
				<!-- phone button - responsive sizing and text -->
				<NuxtLink
					to="/contact"
					class="border-[1.5px] border-[#E67009] w-[120px] h-[40px] sm:w-[140px] sm:h-[48px] lg:w-[169px] lg:h-[56px] gap-[6px] sm:gap-[8px] lg:gap-[10px] flex items-center justify-center cursor-pointer"
				>
					<NuxtImg
						src="/icons/phone.svg"
						class="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] lg:w-[19px] lg:h-[19px]"
						:lazy="false"
						alt="phone-icon"
						format="webp"
						priority
					/>

					<p class="text-xs sm:text-sm lg:text-base">Зв'язатись</p>
				</NuxtLink>

				<!-- menu button - responsive sizing -->
				<NuxtImg
					src="/icons/menu.svg"
					format="webp"
					class="cursor-pointer w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[25px] lg:h-[25px]"
					alt="menu-icon"
					:lazy="false"
					@click="toggleMenuModal"
					priority
				/>
			</div>
		</div>
	</header>

	<Teleport to="body">
		<Transition name="fade">
			<ModalMenu @close="toggleMenuModal" v-if="isMenuModalOpen"
		/></Transition>
	</Teleport>
</template>

<script setup lang="ts">
import { headerLinks } from '../config/headerConfig'

const isMenuModalOpen = ref<boolean>(false)
const toggleMenuModal = () => {
	isMenuModalOpen.value = !isMenuModalOpen.value
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
