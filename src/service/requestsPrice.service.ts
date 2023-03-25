import axios, { AxiosStatic } from 'axios';
import { DataSkuPrice } from '../type';
import { URLBASEPRICING, ACCOUNTNAME } from '../utils/urls';
import { Methods } from '../utils/methods';

class RequestsPrice {
 private urlBsePricing: string;
 private accountName: string;
 private requestHTTP: AxiosStatic;

 constructor() {
  this.urlBsePricing = URLBASEPRICING;
  this.accountName = ACCOUNTNAME;
  this.requestHTTP = axios;
 }

 async putCreateUpdatePrice(skuId: number, dataUser: DataSkuPrice) {
  console.log('putCreateUpdatePrice', skuId, dataUser);
  console.log(
   `${this.urlBsePricing}${this.accountName}/pricing/prices/${skuId}`
  );
  try {
   const config = {
    method: Methods.PUT,
    url: `${this.urlBsePricing}${this.accountName}/pricing/prices/${skuId}`,
    headers: {
     Accept: 'application/json',
     'Content-Type': 'application/json',
     VtexIdclientAutCookie: process.env.VTEXIDCLIENTAUTCOOKIE,
    },
    data: dataUser,
   };

   const { data } = await this.requestHTTP(config);
   return data;
  } catch (error) {
   console.log(error);
  }
 }
}

export default RequestsPrice;
