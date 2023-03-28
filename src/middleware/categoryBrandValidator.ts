import { NextFunction } from 'express';
import RequestsCategory from '../service/requestsCategory';
import RequestsBrand from '../service/requestsBrand';

const requestsCategory = new RequestsCategory();
const requestsBrand = new RequestsBrand();

export const validatorCategoryBrand = () => {
 return async (req: any, res: any, next: NextFunction) => {
  const { CategoryId, BrandId } = req.body?.productInfo;
  if (!CategoryId) return next();

  const categoryExist = await requestsCategory.validateCategory(CategoryId);
  const brandExist = await requestsBrand.validateBrand(BrandId);

  if (!brandExist || !categoryExist) {
   res.status(400).json({
    msg: 'categoryId or brandId does not exists in the store, try another',
   });
  }

  return next();
 };
};
