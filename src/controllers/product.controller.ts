import { Request, Response } from 'express';
const getProducts = (req: Request, res: Response) => {
 res.json({
  msg: 'get API products',
 });
};
const postProducts = (req: Request, res: Response) => {
 const body = req.body;
 res.json({
  msg: 'post API changes',
  body,
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
