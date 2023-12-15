import RequestsInventory from '../../service/requestsInventory'
import { NextFunction } from 'express'

const requestsInventory = new RequestsInventory()

export const stockCreator = () => {
	return async (req: any, res: any, next: NextFunction) => {
		console.info('  [INFO]: stockCreator START')
		const { simplifiedSkus } = req

		let newInfo = []
		let warningMsg = ''

		for (let sku of simplifiedSkus) {
			console.info(`    [INFO]: stockCreator: sku ${sku.skuId} on process`)
			let { inventoryInfo } = sku
			for (let warehouse of inventoryInfo) {
				if (warehouse.isValid) {
					const Inventory = await requestsInventory.putAddInventory(
						sku.skuId,
						warehouse.inventory,
						warehouse.warehouseId
					)
					if (Inventory) {
						console.info(
							`   [INFO]: stockCreator: stock on ${warehouse.warehouseId} warehouse setted correctly`
						)
					}
				} else {
					warningMsg += `warehouseID: ${warehouse.warehouseId}: warehouse does not exist, it was ommited, no stock setted \n`
				}
			}
			newInfo.push({
				skuId: sku.skuId
			})
		}

		req.simplifiedSkus = newInfo
		req.warningMsg = warningMsg
		console.info('  [INFO]: stockCreator OK')
		next()
	}
}
