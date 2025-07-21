<template>
	<div class="w-full m-auto relative bg-[#E8ECF0] text-[#232323]">
		<section
			class="contactSection h-[1000px] relative z-0 bg-[#E8ECF0] max-w-[1600px] m-auto w-full"
		>
			<div class="contactContainer py-16 px-4">
				<div class="mx-auto">
					<div
						class="contactGrid grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
					>
						<!-- Left Column - Information -->
						<div
							ref="contactQuotientRef"
							:class="{
								animateSlideInLeft: isContactQuotientVisible,
							}"
							class="infoColumn flex flex-col w-[650px] text-lg"
						>
							<!-- quotient -->
							<div
								class="quotientContainer flex flex-col gap-[15px] text-[#232323] w-[720px] text-[65px]/[100%] font-bold"
							>
								<h1
									v-for="(text, index) in quotientArr"
									class="quotientText pl-[80px]"
									:class="[
										{
											'quotientTextBorder border-l-3 border-[#E67009]':
												index === 0,
										},
									]"
								>
									{{ text }}
								</h1>
							</div>

							<div class="contactInfo flex flex-col mt-[95px]">
								<p>
									Залиште свої контакти, і наш менеджер
									зателефонує вам, щоб підібрати оптимальні
									послуги для вашого авто.
								</p>

								<div class="contactPromise font-medium">
									<span class="text-[#232323]"
										>Ми зв'яжемося з вами
									</span>
									<span class="text-[#E67009]"
										>протягом 24 годин.</span
									>
								</div>
							</div>

							<div class="workingHours flex flex-col mt-[30px]">
								<div>Наш графік роботи:</div>
								<div class="text-[#232323] font-medium">
									10:00-21:00, Понеділок-П'ятниця
								</div>
								<div
									class="addressLink text-[#E67009] font-medium"
								>
									<a
										href="https://www.google.com/maps/place/вулиця+Тепловозна,+1,+Київ,+02000/@50.4253765,30.6301958,21z/data=!4m6!3m5!1s0x40d4c5131d7ca879:0x6fa48028f40f9c8d!8m2!3d50.4253459!4d30.6301327!16s%2Fg%2F11sv87yndt?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D"
										target="_blank"
										>м. Київ, вул. Тепловозна 1</a
									>
								</div>
							</div>
						</div>

						<!-- Right Column - Contact Form -->
						<div class="formColumn rounded-lg p-8">
							<h2
								class="formTitle text-2xl font-semibold text-gray-800 mb-6"
							>
								Контактна форма
							</h2>

							<form class="contactForm space-y-6">
								<!-- Name and Phone Fields -->
								<div
									class="formFields grid grid-cols-1 md:grid-cols-2 gap-4"
								>
									<div class="inputGroup">
										<label
											class="inputLabel block text-sm font-medium text-gray-600 mb-2"
										>
											Ім'я
										</label>
										<input
											type="text"
											required
											v-model="form.userName"
											class="inputField w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E67009] focus:border-transparent outline-none transition-all duration-200"
											placeholder="Введіть ваше ім'я"
										/>
										<p
											v-if="errors.userName"
											class="errorMessage text-red-500 pt-1 pl-1"
										>
											Введіть ім'я!
										</p>
									</div>
									<div class="inputGroup">
										<label
											class="inputLabel block text-sm font-medium text-gray-600 mb-2"
										>
											Номер телефону
										</label>
										<input
											type="tel"
											required
											v-model="form.phoneNumber"
											class="inputField w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E67009] focus:border-transparent outline-none transition-all duration-200"
											placeholder="+380 XX XXX XX XX"
										/>
										<p
											v-if="errors.phoneNumber"
											class="errorMessage text-red-500 pt-1 pl-1"
										>
											Номер має бути у форматі
											+380XXXXXXXXX
										</p>
									</div>
								</div>

								<!-- Privacy Policy -->
								<div class="privacySection space-y-4">
									<h3
										class="privacyTitle text-lg font-semibold text-gray-800"
									>
										Політика конфіденційності
									</h3>
									<label
										class="checkboxContainer flex items-center gap-3 cursor-pointer"
									>
										<div
											@click="toggleCheckBox"
											class="checkboxField w-[30px] h-[24px] rounded-full flex items-center justify-center cursor-pointer border border-[#232323]"
										>
											<img
												v-show="form.isCheckedBox"
												src="/icons/checked.png"
												alt="checkbox-checked"
											/>
										</div>
										<span
											class="privacyText text-sm text-gray-600 leading-relaxed"
										>
											Поставивши галочку, ви даєте згоду
											на використання Sant Avto вашої
											інформації відповідно до нашої
											Політики конфіденційності.
										</span>
									</label>
									<p
										v-if="errors.isCheckedBox"
										class="errorMessage text-red-500"
									>
										Підтвердіть політику конфіденційності
									</p>
								</div>

								<!-- Submit Button -->
								<FilledButton
									class="submitButton w-[252px] h-[84px]"
									:label="'Надіслати'"
									@click.prevent="submitForm"
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import emailjs from 'emailjs-com'
import { useRuntimeConfig } from '#app'

const config = useRuntimeConfig().public
const quotientArr = ['Записатися на', 'Консультацію']

emailjs.init(config.emailjsPublicKey)

const form = reactive({
	userName: '',
	phoneNumber: '+380',
	isCheckedBox: false,
})

const rules: any = {
	userName: (v: string) => !!v || "Введіть ім'я!",
	phoneNumber: (v: string) =>
		/^\+380\d{9}$/.test(v) || 'Номер має бути у форматі +380XXXXXXXXX',
	isCheckedBox: (v: boolean) => v || 'Підтвердіть політику конфіденційності',
}

