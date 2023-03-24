import { Request, Response, NextFunction } from 'express'

export function productValidate(ajvValidator: any) {
	return (req: Request, res: Response, next: NextFunction) => {
		const valid = ajvValidator(req.body)
		if (!valid) {
			const errors = ajvValidator.errors
			console.error(errors)
		} else {
			console.log('json propertly formated')
		}
		next()
	}
}
