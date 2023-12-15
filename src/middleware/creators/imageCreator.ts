import { NextFunction } from 'express'
import RequestsSku from '../../service/requestsSku'

const requestsSku = new RequestsSku()

export const imageCreator = () => {
	return async (req: any, res: any, next: NextFunction) => {
		console.info('  [INFO]: imageCreator START')
		const { simplifiedSkus } = req

		let newInfo = []
		let errors = []

		for (let sku of simplifiedSkus) {
			console.info(`  [INFO]: imageCreator:  on sku ${sku.skuId} on process`)
			const { skuImages } = sku

			for (let image of skuImages) {
				const file = await requestsSku.postCreateSKUFile(sku.skuId, image)
				if (file?.isSetted) {
					console.info(`    [INFO]: imageCreator: image "${image.Name}" setted`)
				} else {
					errors.push(file)
				}
			}

			newInfo.push({
				skuId: sku.skuId,
				inventoryInfo: sku.inventoryInfo
			})
		}

		if (errors.length > 0) {
			console.error(' [ERROR]: images not setted')
			res.status(400).json({
				msg: errors.map(error => error.statusMsg)
			})
		} else {
			req.simplifiedSkus = newInfo
			console.info('  [INFO]: imageCreator OK')
			next()
		}
	}
}
