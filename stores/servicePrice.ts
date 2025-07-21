import {
	detailingPriceMenu,
	type IServicePriceGroup,
} from '~/entities/service/config/servicePriceConfig'

export const useServicePriceStore = defineStore('servicePriceStore', () => {
	const ServiceMenu = defineAsyncComponent(
		() => import('~/widgets/service/ui/ServiceMenu.vue')
	)

	const isOpen = ref(false)
	const currentComponent = ref<any>(null)
	const currentServices = ref<IServicePriceGroup[]>([])
	const currentType = ref<string>('')

	function openModal(type: 'sedan' | 'outdoor' | 'picap') {
		// Reset expansion state when opening modal
		const menuData = getServicesByType(type)
		currentServices.value = resetExpansionState(menuData)
		currentType.value = type
		currentComponent.value = ServiceMenu
		toggleModal()

		console.log(type, currentServices.value, currentComponent.value)
	}

	function toggleModal() {
		isOpen.value = !isOpen.value
	}

	// Helper function to get services by type
	function getServicesByType(
		type: 'sedan' | 'outdoor' | 'picap'
	): IServicePriceGroup[] {
		switch (type) {
			case 'sedan':
				return detailingPriceMenu.filter(item => item.type === 'sedan')
			case 'outdoor':
				return detailingPriceMenu.filter(
					item => item.type === 'outdoor'
				)
			case 'picap':
				return detailingPriceMenu.filter(item => item.type === 'picap')
			default:
				return []
		}
	}

	// Helper function to get services by type
	function getServicesByServiceType(
		type: 'detailing' | 'wrench' | 'protect' | 'pallete'
	): IServicePriceGroup[] {
		switch (type) {
			case 'detailing':
				return detailingPriceMenu.filter(item => item.type === 'sedan')
			case 'wrench':
				return detailingPriceMenu.filter(
					item => item.type === 'outdoor'
				)
			case 'protect':
				return detailingPriceMenu.filter(item => item.type === 'picap')
			case 'pallete':
				return detailingPriceMenu.filter(item => item.type === 'picap')
			default:
				return []
		}
	}

	// Helper function to reset expansion state
	function resetExpansionState(
		services: IServicePriceGroup[]
	): IServicePriceGroup[] {
		return services.map(category => ({
			...category,
			isExpanded: false,
			services: category.services.map(service => ({
				...service,
				isExpanded: false,
			})),
		}))
	}

	return {
		isOpen,
		currentComponent,
		currentServices,
		currentType,

		openModal,
		toggleModal,
		getServicesByType,
		getServicesByServiceType,
	}
})
