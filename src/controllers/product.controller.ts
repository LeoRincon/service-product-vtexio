import { Request, Response } from 'express'
import RequestsSku from '../service/requestsSku.service'
import RequestsPrice from '../service/requestsPrice.service'
import RequestsInventory from '../service/requestsInventory.service'
import RequestsCategory from '../service/requestsCategory.service'
import RequestsBrand from '../service/requestsBrand.service'
import RequestsProduct from '../service/requestsProduct.service'

import {
	idSku,
	fileDemo,
	dataUser,
	dataInventory,
	wareHouseId
} from '../dataMock' // TODO: remove this demo data

const requestsProduct = new RequestsProduct()
const requestsSku = new RequestsSku()
const requestsPrice = new RequestsPrice()
const requestsInventory = new RequestsInventory()
const requestsCategory = new RequestsCategory()
const requestsBrand = new RequestsBrand()

const getProducts = (req: Request, res: Response) => {
	res.json({
		msg: 'get API products'
	})
}

// ==================================================
const postProducts = async (req: Request, res: Response) => {
	const body = req.body
	let categoryExist = false
	let brandExist = false
	let noCategoryValidation = false

	//TODO validate body data
	// TODO: middleware to handle errors
	// TODO: create product if not exist
	// TODO: change this demo data to real data

	if (body.productInfo.CategoryId) {
		const category = await requestsCategory.validateCategory(
			body.productInfo.CategoryId
		)
		const brand = await requestsBrand.validateBrand(body.productInfo.BrandId)

		let msg = ''

		if (!category?.categoryExist) {
			msg = 'categoryId'
		} else {
			categoryExist = true
		}
		if (!brand?.brandExist) {
			msg += ' brandId'
		} else {
			brandExist = true
		}
		if (!brandExist || !categoryExist) {
			res.json({
				msg: msg.concat(' does not exists in the estore, try another')
			})
		}
	} else {
		noCategoryValidation = true
	}

	if (noCategoryValidation || (categoryExist && brandExist)) {
		let product = await requestsProduct.postCreateProductCategoryBrand(
			body.productInfo
		)
		res.json({
			msg: 'Product Created',
			productInfo: product?.data
		})
	}

	//  const data = await requestsSku.postCreateSKU(body);
	//  const file = await requestsSku.postCreateSKUFile(idSku, fileDemo);
	//  const dataPrice = await requestsPrice.putCreateUpdatePrice(idSku, dataUser);

	// const Inventory = await requestsInventory.putAddInventory(
	// 	idSku,
	// 	dataInventory,
	// 	wareHouseId
	// )

	// res.json({
	// 	msg: 'SKU created'
	// 	// result: {
	// 	// 	body,
	// 	// 	//  file,
	// 	// 	price: 'Price created',
	// 	// 	Inventory
	// 	// }
	// })
}

// ==================================================
const putProducts = (req: Request, res: Response) => {
	const id = req.params.id
	res.json({
		msg: 'put API',
		id
	})
}
const patchProducts = (req: Request, res: Response) => {
	res.json({
		msg: 'patch API'
	})
}
const deleteProducts = (req: Request, res: Response) => {
	res.json({
		msg: 'delete API'
	})
}

export { getProducts, postProducts, putProducts, patchProducts, deleteProducts }
