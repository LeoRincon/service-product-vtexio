import RequestsInventory from '../../service/requestsInventory'
import { NextFunction } from 'express'
import { DataInventoryExtended } from '../../type'

const requestsInventory = new RequestsInventory()

export const warehousesValidator = () => {
	return async (req: any, res: any, next: NextFunction) => {
		console.info('  [INFO]: warehousesValidator START')
		const { simplifiedSkus } = req

		let newInfo = []

		for (let sku of simplifiedSkus) {
			console.info(
				`    [INFO]: warehousesValidator: sku ${sku.skuId} on process`
			)

			let { inventoryInfo } = sku

			let warehouses: boolean[] = await requestsInventory.validateWarehouse(
				inventoryInfo.map((data: DataInventoryExtended) => data.warehouseId)
			)

			inventoryInfo.forEach(
				(warehouse: DataInventoryExtended, index: number) => {
					warehouse.isValid = warehouses[index]
				}
			)

			newInfo.push({
				skuId: sku.skuId,
				inventoryInfo: sku.inventoryInfo
			})
		}

		req.simplifiedSkus = newInfo
		console.info('  [INFO]: warehousesValidator OK')
		next()
	}
}
