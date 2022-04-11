export type TIngredientType = {
  readonly _id?: string;
  readonly index?: number;
  readonly type: string;
  readonly image: string;
  readonly name: string;
  readonly price: number;
  readonly image_large: string;
  readonly image_mobile: string;
  readonly proteins: number;
  readonly fat: number;
  readonly carbohydrates: number;
  readonly calories: number;
  readonly uniqueId?: string; 
};

export type TOrderDetailsType = {
  readonly number: number;
};

export type TUserInfoType = {
  readonly email: string;
  readonly name: string;
}