import { Request, Response, NextFunction } from 'express'
import { SchemeError } from '../../type'

export function productValidate(ajvValidator: any) {
	return (req: Request, res: Response, next: NextFunction) => {
		const valid = ajvValidator(req.body)
		if (!valid) {
			const errors = ajvValidator.errors
			console.error('[ERROR]: invalid data')
			res.status(400).json({
				msg: errors.map(
					(error: SchemeError) => `${error.instancePath} ${error.message}`
				)
			})
		} else {
			console.info('[INFO]: generalValidator OK')
			next()
		}
	}
}
