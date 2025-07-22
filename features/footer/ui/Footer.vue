<template>
	<!-- Responsive footer: stacked layout on mobile, side-by-side on desktop -->
	<footer class="w-full bg-[#1A1A1A] text-[rgba(232,236,240,0.8)]" keep-alive>
		<!-- maps - responsive height -->
		<div class="h-[250px] sm:h-[300px] lg:h-[350px]">
			<!-- Пример iframe‑вставки -->
			<iframe
				src="https://maps.google.com/maps?q=%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2%D0%BE%D0%B7%D0%BD%D0%B0%2C+1%2C+%D0%9A%D0%B8%D1%97%D0%B2%2C+02000&z=17&output=embed"
				class="w-full h-full border-none"
				loading="lazy"
			></iframe>
		</div>

		<!-- data - responsive layout and spacing -->
		<div
			class="flex flex-col items-center justify-between max-w-[1300px] w-full px-4 sm:px-6 lg:px-[20px] pt-6 sm:pt-8 lg:pt-10 pb-4 sm:pb-5 gap-6 sm:gap-8 lg:gap-5 m-auto"
		>
			<!-- Main content - stacked on mobile, side-by-side on tablet+ -->
			<div
				class="flex flex-col md:flex-row w-full justify-between gap-8 md:gap-4"
			>
				<!-- first column - company info -->
				<div
					class="flex flex-col gap-[12px] sm:gap-[15px] text-sm order-1 md:order-1"
				>
					<NuxtLink to="/">
						<NuxtImg
							src="/icons/logo_white.svg"
							alt="logo-sant-avto-datiling-studio"
							class="w-[120px] sm:w-[140px] lg:w-auto"
							:lazy="false"
							format="webp"
						/>
					</NuxtLink>

					<div class="text-sm lg:text-base">Пн-пт, 10:00-21:00</div>

					<div
						class="border-b border-[rgba(232,236,240,0.8)] w-fit cursor-pointer text-sm lg:text-base"
					>
						<a href="mailto:santavtodetailing@gmail.com"
							>santavtodetailing@gmail.com</a
						>
					</div>

					<div class="text-[18px] sm:text-[20px] text-[#E8ECF0]">
						<a :href="`tel:${cleanNumber}`">+380 (67) 868 50 00</a>
					</div>
				</div>

				<!-- second column - navigation links -->
				<div
					class="flex flex-col gap-[15px] sm:gap-[20px] text-sm order-3 md:order-2"
				>
					<NuxtLink
						:to="item.link"
						v-for="item in footerLinks"
						class="hover:text-[#E67009] transition-colors"
					>
						{{ item.label }}
					</NuxtLink>
				</div>

				<!-- third column - social media -->
				<div
					class="flex flex-col gap-[15px] sm:gap-[17px] w-full md:w-[250px] lg:w-[297px] order-2 md:order-3"
				>
					<p
						class="text-[18px] sm:text-[20px] lg:text-[22px] text-white"
					>
						Ми в соц. мережах
					</p>

					<div
						class="flex items-center gap-[20px] sm:gap-[25px] w-full"
					>
						<a
							v-for="item in footerSocialMedia"
							class="hover:opacity-80 transition-opacity"
						>
							<NuxtImg
								:src="item.image_link"
								class="h-[25px] w-[25px] sm:h-[28px] sm:w-[28px] lg:h-[30px] lg:w-[30px] cursor-pointer"
								alt="footer-social-media-icon"
								:lazy="false"
								format="webp"
							/>
						</a>
					</div>
				</div>
			</div>

			<!-- Copyright - responsive text size -->
			<div class="text-xs sm:text-sm text-center md:text-left">
				Copyright © 2025 by SantAvto. All rights reserved.
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { footerLinks, footerSocialMedia } from '../config/footerConfig'

const formattedNumber = '+380 (67) 868 50 00'

const cleanNumber = formattedNumber.replace(/[^+\d]/g, '')
</script>

<style scoped></style>
