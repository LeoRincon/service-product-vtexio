export interface Product {
	Name: string
	CategoryId?: 999
	BrandId?: 9999
	CategoryPath?: string
	BrandName?: string
	RefId: string
	Title: string
	LinkId: string
	Description: string
	ReleaseDate: string
	IsVisible: boolean
	IsActive: boolean
	TaxCode: string
	MetaTagDescription: string
	ShowWithoutStock: boolean
	Score: number
}
export interface DataSku {
	ProductId: number
	IsActive: boolean
	ActivateIfPossible: boolean
	Name: string
	RefId: string
	Ean: string
	PackagedHeight: number
	PackagedLength: number
	PackagedWidth: number
	PackagedWeightKg: number
	Height?: null | number
	Length?: null | number
	Width?: null | number
	WeightKg?: null | number
	CubicWeight: number
	IsKit: boolean
	CreationDate: string | null
	RewardValue?: any
	EstimatedDateArrival?: string | null
	ManufacturerCode: string
	CommercialConditionId: number
	MeasurementUnit: string
	UnitMultiplier: number
	ModalType?: string | null
	KitItensSellApart?: boolean
	Videos?: string[]
}

export interface DataSkuFile {
	IsMain: boolean
	Label: string
	Name: string
	Text?: string | null
	Url: string
}

interface DataSkuPrice {
	markup: number
	basePrice: number
	listPrice: number
	// fixedPrices: FixedPrice[]
}

interface FixedPrice {
	tradePolicyId: string
	value: number
	listPrice: number
	minQuantity: number
	dateRange?: DateRange
}

interface DateRange {
	from: string
	to: string
}

interface DataInventory {
	unlimitedQuantity: boolean
	dateUtcOnBalanceSystem?: string
	quantity: number
}

interface DataInventoryExtended extends DataInventory {
	warehouseId: string
	isValid?: boolean
}

export interface SchemeError {
	instancePath: string
	schemaPath: string
	keyword: string
	params: {
		type: strig
	}
	message: string
}

export interface Warehouse {
	warehouseId: string
	warehouseName: string
	totalQuantity: number
	reservedQuantity: number
	hasUnlimitedQuantity: boolean
	timeToRefill: string | null
	dateOfSupplyUtc: string | null
}
