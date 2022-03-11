import { v4 as uuidv4 } from 'uuid';

import {
  ADD_CONSTRUCTOR_INGREDIENT,
  DELETE_CONSTRUCTOR_INGREDIENT,
  SORT_CONSTRUCTOR_INGREDIENT,
} from '../constants';

import { TIngredientType } from '../types/data';

export interface IAddConstructorIngredient {
  readonly type: typeof ADD_CONSTRUCTOR_INGREDIENT;
  readonly constructorIngredient: TIngredientType;
}

export interface IDeleteConstructorIngredient {
  readonly type: typeof DELETE_CONSTRUCTOR_INGREDIENT;
  readonly ingredientIndex: number;
}

export interface ISortConstructorIngredient {
  readonly type: typeof SORT_CONSTRUCTOR_INGREDIENT;
  readonly ingredientIndexFrom: number;
  readonly ingredientIndexTo: number;
}

export type TConstructorIngredientActions =
  | IAddConstructorIngredient
  | IDeleteConstructorIngredient
  | ISortConstructorIngredient;


export const addConstructorIngredient = ( ingredient: TIngredientType ): IAddConstructorIngredient => ({
  type: ADD_CONSTRUCTOR_INGREDIENT,
  constructorIngredient: { ...ingredient, uniqueId: uuidv4() },
});

export const deleteConstructorIngredient = ( index: number ): IDeleteConstructorIngredient => ({
  type: DELETE_CONSTRUCTOR_INGREDIENT,
  ingredientIndex: index,
});

export const sortConstructorIngredient = ( indexFrom: number, indexTo: number ): ISortConstructorIngredient => ({
  type: SORT_CONSTRUCTOR_INGREDIENT,
  ingredientIndexFrom: indexFrom,
  ingredientIndexTo: indexTo,
});
