import { Request, Response } from 'express';
import RequestsSku from '../service/requestsSku.service';
import RequestsPrice from '../service/requestsPrice.service';
import { idSku, fileDemo, dataUser } from '../dataMock'; // TODO: remove this demo data

const requestsSku = new RequestsSku();
const requestsPrice = new RequestsPrice();

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
 // TODO: change this demo data to real data

 //  const data = await requestsSku.postCreateSKU(body);
 //  const file = await requestsSku.postCreateSKUFile(idSku, fileDemo);

 const dataPrice = await requestsPrice.putCreateUpdatePrice(idSku, dataUser);

 res.json({
  msg: 'SKU created',
  result: {
   body,
   //  file,
   price: 'Price created',
  },
 });
};

// ==================================================
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
