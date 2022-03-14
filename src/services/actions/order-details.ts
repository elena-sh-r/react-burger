import { setOrder } from '../../utils/IngredientsApi';
import { AppDispatch, AppThunk } from '../types';

import {
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAILED,
  RESET_ORDER_DETAILS,
} from '../constants';

import { TIngredientType, TOrderDetailsType } from '../types/data';

export interface IGetOrderDetailsRequest {
  readonly type: typeof GET_ORDER_DETAILS_REQUEST;
  readonly ingredients: ReadonlyArray<TIngredientType | undefined>;
}

export interface IGetOrderDetailsSuccess {
  readonly type: typeof GET_ORDER_DETAILS_SUCCESS;
  readonly orderDetails: TOrderDetailsType;
}

export interface IGetOrderDetailsFailed {
  readonly type: typeof GET_ORDER_DETAILS_FAILED;
}

export interface IResetOrderDetails {
  readonly type: typeof RESET_ORDER_DETAILS;
}

export type TOrderDetailsActions =
  IGetOrderDetailsRequest
  | IGetOrderDetailsSuccess
  | IGetOrderDetailsFailed
  | IResetOrderDetails;

export const getOrderDetailsAction = (ingredients: ReadonlyArray<TIngredientType | undefined>): IGetOrderDetailsRequest => ({
  type: GET_ORDER_DETAILS_REQUEST,
  ingredients,
});

export const getOrderDetailsActionSuccess = (orderDetails: TOrderDetailsType): IGetOrderDetailsSuccess => ({
  type: GET_ORDER_DETAILS_SUCCESS,
  orderDetails,
});

export const getOrderDetailsActionFailed = (): IGetOrderDetailsFailed => ({
  type: GET_ORDER_DETAILS_FAILED,
});

export const resetOrderDetailsAction = (): IResetOrderDetails => ({
  type: RESET_ORDER_DETAILS,
});

export const getOrderDetailsThunk: AppThunk = ( ingredients: ReadonlyArray<TIngredientType> ) => (dispatch: AppDispatch) => {
  dispatch(getOrderDetailsAction(ingredients));
  setOrder(ingredients).then(res => {
    if (res && res.success) {
      dispatch(getOrderDetailsActionSuccess(res.order));
    } else {
      dispatch(getOrderDetailsActionFailed());
    }
  })
  .catch(() =>  dispatch(getOrderDetailsActionFailed()));
};