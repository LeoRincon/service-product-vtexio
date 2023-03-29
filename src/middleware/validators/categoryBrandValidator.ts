import { NextFunction } from 'express'
import RequestsCategory from '../../service/requestsCategory'
import RequestsBrand from '../../service/requestsBrand'

const requestsCategory = new RequestsCategory()
const requestsBrand = new RequestsBrand()

export const validatorCategoryBrand = () => {
	return async (req: any, res: any, next: NextFunction) => {
		console.info('  [INFO]: CategoryBrand validator START')
		const { CategoryId, BrandId } = req.body?.productInfo

		if (!CategoryId) {
			console.info('  [INFO]: CategoryBrand validator OK')
			req.existCategoryBrand = true
			next()
		}

		const { categoryExist } = await requestsCategory.validateCategory(
			CategoryId
		)
		const { brandExist } = await requestsBrand.validateBrand(BrandId)

		if (!brandExist || !categoryExist) {
			console.error(' [ERROR]: Category or Brand does not exist')
			res.status(400).json({
				msg: 'categoryId or brandId does not exists in the store, try another'
			})
		} else {
			console.info('  [INFO]: CategoryBrand validator OK')
			req.existCategoryBrand = true
			next()
		}
	}
}
