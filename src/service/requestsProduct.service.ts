import axios from 'axios';

class RequestsProduct {
 private BASEURL = `https://itglobers.vtexcommercestable.com.br`;
 private URLCATALOG = `/api/catalog/pvt`;
 private createProductCategoryBrand = `/product`;
 private createSKU = `/stockkeepingunit`;
 private HTTP = axios;

 constructor() {}

 getDemo(id: number) {
  this.HTTP.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
   .then((res) => {
    console.log('>>>>>>>>>>', res.data);
   })
   .catch((err) => {
    console.log(err);
   });
 }

 postCreateProductCategoryBrand() {
  console.log(
   `${this.BASEURL}${this.URLCATALOG}${this.createProductCategoryBrand}`
  );
 }
 postCreateSKU() {
  console.log(`${this.BASEURL}${this.URLCATALOG}${this.createSKU}`);
 }
 postCreateSKUFile(skuId: number) {
  console.log(
   `${this.BASEURL}${this.URLCATALOG}/stockkeepingunit/${skuId}/file`
  );
 }
}

export default RequestsProduct;
