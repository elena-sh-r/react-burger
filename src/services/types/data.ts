import { ORDER_STATUS_DONE, ORDER_STATUS_PENDING } from "utils/constants";

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

export type TOrderStatusType = typeof ORDER_STATUS_DONE | typeof ORDER_STATUS_PENDING

export type TOrderType = {
  readonly number: number;
  readonly name: string;
  readonly status: TOrderStatusType;
  readonly _id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly ingredients: ReadonlyArray<string | null>;
}