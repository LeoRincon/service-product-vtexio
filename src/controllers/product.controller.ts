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
	let anErrorHappend = false

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
			res.status(400).json({
				msg: msg.concat(' does not exists in the store, try another')
			})
		}
	} else {
		noCategoryValidation = true
	}

	if (noCategoryValidation || (categoryExist && brandExist)) {
		let product = await requestsProduct.postCreateProductCategoryBrand(
			body.productInfo
		)

		let productCreated = product?.status === 200 ? true : false

		if (!productCreated) {
			res.status(400).json({
				msg: product?.statusMsg
			})
			anErrorHappend = true
		} else {
			console.info('Product Created succesfully')
			console.info('processing SKU')

			for (let sku of body.skus) {
				sku.ProductId = product?.data.Id
				let skuExist: boolean | undefined = false
				if (sku.id) {
					let skuData = await requestsSku.getSKuById(sku.id)
					if (skuData?.skuExist) {
						res.status(400).json({
							msg: `the sku ${sku.id} already exist`
						})
						skuExist = true
						anErrorHappend = true
					}
				}

				if (!skuExist) {
					let skuData = await requestsSku.getSKuByRefId(sku.RefId)
					if (skuData?.skuExist) {
						res.status(400).json({
							msg: `the sku ref id ${sku.RefId} already exist`
						})
						skuExist = true
						anErrorHappend = true
					}
				}

				if (!skuExist) {
					const { Id } = await requestsSku.postCreateSKU(sku)
					console.info(`sku id: ${Id} created succesfully`)

					console.info('setting sku price')

					const dataPrice = await requestsPrice.putCreateUpdatePrice(
						Id,
						sku.priceInfo
					)

					if (dataPrice?.priceSetted) {
						console.info('price setted correctly')
					} else {
						res.status(400).json({
							msg: `price was not set, try again later`
						})
						anErrorHappend = true
					}

					for (let image of sku.skuImages) {
						const file = await requestsSku.postCreateSKUFile(Id, image)
						if (file?.isSetted) {
							console.info(`image ${file?.fileId} setted succesfully`)
						} else {
							res.status(400).json({
								msg: `image called ${image.Name}: ${file?.statusMsg}`
							})
							anErrorHappend = true
						}
					}
				}
			}
		}

		if (!anErrorHappend) {
			res.status(200).json({
				msg: 'product created succesfully'
			})
		}
	}

	//  const data = await requestsSku.postCreateSKU(body);
	//  const file = await requestsSku.postCreateSKUFile(idSku, fileDemo);
	//  const dataPrice = await requestsPrice.putCreateUpdatePrice(idSku, dataUser);

	// const Inventory = await requestsInventory.putAddInventory(
	// 	idSku,
	// 	dataInventory,
	// 	wareHouseId
	// )
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
