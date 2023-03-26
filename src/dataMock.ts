import { DataSkuFile, DataSkuPrice, DataInventory } from './type'

export const idSku: number = 10220583
export const wareHouseId: string = '1_1'

export const fileDemo: DataSkuFile = {
	IsMain: false,
	Label: 'Camiseta leopard',
	Name: 'Royal-Canin-Feline-Urinary-SO',
	Text: 'textColor',
	Url: 'https://itglobers.vtexassets.com/arquivos/ids/174386-800-auto?v=637700288880100000&width=800&height=auto&aspect=true'
}

export const dataUser: DataSkuPrice = {
	markup: 30,
	basePrice: 100,
	listPrice: 35,
	fixedPrices: [
		{
			tradePolicyId: '1',
			value: 31,
			listPrice: 32,
			minQuantity: 1,
			dateRange: {
				from: '2022-05-21T22:00:00Z',
				to: '2023-05-28T22:00:00Z'
			}
		},
		{
			tradePolicyId: '1',
			value: 31.5,
			listPrice: 33,
			minQuantity: 2
		}
	]
}

export const dataInventory: DataInventory = {
	unlimitedQuantity: false,
	dateUtcOnBalanceSystem: 'null',
	quantity: 10
}

const wareHouseItg = {
	skuId: '10220583',
	balance: [
		{
			warehouseId: '1_1',
			warehouseName: 'Estoque Principal',
			totalQuantity: 0,
			reservedQuantity: 0,
			hasUnlimitedQuantity: false,
			timeToRefill: null,
			dateOfSupplyUtc: null
		},
		{
			warehouseId: 'impormedicalalamcen',
			warehouseName: 'Impormedical',
			totalQuantity: 0,
			reservedQuantity: 0,
			hasUnlimitedQuantity: false,
			timeToRefill: null,
			dateOfSupplyUtc: null
		},
		{
			warehouseId: '130824c',
			warehouseName: 'Mazuren',
			totalQuantity: 0,
			reservedQuantity: 0,
			hasUnlimitedQuantity: false,
			timeToRefill: null,
			dateOfSupplyUtc: null
		}
	]
}

const productPlusSku = {
	productInfo: {
		Name: 'prueba',
		CategoryId: 999,
		BrandId: 9999,
		RefId: '',
		Title: 'prueba',
		LinkId: 'prueba',
		Description: 'producto creado para la capacitacion backend',
		ReleaseDate: '2023-03-020T00:00:00',
		IsVisible: true,
		IsActive: true,
		TaxCode: '',
		MetaTagDescription: 'producto de prueba',
		ShowWithoutStock: true,
		Score: 2
	},
	skus: [
		{
			ProductId: null,
			IsActive: true,
			ActivateIfPossible: true,
			Name: 'sku1 prueba',
			RefId: '125478',
			Ean: '8949461894984',
			PackagedHeight: 10,
			PackagedLength: 10,
			PackagedWidth: 10,
			PackagedWeightKg: 10,
			Height: 10,
			Length: 10,
			Width: 10,
			WeightKg: 10,
			CubicWeight: 0.1667,
			IsKit: false,
			CreationDate: '2023-03-020T00:00:00',
			RewardValue: null,
			EstimatedDateArrival: null,
			ManufacturerCode: '123',
			CommercialConditionId: 1,
			MeasurementUnit: 'un',
			UnitMultiplier: 1,
			ModalType: null,
			KitItensSellApart: false,
			Videos: ['https://www.youtube.com/']
		}
	]
}
