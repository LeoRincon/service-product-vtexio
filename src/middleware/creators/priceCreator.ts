import RequestsPrice from '../../service/requestsPrice'
import { NextFunction } from 'express'

const requestsPrice = new RequestsPrice()

export const priceCreator = () => {
	return async (req: any, res: any, next: NextFunction) => {
		console.info('  [INFO]: priceCreator START')
		const { simplifiedSkus } = req

		let newInfo = []
		let errors = []

		for (let sku of simplifiedSkus) {
			const dataPrice = await requestsPrice.putCreateUpdatePrice(
				sku.skuId,
				sku.priceInfo
			)

			if (dataPrice?.priceSetted) {
				newInfo.push({
					skuId: sku.skuId,
					skuImages: sku.skuImages,
					inventoryInfo: sku.inventoryInfo
				})
				console.info(
					`    [INFO]: priceCreator: price on sku ${sku.skuId} setted`
				)
			} else {
				errors.push(dataPrice)
			}
		}

		if (errors.length > 0) {
			console.error(' [ERROR]: Prices not setted')
			res.status(400).json({
				msg: errors.map(error => error.statusMsg)
			})
		} else {
			req.simplifiedSkus = newInfo
			console.info('  [INFO]: priceCreator OK')
			next()
		}
	}
}
