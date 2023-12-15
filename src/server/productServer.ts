import cors from 'cors';
import express from 'express';
const ProductRouter = require('../routes/product.routes');

class Server {
 private app: express.Application;
 private port: number | string;
 private apiPath: string;
 private productPath: string;
 constructor() {
  //Properties
  this.app = express();
  this.port = process.env.PORT || 8080;
  this.apiPath = '/api/v1';
  this.productPath = `${this.apiPath}/products`;

  // MiddleWares
  this.middleware();

  // Methods
  this.routes();
 }

 routes() {
  this.app.use(this.productPath, ProductRouter);
 }

 middleware() {
  this.app.use(cors());
  this.app.use(express.json());
  this.app.use(express.static('public'));
 }

 listen() {
  this.app.listen(this.port, () => {
   console.log(`app running in the port ${this.port}`);
  });
 }
}

export default Server;
