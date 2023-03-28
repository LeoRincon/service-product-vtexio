import { Request, Response } from 'express';
import RequestsSku from '../service/requestsSku';
import RequestsPrice from '../service/requestsPrice';
import RequestsInventory from '../service/requestsInventory';
import RequestsProduct from '../service/requestsProduct';
import { validatorCategoryBrand } from '../service/validators';

import { DataInventoryExtended } from '../type';

const requestsProduct = new RequestsProduct();
const requestsSku = new RequestsSku();
const requestsPrice = new RequestsPrice();
const requestsInventory = new RequestsInventory();

// ==================================================
const postProducts = async (req: Request, res: Response) => {
 const body = req.body;
 let anErrorHappend = false;
 let warningMsg = '';

 const existCategoryBrand = await validatorCategoryBrand(
  body.productInfo.CategoryId,
  body.productInfo.BrandId
 );

 if (existCategoryBrand) {
  let product = await requestsProduct.postCreateProductCategoryBrand(
   body.productInfo
  );

  let productCreated = product?.status === 200 ? true : false;

  //product created validation
  if (!productCreated) {
   res.status(400).json({
    msg: product?.statusMsg,
   });
   anErrorHappend = true;
  } else {
   console.info('Product Created succesfully');
   console.info('processing SKU');

   //validation and creation of all skus
   for (let sku of body.skus) {
    sku.ProductId = product?.Id;
    let skuExist: boolean | undefined = false;
    if (sku.id) {
     let skuData = await requestsSku.getSKuById(sku.id);
     if (skuData?.skuExist) {
      res.status(400).json({
       msg: `the sku ${sku.id} already exist`,
      });
      skuExist = true;
      anErrorHappend = true;
     }
    }

    if (!skuExist) {
     //sku creation
     let skuData = await requestsSku.getSKuByRefId(sku.RefId);
     if (skuData?.skuExist) {
      res.status(400).json({
       msg: `the sku ref id ${sku.RefId} already exist`,
      });
      skuExist = true;
      anErrorHappend = true;
     }
    }

    if (!skuExist) {
     const { Id } = await requestsSku.postCreateSKU(sku);
     console.info(`sku id: ${Id} created succesfully`);

     console.info('setting sku price');

     const dataPrice = await requestsPrice.putCreateUpdatePrice(
      Id,
      sku.priceInfo
     );

     if (dataPrice?.priceSetted) {
      console.info('price setted correctly');
     } else {
      res.status(400).json({
       msg: `price was not set, try again later`,
      });
      anErrorHappend = true;
     }

     //linking images with skus
     for (let image of sku.skuImages) {
      const file = await requestsSku.postCreateSKUFile(Id, image);
      if (file?.isSetted) {
       console.info(`image ${file?.fileId} setted succesfully`);
      } else {
       res.status(400).json({
        msg: `image called ${image.Name}: ${file?.statusMsg}`,
       });
       anErrorHappend = true;
      }
     }

     //warehouses validation
     let warehouses: boolean[] = await requestsInventory.validateWarehouse(
      sku.inventoryInfo.map((data: DataInventoryExtended) => data.warehouseId)
     );
     let { inventoryInfo } = sku;

     //adding stock to an especific sku
     for (let i = 0; i < warehouses?.length; i++) {
      let { inventory, warehouseId } = inventoryInfo[i];
      if (warehouses[i]) {
       const Inventory = await requestsInventory.putAddInventory(
        Id,
        inventory,
        warehouseId
       );
       if (Inventory) {
        console.log(`stock on ${warehouseId} warehouse setted correctly`);
       }
      } else {
       warningMsg += `${warehouseId} warehouse does not exist, it was ommited, no stock setted \n`;
      }
     }
    }
   }
  }

  if (!anErrorHappend) {
   res.status(200).json({
    msg: 'product created succesfully',
    warningMsg,
   });
  }
 }
};

export { postProducts };
