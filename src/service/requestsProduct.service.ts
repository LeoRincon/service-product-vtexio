import axios, { AxiosStatic } from 'axios';
import { BASEURL, URLCATALOG } from '../utils/urls';
class RequestsProduct {
 private urlCatalog: string;
 private baseURL: string;
 private createProductCategoryBrand: string;
 private HTTP: AxiosStatic;

 constructor() {
  this.baseURL = BASEURL;
  this.urlCatalog = URLCATALOG;
  this.createProductCategoryBrand = `/product`;
  this.HTTP = axios;
 }

 postCreateProductCategoryBrand() {
  console.log(
   `${this.baseURL}${this.urlCatalog}${this.createProductCategoryBrand}`
  );
 }
}

export default RequestsProduct;
