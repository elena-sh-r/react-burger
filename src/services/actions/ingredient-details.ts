import {
  SET_INGREDIENT_DETAILS,
  RESET_INGREDIENT_DETAILS,
} from '../constants';

import { TIngredientType } from '../types/data';

export interface ISetIngredientsDetails {
  readonly type: typeof SET_INGREDIENT_DETAILS;
  readonly ingredientDetails: TIngredientType;

}

export interface IResetIngredientsDetails {
  readonly type: typeof RESET_INGREDIENT_DETAILS;
}

export type TIngredintsDetailsActions =
  ISetIngredientsDetails
  | IResetIngredientsDetails;

export const setIngredientDetails = ( ingredient: TIngredientType ): ISetIngredientsDetails => ({
  type: SET_INGREDIENT_DETAILS,
  ingredientDetails: ingredient,
});

export const resetIngredientDetails = (): IResetIngredientsDetails => ({
  type: RESET_INGREDIENT_DETAILS,
});