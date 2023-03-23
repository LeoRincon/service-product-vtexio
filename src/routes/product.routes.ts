import { Router } from 'express';

import {
 getProducts,
 postProducts,
 putProducts,
 patchProducts,
 deleteProducts,
} from '../controllers/product.controller';

const ProductRouter = Router();

ProductRouter.get('/', getProducts);
ProductRouter.post('/', postProducts);
ProductRouter.put('/:id', putProducts);
ProductRouter.patch('/:id', patchProducts);
ProductRouter.delete('/:id', deleteProducts);

module.exports = ProductRouter;
