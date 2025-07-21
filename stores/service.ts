import {
	palleteMenu,
	wrenchMenu,
	protectMenu,
	detailingMenu,
	type IServiceMenu,
} from '~/widgets/service/config/serviceConfig'

export const useServiceStore = defineStore('service', () => {
	const ServiceMenu = defineAsyncComponent(
		() => import('~/widgets/service/ui/ServiceMenu.vue')
	)

	const isOpen = ref(false)
	const currentComponent = ref<any>(null)
	const currentServices = ref<IServiceMenu[]>([])
	const currentType = ref<string>('')

	function openModal(type: 'detailing' | 'wrench' | 'protect' | 'pallete') {
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
		type: 'detailing' | 'wrench' | 'protect' | 'pallete'
	): IServiceMenu[] {
		switch (type) {
			case 'detailing':
				return detailingMenu
			case 'wrench':
				return wrenchMenu
			case 'protect':
				return protectMenu
			case 'pallete':
				return palleteMenu
			default:
				return []
		}
	}

	// Helper function to reset expansion state
	function resetExpansionState(services: IServiceMenu[]): IServiceMenu[] {
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
	}
})
