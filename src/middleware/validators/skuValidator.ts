import RequestsSku from '../../service/requestsSku'
import { NextFunction } from 'express'

const requestsSku = new RequestsSku()

export const skuValidator = () => {
	return async (req: any, res: any, next: NextFunction) => {
		console.info('[INFO]: skuValidator START')
		const { skus } = req.body
		const { productId } = req
		let validSku = []
		let invalidSku = []
		let refIdExist: boolean | undefined = false
		let skuIdExist: boolean | undefined = false

		for (let sku of skus) {
			refIdExist = false
			skuIdExist = false
			if (sku.id) {
				let skuData = await requestsSku.getSKuById(sku.id)
				skuIdExist = skuData?.skuExist
			}

			let skuRefIdData = await requestsSku.getSKuByRefId(sku.RefId)
			refIdExist = skuRefIdData?.skuExist

			if (!refIdExist && !skuIdExist) {
				sku.ProductId = productId
				validSku.push(sku)
			} else {
				invalidSku.push(sku)
			}
		}

		if (invalidSku.length > 0) {
			console.error(' [ERROR]: skus have an invalid member')
			res.status(400).json({
				msg: invalidSku.map(
					sku =>
						`the ID or RefId on "${sku.Name}" does exist on another sku in the store`
				)
			})
		} else {
			console.info('  [INFO]: skuValidator OK')
			req.body.skus = validSku
			next()
		}
	}
}
