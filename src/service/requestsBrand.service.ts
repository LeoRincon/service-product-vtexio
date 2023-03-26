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
			const { data } = await this.requestHTTP(config)
			return {
				data,
				brandExist: true
			}
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				return {
					status: error.response?.status,
					brandExist: false
				}
			} else {
				console.error(error)
			}
		}
	}
}

export default RequestsCategory
