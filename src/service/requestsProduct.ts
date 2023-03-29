import axios, { AxiosInstance, AxiosStatic } from 'axios';
import { BASEURL, URLCATALOG } from '../utils/urls';
import { Product } from '../type';
import { Methods } from '../utils/methods';

class RequestsProduct {
 private urlCatalog: string;
 private baseURL: string;
 private createProductCategoryBrand: string;
 private requestHTTP: AxiosInstance | AxiosStatic;

 constructor() {
  this.baseURL = BASEURL;
  this.urlCatalog = URLCATALOG;
  this.createProductCategoryBrand = `/product`;
  this.requestHTTP = axios.create();
 }

 async postCreateProductCategoryBrand(productInfo: Product) {
  try {
   const config = {
    method: Methods.POST,
    url: `${this.baseURL}${this.urlCatalog}${this.createProductCategoryBrand}`,
    headers: {
     Accept: 'application/json',
     'Content-Type': 'application/json',
     VtexIdclientAutCookie: process.env.VTEXIDCLIENTAUTCOOKIE,
    },
    data: productInfo,
   };
   const { data } = await this.requestHTTP(config);
   return {
    status: 200,
    statusMsg: 'Product Created',
    Id: data.Id,
   };
  } catch (error: unknown) {
   if (axios.isAxiosError(error)) {
    return {
     status: error?.response?.status,
     statusMsg: error?.response?.data,
     data: error,
    };
   } else {
    console.error(error);
   }
  }
 }

 async validateProduct(productID: number) {
  try {
   const config = {
    method: Methods.GET,
    url: `${this.baseURL}${this.urlCatalog}${this.createProductCategoryBrand}/${productID}`,
    headers: {
     Accept: 'application/json',
     'Content-Type': 'application/json',
     VtexIdclientAutCookie: process.env.VTEXIDCLIENTAUTCOOKIE,
    },
   };
   const { data } = await this.requestHTTP(config);
   return {
    data,
    productExist: true,
   };
  } catch (error: unknown) {
   if (axios.isAxiosError(error)) {
    return {
     error,
     productExist: false,
    };
   } else {
    console.error(error);
   }
  }
 }
}

export default RequestsProduct;
