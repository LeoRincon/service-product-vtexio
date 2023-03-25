export interface DataSku {
 ProductId: number;
 IsActive: boolean;
 ActivateIfPossible: boolean;
 Name: string;
 RefId: string;
 Ean: string;
 PackagedHeight: number;
 PackagedLength: number;
 PackagedWidth: number;
 PackagedWeightKg: number;
 Height?: null | number;
 Length?: null | number;
 Width?: null | number;
 WeightKg?: null | number;
 CubicWeight: number;
 IsKit: boolean;
 CreationDate: string | null;
 RewardValue?: any;
 EstimatedDateArrival?: string | null;
 ManufacturerCode: string;
 CommercialConditionId: number;
 MeasurementUnit: string;
 UnitMultiplier: number;
 ModalType?: string | null;
 KitItensSellApart?: boolean;
 Videos?: string[];
}

export interface DataSkuFile {
 IsMain: boolean;
 Label: string;
 Name: string;
 Text?: string | null;
 Url: string;
}
