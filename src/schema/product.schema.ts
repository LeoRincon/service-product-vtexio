import { ajvInstance } from './ajvInstance';

const schema = {
 type: 'object',
 properties: {
  productInfo: {
   type: 'object',
   properties: {
    Name: {
     type: 'string',
    },
    CategoryPath: {
     type: 'string',
    },
    CategoryId: {
     type: 'number',
    },
    BrandName: {
     type: 'string',
    },
    BrandId: {
     type: 'number',
    },
    RefId: {
     type: 'string',
    },
    Title: {
     type: 'string',
    },
    LinkId: {
     type: 'string',
    },
    Description: {
     type: 'string',
    },
    ReleaseDate: {
     type: 'string',
    },
    IsVisible: {
     type: 'boolean',
    },
    IsActive: {
     type: 'boolean',
    },
    TaxCode: {
     type: 'string',
    },
    MetaTagDescription: {
     type: 'string',
    },
    ShowWithoutStock: {
     type: 'boolean',
    },
    Score: {
     type: 'integer',
    },
   },
   required: ['Name', 'LinkId'],
   oneOf: [
    {
     required: ['BrandName', 'CategoryPath'],
    },
    {
     required: ['BrandId', 'CategoryId'],
    },
   ],
  },
  skus: {
   type: 'array',
   minItems: 1,
   items: [
    {
     type: 'object',
     properties: {
      ProductId: {
       type: 'null',
      },
      IsActive: {
       type: 'boolean',
      },
      ActivateIfPossible: {
       type: 'boolean',
      },
      Name: {
       type: 'string',
      },
      RefId: {
       type: 'string',
      },
      Ean: {
       type: 'string',
      },
      PackagedHeight: {
       type: 'integer',
      },
      PackagedLength: {
       type: 'integer',
      },
      PackagedWidth: {
       type: 'integer',
      },
      PackagedWeightKg: {
       type: 'integer',
      },
      Height: {
       type: 'integer',
      },
      Length: {
       type: 'integer',
      },
      Width: {
       type: 'integer',
      },
      WeightKg: {
       type: 'integer',
      },
      CubicWeight: {
       type: 'number',
      },
      IsKit: {
       type: 'boolean',
      },
      CreationDate: {
       type: 'string',
      },
      RewardValue: {
       type: 'null',
      },
      EstimatedDateArrival: {
       type: 'null',
      },
      ManufacturerCode: {
       type: 'string',
      },
      CommercialConditionId: {
       type: 'integer',
      },
      MeasurementUnit: {
       type: 'string',
      },
      UnitMultiplier: {
       type: 'integer',
      },
      ModalType: {
       type: 'null',
      },
      KitItensSellApart: {
       type: 'boolean',
      },
      Videos: {
       type: 'array',
       minItems: 0,

       items: [
        {
         type: 'string',
        },
       ],
      },
      priceInfo: {
       type: 'object',
       oneOf: [
        {
         properties: {
          costPrice: {
           type: 'null',
          },
          markup: {
           type: 'integer',
          },
          basePrice: {
           type: 'integer',
          },
         },
        },
        {
         properties: {
          costPrice: {
           type: 'integer',
          },
          markup: {
           type: 'null',
          },
          basePrice: {
           type: 'integer',
          },
         },
        },
        {
         properties: {
          costPrice: {
           type: 'integer',
          },
          markup: {
           type: 'integer',
          },
          basePrice: {
           type: 'null',
          },
         },
        },
       ],
      },
      skuImages: {
       type: 'array',
       minItems: 1,
       items: [
        {
         type: 'object',
         properties: {
          IsMain: {
           type: 'boolean',
          },
          Label: {
           type: 'string',
          },
          Name: {
           type: 'string',
          },
          Text: {
           type: 'string',
          },
          Url: {
           type: 'string',
          },
         },
         required: ['IsMain', 'Label', 'Name', 'Text', 'Url'],
        },
       ],
      },
      inventoryInfo: {
       type: 'array',
       items: [
        {
         type: 'object',
         properties: {
          inventory: {
           type: 'object',
           properties: {
            unlimitedQuantity: {
             type: 'boolean',
            },
            dateUtcOnBalanceSystem: {
             type: 'null',
            },
            quantity: {
             type: 'integer',
            },
           },
           required: [
            'unlimitedQuantity',
            'dateUtcOnBalanceSystem',
            'quantity',
           ],
          },
          warehouseId: {
           type: 'string',
          },
         },
         required: ['inventory', 'warehouseId'],
        },
       ],
      },
     },
     required: [
      'ProductId',
      'Name',
      'PackagedHeight',
      'PackagedLength',
      'PackagedWidth',
      'PackagedWeightKg',
      'UnitMultiplier',
      'priceInfo',
      'skuImages',
     ],
    },
   ],
  },
 },
 required: ['productInfo', 'skus'],
};

export const productSchema = ajvInstance.compile(schema);
