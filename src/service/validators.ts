import RequestsCategory from './requestsCategory';
import RequestsBrand from './requestsBrand';

const requestsCategory = new RequestsCategory();
const requestsBrand = new RequestsBrand();

export const validatorCategoryBrand = async (
 idCategory: number,
 idBrand: number
) => {
 console.log('idCategory', idCategory, 'idBrand', idBrand);
 if (!idCategory) return true;

 const categoryExist = await requestsCategory.validateCategory(idCategory);
 const brandExist = await requestsBrand.validateBrand(idBrand);

 console.log('categoryExist', categoryExist, 'brandExist', brandExist);
 if (!brandExist || !categoryExist) {
  throw new Error(
   'categoryId or brandId does not exists in the store, try another'
  );
 }
 return true;
};
