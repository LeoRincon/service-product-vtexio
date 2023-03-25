import { ajvInstance } from './ajvInstance'

const schema = {
	type: 'object',
	properties: {
		productInfo: {
			type: 'object',
			properties: {
				Name: {
					type: 'string'
				},
				CategoryPath: {
					type: 'string'
				},
				BrandName: {
					type: 'string'
				},
				RefId: {
					type: 'string'
				},
				Title: {
					type: 'string'
				},
				LinkId: {
					type: 'string'
				},
				Description: {
					type: 'string'
				},
				ReleaseDate: {
					type: 'string'
				},
				IsVisible: {
					type: 'boolean'
				},
				IsActive: {
					type: 'boolean'
				},
				TaxCode: {
					type: 'string'
				},
				MetaTagDescription: {
					type: 'string'
				},
				ShowWithoutStock: {
					type: 'boolean'
				},
				Score: {
					type: 'integer'
				}
			},
			required: ['Name', 'CategoryPath', 'BrandName', 'LinkId']
		},
		skus: {
			type: 'array',
			minItems: 1,
			maxItems: 10,
			items: [
				{
					type: 'object',
					properties: {
						ProductId: {
							type: 'null'
						},
						IsActive: {
							type: 'boolean'
						},
						ActivateIfPossible: {
							type: 'boolean'
						},
						Name: {
							type: 'string'
						},
						RefId: {
							type: 'string'
						},
						Ean: {
							type: 'string'
						},
						PackagedHeight: {
							type: 'integer'
						},
						PackagedLength: {
							type: 'integer'
						},
						PackagedWidth: {
							type: 'integer'
						},
						PackagedWeightKg: {
							type: 'integer'
						},
						Height: {
							type: 'integer'
						},
						Length: {
							type: 'integer'
						},
						Width: {
							type: 'integer'
						},
						WeightKg: {
							type: 'integer'
						},
						CubicWeight: {
							type: 'number'
						},
						IsKit: {
							type: 'boolean'
						},
						CreationDate: {
							type: 'string'
						},
						RewardValue: {
							type: 'null'
						},
						EstimatedDateArrival: {
							type: 'null'
						},
						ManufacturerCode: {
							type: 'string'
						},
						CommercialConditionId: {
							type: 'integer'
						},
						MeasurementUnit: {
							type: 'string'
						},
						UnitMultiplier: {
							type: 'integer'
						},
						ModalType: {
							type: 'null'
						},
						KitItensSellApart: {
							type: 'boolean'
						},
						Videos: {
							type: 'array',
							minItems: 0,
							maxItems: 10,
							items: [
								{
									type: 'string'
								}
							]
						}
					},
					required: [
						'ProductId',
						'Name',
						'PackagedHeight',
						'PackagedLength',
						'PackagedWidth',
						'PackagedWeightKg',
						'UnitMultiplier'
					]
				}
			]
		}
	},
	required: ['productInfo', 'skus']
}

export const productSchema = ajvInstance.compile(schema)
