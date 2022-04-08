import {
  SET_INGREDIENT_DETAILS,
  RESET_INGREDIENT_DETAILS,
  SET_MODAL_OPENED,
  RESET_MODAL_OPENED,
} from '../constants';

import { TIngredientType } from '../types/data';

export interface ISetIngredientsDetails {
  readonly type: typeof SET_INGREDIENT_DETAILS;
  readonly ingredientDetails: TIngredientType;

}

export interface IResetIngredientsDetails {
  readonly type: typeof RESET_INGREDIENT_DETAILS;
}

export interface ISetModalOpened {
  readonly type: typeof SET_MODAL_OPENED;
}

export interface IResetModalOpened {
  readonly type: typeof RESET_MODAL_OPENED;
}

export type TIngredintsDetailsActions =
  ISetIngredientsDetails
  | IResetIngredientsDetails
  | ISetModalOpened
  | IResetModalOpened;

export const setIngredientDetails = ( ingredient: TIngredientType ): ISetIngredientsDetails => ({
  type: SET_INGREDIENT_DETAILS,
  ingredientDetails: ingredient,
});

export const resetIngredientDetails = (): IResetIngredientsDetails => ({
  type: RESET_INGREDIENT_DETAILS,
});

export const setModalOpened = (): ISetModalOpened => ({
  type: SET_MODAL_OPENED,
});

export const resetModalOpened = (): IResetModalOpened => ({
  type: RESET_MODAL_OPENED,
});