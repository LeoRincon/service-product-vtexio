import RequestsSku from '../../service/requestsSku'
import { NextFunction } from 'express'

const requestsSku = new RequestsSku()

export const skuCreator = () => {
	return async (req: any, res: any, next: NextFunction) => {
		console.info('  [INFO]: skuCreator START')
		const { skus } = req.body

		let simplifiedInfo = []
		let errors = []

		for (let sku of skus) {
			const skuCreated = await requestsSku.postCreateSKU(sku)
			if (skuCreated.Id) {
				simplifiedInfo.push({
					skuId: skuCreated.Id,
					priceInfo: sku.priceInfo,
					skuImages: sku.skuImages,
					inventoryInfo: sku.inventoryInfo
				})
				console.info(`    [INFO]: skuCreator: sku ${skuCreated.Id} created`)
			} else {
				errors.push(skuCreated)
			}
		}

		if (errors.length > 0) {
			console.error(' [ERROR]: skus not created')
			res.status(400).json({
				msg: errors.map(error => error.statusMsg)
			})
		} else {
			console.info('  [INFO]: skuCreator OK')
			req.simplifiedSkus = simplifiedInfo
			next()
		}
	}
}
