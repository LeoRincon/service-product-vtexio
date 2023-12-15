import axios, { AxiosStatic } from 'axios'
import { BASEURL, URLCATALOG } from '../utils/urls'
import { Methods } from '../utils/methods'

class RequestsCategory {
	private urlCatalog: string
	private baseURL: string
	private verifyBrand: string
	private requestHTTP: AxiosStatic

	constructor() {
		this.baseURL = BASEURL
		this.urlCatalog = URLCATALOG
		this.verifyBrand = `/brand`
		this.requestHTTP = axios
	}

	async validateBrand(brandId: number) {
		try {
			const config = {
				method: Methods.GET,
				url: `${this.baseURL}${this.urlCatalog}${this.verifyBrand}/${brandId}`,
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					VtexIdclientAutCookie: process.env.VTEXIDCLIENTAUTCOOKIE
				}
			}
			await this.requestHTTP(config)
			return {
				status: 200,
				brandExist: true
			}
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				return {
					status: error.response?.status,
					brandExist: false
				}
			} else {
				return {
					status: 400,
					brandExist: false
				}
			}
		}
	}
}

export default RequestsCategory
