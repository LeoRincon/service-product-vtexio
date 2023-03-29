import RequestsSku from '../../service/requestsSku'
import { NextFunction } from 'express'

const requestsSku = new RequestsSku()

export const skuValidator = () => {
	return (req: any, res: any, next: NextFunction) => {
		console.log(req.productId)
		next()
	}
}
