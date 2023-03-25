import dotenv from 'dotenv';
dotenv.config();

import Server from './server/productServer';
import RequestsProduct from './service/requestsProduct.service';

const server = new Server();
const requests = new RequestsProduct();

server.listen();
requests.postCreateProductCategoryBrand();
requests.postCreateSKU();
requests.postCreateSKUFile(3);
requests.getDemo(3);
