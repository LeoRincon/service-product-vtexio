import { Request, Response } from 'express'

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
