import RequestsProduct from '../../service/requestsProduct'
import { NextFunction } from 'express'

const requestsProduct = new RequestsProduct()

export const productCreator = () => {
	return async (req: any, res: any, next: NextFunction) => {
		console.info('  [INFO]: productCreator START')
		const { productInfo } = req.body
		let product = await requestsProduct.postCreateProductCategoryBrand(
			productInfo
		)

		if (!product?.Id) {
			console.error(' [ERROR]: product not created')
			res.status(400).json({
				msg: product?.statusMsg
			})
		} else {
			console.info(`  [INFO]: productCreator: product ${product.Id} created`)
			console.info('  [INFO]: productCreator OK')
			req.productId = product.Id
			next()
		}
	}
}
