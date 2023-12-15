import Ajv from 'ajv'

export const ajvInstance = new Ajv({ allErrors: true, strict: false })
