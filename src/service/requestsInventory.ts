import axios, { AxiosStatic } from 'axios'
import { BASEURL, URLLOGISTICS } from '../utils/urls'
import { DataInventory, Warehouse } from '../type'
import { Methods } from '../utils/methods'

class RequestsInventory {
	private urlLogistics: string
	private baseURL: string
	private inventoryUrl: string
	private warehousesUrl: string
	private requestHTTP: AxiosStatic

	constructor() {
		this.baseURL = BASEURL
		this.urlLogistics = URLLOGISTICS
		this.inventoryUrl = '/inventory/skus/'
		this.warehousesUrl = '/configuration/warehouses'
		this.requestHTTP = axios
	}

	async putAddInventory(
		skuID: number,
		inventory: DataInventory,
		wareHouseId: string
	) {
		try {
			const config = {
				method: Methods.PUT,
				url: `${this.baseURL}${this.urlLogistics}${this.inventoryUrl}${skuID}/warehouses/${wareHouseId}`,
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					VtexIdclientAutCookie: process.env.VTEXIDCLIENTAUTCOOKIE
				},
				data: inventory
			}

			await this.requestHTTP(config)
			return true
		} catch (error) {
			console.log(error)
		}
	}

	async validateWarehouse(warehousesInfo: Array<string>) {
		try {
			const config = {
				method: Methods.GET,
				url: '',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					VtexIdclientAutCookie: process.env.VTEXIDCLIENTAUTCOOKIE
				}
			}
			let validatedWarehouse = []
			for (let warehouse of warehousesInfo) {
				config.url = `${this.baseURL}${this.urlLogistics}${this.warehousesUrl}/${warehouse}`
				const { data } = await this.requestHTTP(config)
				validatedWarehouse.push(data !== null ? true : false)
			}
			return validatedWarehouse
		} catch (error) {
			console.log(error)
		}
		return []
	}
}

export default RequestsInventory
