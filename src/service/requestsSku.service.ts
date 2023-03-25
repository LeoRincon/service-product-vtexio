import axios, { AxiosStatic } from 'axios';
import { BASEURL, URLCATALOG } from '../utils/urls';
class RequestsSku {
 private urlCatalog: string;
 private baseURL: string;
 private createSKU: string;
 private HTTP: AxiosStatic;

 constructor() {
  this.baseURL = BASEURL;
  this.urlCatalog = URLCATALOG;
  this.createSKU = `/stockkeepingunit`;
  this.HTTP = axios;
 }

 postCreateSKU() {
  console.log(`${this.baseURL}${this.urlCatalog}${this.createSKU}`);
 }
 postCreateSKUFile(skuId: number) {
  console.log(
   `${this.baseURL}${this.urlCatalog}/stockkeepingunit/${skuId}/file`
  );
 }
}

export default RequestsSku;
