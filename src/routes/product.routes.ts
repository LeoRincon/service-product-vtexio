import { Router } from 'express';
import { productValidate } from '../middleware/productValidator';
import { productSchema } from '../schema/product.schema';

import { postProducts } from '../controllers/product.controller';

const ProductRouter = Router();

ProductRouter.post('/', productValidate(productSchema), postProducts);

module.exports = ProductRouter;
