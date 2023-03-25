import axios, { AxiosStatic } from 'axios';
import { BASEURL, URLCATALOG } from '../utils/urls';
import { DataSku, DataSkuFile } from '../type.d';
import { Methods } from '../utils/methods';
class RequestsSku {
 private urlCatalog: string;
 private baseURL: string;
 private createSKU: string;
 private requesHTTP: AxiosStatic;

 constructor() {
  this.baseURL = BASEURL;
  this.urlCatalog = URLCATALOG;
  this.createSKU = `/stockkeepingunit`;
  this.requesHTTP = axios;
 }

 async postCreateSKU(dataUser: DataSku) {
  try {
   const config = {
    method: Methods.POST,
    url: `${this.baseURL}${this.urlCatalog}${this.createSKU}`,
    headers: {
     Accept: 'application/json',
     'Content-Type': 'application/json',
     VtexIdclientAutCookie: process.env.VTEXIDCLIENTAUTCOOKIE,
    },
    data: dataUser,
   };
   const { data } = await this.requesHTTP(config);
   return data;
  } catch (error) {
   console.log(error);
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
     VtexIdclientAutCookie: process.env.VTEXIDCLIENTAUTCOOKIE,
    },
    data: file,
   };
   const { data } = await this.requesHTTP(config);

   return {
    skuId,
    data,
   };
  } catch (error) {
   console.log(error);
  }
 }
}

export default RequestsSku;
