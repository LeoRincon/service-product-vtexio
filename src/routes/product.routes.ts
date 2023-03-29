import { Router } from 'express'
import { productValidate } from '../middleware/validators/generalValidator'

import { productSchema } from '../schema/product.schema'
import { postProducts } from '../controllers/product.controller'
import { productCreator } from '../middleware/creators/productCreator'
import { validatorCategoryBrand } from '../middleware/validators/categoryBrandValidator'
import { skuValidator } from '../middleware/validators/skuValidator'

const ProductRouter = Router()

ProductRouter.post(
	'/',
	productValidate(productSchema),
	validatorCategoryBrand(),
	productCreator(),
	skuValidator(),
	postProducts
)

module.exports = ProductRouter