const errors = reactive<{ [K in keyof typeof rules]?: string }>({})

const toggleCheckBox = (): void => {
	form.isCheckedBox = !form.isCheckedBox
}

function validateField(field: string) {
	const rule = rules[field]
	const value = (form as any)[field]
	const res = rule(value)

	if (res !== true) errors[field] = res as string
	else delete errors[field]
}

function submitForm() {
	Object.keys(rules).forEach(f => validateField(f))
	if (Object.keys(errors).length !== 0) return

	// параметры для шаблона в EmailJS
	const templateParams = {
		userName: form.userName,
		message: form.phoneNumber,
		// если в EmailJS-шаблоне у вас другие поля, добавьте их здесь
	}

	emailjs
		.send(config.emailjsServiceId, config.emailjsTemplateId, templateParams)
		.then(
			() => {
				// Успех — очистим форму или покажем сообщение
				alert('Повідомлення відправлено!')
				form.userName = ''
				form.phoneNumber = '+380'
				form.isCheckedBox = false
			},
			error => {
				console.error('EmailJS error:', error)
				alert('Сталася помилка при відправці. Спробуйте пізніше.')
			}
		)
}

const contactQuotientRef = ref<HTMLElement | null>(null)
const isContactQuotientVisible = useVisibility(contactQuotientRef, {
	threshold: 0.1,
})
</script>

<style scoped>
/* Contact Section Styles */
.contactSection {
	/* Desktop styles preserved as default */
}

.contactContainer {
	/* Desktop styles preserved as default */
}

.contactGrid {
	/* Desktop styles preserved as default */
}

/* Information Column Styles */
.infoColumn {
	/* Desktop styles preserved as default */
}

.quotientContainer {
	/* Desktop styles preserved as default */
}

.quotientText {
	/* Desktop styles preserved as default */
}

.quotientTextBorder {
	/* Desktop styles preserved as default */
}

.contactInfo {
	/* Desktop styles preserved as default */
}

.contactPromise {
	/* Desktop styles preserved as default */
}

.workingHours {
	/* Desktop styles preserved as default */
}

.addressLink {
	/* Desktop styles preserved as default */
}

/* Form Column Styles */
.formColumn {
	/* Desktop styles preserved as default */
}

.formTitle {
	/* Desktop styles preserved as default */
}

.contactForm {
	/* Desktop styles preserved as default */
}

.formFields {
	/* Desktop styles preserved as default */
}

.inputGroup {
	/* Desktop styles preserved as default */
}

.inputLabel {
	/* Desktop styles preserved as default */
}

.inputField {
	/* Desktop styles preserved as default */
}

.errorMessage {
	/* Desktop styles preserved as default */
}

.privacySection {
	/* Desktop styles preserved as default */
}

.privacyTitle {
	/* Desktop styles preserved as default */
}

.checkboxContainer {
	/* Desktop styles preserved as default */
}

.checkboxField {
	/* Desktop styles preserved as default */
}

.privacyText {
	/* Desktop styles preserved as default */
}

.submitButton {
	/* Desktop styles preserved as default */
}

@media screen and (max-width: 1290px) {
	.infoColumn {
		width: fit-content;
		padding: 0px 20px;
	}
	.contactInfo p {
		width: 500px;
	}
}

/* Mobile Responsive Styles */
@media (max-width: 1090px) {
	.contactSection {
		height: auto;
		min-height: 100vh;
		padding: 20px 0;
	}

	.contactContainer {
		padding: 20px 16px;
	}

	.contactGrid {
		grid-template-columns: 1fr;
		gap: 30px;
	}

	.infoColumn {
		width: 100%;
		max-width: 100%;
		text-size: 16px;
	}

	.quotientContainer {
		width: 100%;
		max-width: 100%;
		font-size: 32px;
		line-height: 1.2;
		gap: 10px;
	}

	.quotientText {
		padding-left: 20px;
		font-size: 32px;
		line-height: 1.2;
	}

	.quotientTextBorder {
		border-left-width: 2px;
	}

	.contactInfo {
		margin-top: 40px;
	}

	.contactPromise {
		margin-top: 15px;
	}

	.workingHours {
		margin-top: 20px;
	}

	.formColumn {
		padding: 20px;
		width: 100%;
		max-width: 100%;
	}

	.formTitle {
		font-size: 20px;
		margin-bottom: 20px;
	}

	.contactForm {
		gap: 20px;
	}

	.formFields {
		grid-template-columns: 1fr;
		gap: 16px;
	}

	.inputField {
		padding: 12px 16px;
		font-size: 16px;
	}

	.checkboxContainer {
		align-items: flex-start;
		gap: 12px;
	}

	.checkboxField {
		width: 24px;
		height: 20px;
		flex-shrink: 0;
		margin-top: 2px;
	}

	.privacyText {
		font-size: 14px;
		line-height: 1.4;
	}

	.submitButton {
		width: 100%;
		height: 56px;
		max-width: 300px;
	}
}

@media screen and (max-width: 570px) {
	.contactInfo p {
		width: fit-content;
	}
}

/* Small Mobile Responsive Styles */
@media (max-width: 479px) {
	.contactContainer {
		padding: 16px 12px;
	}

	.quotientContainer {
		font-size: 28px;
	}

	.quotientText {
		padding-left: 16px;
		font-size: 28px;
	}

	.formColumn {
		padding: 16px;
	}

	.formTitle {
		font-size: 18px;
		margin-bottom: 16px;
	}

	.contactForm {
		gap: 16px;
	}

	.inputField {
		padding: 10px 14px;
		font-size: 15px;
	}

	.privacyText {
		font-size: 13px;
	}

	.submitButton {
		height: 48px;
		font-size: 16px;
	}
}
</style>
