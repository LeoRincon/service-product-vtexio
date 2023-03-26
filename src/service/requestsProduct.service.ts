import axios, { AxiosInstance, AxiosStatic } from 'axios'
import { BASEURL, URLCATALOG } from '../utils/urls'
import { Product } from '../type'
import { Methods } from '../utils/methods'

class RequestsProduct {
	private urlCatalog: string
	private baseURL: string
	private createProductCategoryBrand: string
	private requestHTTP: AxiosInstance | AxiosStatic

	constructor() {
		this.baseURL = BASEURL
		this.urlCatalog = URLCATALOG
		this.createProductCategoryBrand = `/product`
		this.requestHTTP = axios.create()
	}

	async postCreateProductCategoryBrand(productInfo: Product) {
		try {
			const config = {
				method: Methods.POST,
				url: `${this.baseURL}${this.urlCatalog}${this.createProductCategoryBrand}`,
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					VtexIdclientAutCookie: process.env.VTEXIDCLIENTAUTCOOKIE
				},
				data: productInfo
			}
			const { data } = await this.requestHTTP(config)
			return {
				status: 200,
				statusMsg: 'Product Created',
				data
			}
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				return {
					status: error.response?.status
				}
			} else {
				console.error(error)
			}
		}
	}
}

export default RequestsProduct
