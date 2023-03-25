import { Request, Response } from 'express';
import RequestsSku from '../service/requestsSku.service';

const requestsSku = new RequestsSku();

const getProducts = (req: Request, res: Response) => {
 res.json({
  msg: 'get API products',
 });
};
const postProducts = async (req: Request, res: Response) => {
 const body = req.body;

 //TODO validate body data

 // TODO: middleware to handle errors

 // TODO: create product if not exist

 // TODO: change this demo data in the file demo
 const idSku = 10220582;
 const fileDemo = {
  IsMain: false,
  Label: 'Camiseta leopard',
  Name: 'Royal-Canin-Feline-Urinary-SO',
  Text: 'textColor',
  Url: 'https://itglobers.vtexassets.com/arquivos/ids/174386-800-auto?v=637700288880100000&width=800&height=auto&aspect=true',
 };

 //  const data = await requestsSku.postCreateSKU(body);
 const file = await requestsSku.postCreateSKUFile(idSku, fileDemo);

 res.json({
  msg: 'SKU created',
  result: {
   body,
   file,
  },
 });
};
const putProducts = (req: Request, res: Response) => {
 const id = req.params.id;
 res.json({
  msg: 'put API',
  id,
 });
};
const patchProducts = (req: Request, res: Response) => {
 res.json({
  msg: 'patch API',
 });
};
const deleteProducts = (req: Request, res: Response) => {
 res.json({
  msg: 'delete API',
 });
};

export {
 getProducts,
 postProducts,
 putProducts,
 patchProducts,
 deleteProducts,
};
