import axios, { AxiosStatic } from 'axios'
import { DataSkuPrice } from '../type'
import { URLBASEPRICING, ACCOUNTNAME } from '../utils/urls'
import { Methods } from '../utils/methods'

class RequestsPrice {
	private urlBsePricing: string
	private accountName: string
	private requestHTTP: AxiosStatic

	constructor() {
		this.urlBsePricing = URLBASEPRICING
		this.accountName = ACCOUNTNAME
		this.requestHTTP = axios
	}

	async putCreateUpdatePrice(skuId: number, priceConfig: DataSkuPrice) {
		try {
			const config = {
				method: Methods.PUT,
				url: `${this.urlBsePricing}${this.accountName}/pricing/prices/${skuId}`,
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					VtexIdclientAutCookie: process.env.VTEXIDCLIENTAUTCOOKIE
				},
				data: priceConfig
			}

			await this.requestHTTP(config)
			return {
				priceSetted: true
			}
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				return {
					priceSetted: false,
					status: error?.response?.status,
					statusMsg: error?.response?.data,
					data: error
				}
			} else {
				return {
					priceSetted: false,
					status: 400,
					statusMsg: error
				}
			}
		}
	}
}

export default RequestsPrice
