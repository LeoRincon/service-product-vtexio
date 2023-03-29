import axios, { AxiosStatic } from 'axios'
import { BASEURL, URLCATALOG } from '../utils/urls'
import { DataSku, DataSkuFile } from '../type'
import { Methods } from '../utils/methods'
class RequestsSku {
	private urlCatalog: string
	private baseURL: string
	private createSKU: string
	private requestHTTP: AxiosStatic

	constructor() {
		this.baseURL = BASEURL
		this.urlCatalog = URLCATALOG
		this.createSKU = `/stockkeepingunit`
		this.requestHTTP = axios
	}

	async postCreateSKU(dataUser: DataSku) {
		try {
			const config = {
				method: Methods.POST,
				url: `${this.baseURL}${this.urlCatalog}${this.createSKU}`,
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					VtexIdclientAutCookie: process.env.VTEXIDCLIENTAUTCOOKIE
				},
				data: dataUser
			}
			const { data } = await this.requestHTTP(config)
			return {
				status: 200,
				Id: data.Id
			}
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				return {
					status: error?.response?.status,
					statusMsg: error?.response?.data
				}
			} else {
				return {
					status: 400,
					statusMsg: error
				}
			}
		}
	}

	async postCreateSKUFile(skuId: number, file: DataSkuFile) {
		try {
			const config = {
				method: Methods.POST,
				url: `${this.baseURL}${this.urlCatalog}/stockkeepingunit/${skuId}/file`,
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					VtexIdclientAutCookie: process.env.VTEXIDCLIENTAUTCOOKIE
				},
				data: file
			}
			const { data } = await this.requestHTTP(config)

			return {
				isSetted: true,
				fileId: data.Id
			}
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				return {
					isSetted: false,
					status: error?.response?.status,
					statusMsg: error?.response?.data,
					data: error
				}
			} else {
				return {
					isSetted: false,
					status: 400,
					statusMsg: error
				}
			}
		}
	}

	async getSKuById(skuId: number) {
		try {
			const config = {
				method: Methods.GET,
				url: `${this.baseURL}${this.urlCatalog}/stockkeepingunit/${skuId}`,
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					VtexIdclientAutCookie: process.env.VTEXIDCLIENTAUTCOOKIE
				}
			}
			const { data } = await this.requestHTTP(config)

			return {
				data,
				skuExist: true
			}
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				return {
					status: error.response?.status,
					skuExist: false
				}
			} else {
				console.error(error)
			}
		}
	}

	async getSKuByRefId(refId: string) {
		try {
			const config = {
				method: Methods.GET,
				url: `${this.baseURL}${this.urlCatalog}/stockkeepingunit?refId=${refId}`,
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					VtexIdclientAutCookie: process.env.VTEXIDCLIENTAUTCOOKIE
				}
			}
			const { data } = await this.requestHTTP(config)

			return {
				data,
				skuExist: true
			}
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				return {
					status: error.response?.status,
					skuExist: false
				}
			} else {
				console.error(error)
			}
		}
	}
}

export default RequestsSku
