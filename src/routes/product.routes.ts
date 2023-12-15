import { Router } from 'express'
import { productValidate } from '../middleware/validators/generalValidator'

import { productSchema } from '../schema/product.schema'
import { postProducts } from '../controllers/product.controller'
import { productCreator } from '../middleware/creators/productCreator'
import { validatorCategoryBrand } from '../middleware/validators/categoryBrandValidator'
import { skuValidator } from '../middleware/validators/skuValidator'
import { skuCreator } from '../middleware/creators/skuCreator'
import { priceCreator } from '../middleware/creators/priceCreator'
import { imageCreator } from '../middleware/creators/imageCreator'
import { stockCreator } from '../middleware/creators/stockCreator'
import { warehousesValidator } from '../middleware/validators/warehousesValidator'

const ProductRouter = Router()

ProductRouter.post(
	'/',
	productValidate(productSchema),
	validatorCategoryBrand(),
	productCreator(),
	skuValidator(),
	skuCreator(),
	priceCreator(),
	imageCreator(),
	warehousesValidator(),
	stockCreator(),
	postProducts
)

module.exports = ProductRouter
