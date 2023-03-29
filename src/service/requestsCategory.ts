import axios, { AxiosError, AxiosStatic } from 'axios'
import { BASEURL, URLCATALOG } from '../utils/urls'
import { Methods } from '../utils/methods'
import { request } from 'http'

class RequestsCategory {
	private urlCatalog: string
	private baseURL: string
	private verifyCategory: string
	private requestHTTP: AxiosStatic

	constructor() {
		this.baseURL = BASEURL
		this.urlCatalog = URLCATALOG
		this.verifyCategory = `/category`
		this.requestHTTP = axios
	}

	async validateCategory(categoryId: number) {
		try {
			const config = {
				method: Methods.GET,
				url: `${this.baseURL}${this.urlCatalog}${this.verifyCategory}/${categoryId}`,
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					VtexIdclientAutCookie: process.env.VTEXIDCLIENTAUTCOOKIE
				}
			}
			await this.requestHTTP(config)
			return {
				status: 200,
				categoryExist: true
			}
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				return {
					status: error.response?.status,
					categoryExist: false
				}
			} else {
				return {
					status: 400,
					categoryExist: false
				}
			}
		}
	}
}

export default RequestsCategory
