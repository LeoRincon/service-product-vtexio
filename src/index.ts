import dotenv from 'dotenv';
dotenv.config();

import Server from './server/productServer';
import RequestsProduct from './service/requestsProduct.service';
import RequestsSku from './service/requestsSku.service';

const server = new Server();
const requestsProduct = new RequestsProduct();
const requestsSku = new RequestsSku();

server.listen();
requestsProduct.postCreateProductCategoryBrand();
requestsSku.postCreateSKU();
requestsSku.postCreateSKUFile(3);
