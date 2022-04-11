import { TIngredientType } from 'services/types/data';
import { getIngredients } from '../../utils/IngredientsApi'
import { AppDispatch, AppThunk } from '../types';

import {
  GET_BURGER_INGREDIENTS_REQUEST,
  GET_BURGER_INGREDIENTS_SUCCESS,
  GET_BURGER_INGREDIENTS_FAILED,
} from '../constants';

export interface IGetBurgerIngredientsRequest {
  readonly type: typeof GET_BURGER_INGREDIENTS_REQUEST;
}

export interface IGetBurgerIngredientsFailed {
  readonly type: typeof GET_BURGER_INGREDIENTS_FAILED;
}

export interface IGetBurgerIngredientsSuccess {
  readonly type: typeof GET_BURGER_INGREDIENTS_SUCCESS;
  readonly burgerIngredients : ReadonlyArray<TIngredientType>;
}

export type TBurgerIngredientsActions =
  IGetBurgerIngredientsRequest
  | IGetBurgerIngredientsFailed
  | IGetBurgerIngredientsSuccess;


export const getBurgerIngredientsAction = (): IGetBurgerIngredientsRequest => ({
  type: GET_BURGER_INGREDIENTS_REQUEST,
});


export const getBurgerIngredientsFailedAction = (): IGetBurgerIngredientsFailed => ({
  type: GET_BURGER_INGREDIENTS_FAILED,
});


export const getBurgerIngredientsSuccessAction = ( burgerIngredients: ReadonlyArray<TIngredientType> ): IGetBurgerIngredientsSuccess => ({
  type: GET_BURGER_INGREDIENTS_SUCCESS,
  burgerIngredients 
});


export const getBurgerIngredientsThunk: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(getBurgerIngredientsAction());
  getIngredients().then(res => {
    if (res && res.success) {
      dispatch(getBurgerIngredientsSuccessAction(res.data));
    } else {
      dispatch(getBurgerIngredientsFailedAction());
    }
  })
  .catch(() =>  dispatch(getBurgerIngredientsFailedAction()));
};