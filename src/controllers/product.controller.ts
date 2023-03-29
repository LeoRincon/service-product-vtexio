import { Request, Response } from 'express'
import RequestsSku from '../service/requestsSku'
import RequestsPrice from '../service/requestsPrice'
import RequestsInventory from '../service/requestsInventory'
import RequestsProduct from '../service/requestsProduct'
import { validatorCategoryBrand } from '../service/validators'

import { DataInventoryExtended } from '../type'

const requestsProduct = new RequestsProduct()
const requestsSku = new RequestsSku()
const requestsPrice = new RequestsPrice()
const requestsInventory = new RequestsInventory()

// ==================================================
const postProducts = async (req: any, res: any) => {
	const { simplifiedSkus, productId, warningMsg } = req
	res.status(200).json({
		msg: `product Created Correctly`,
		warningMsg,
		productId,
		skusIds: simplifiedSkus
	})
	console.info('[postProduct]: product creation process OK')
}

export { postProducts }
