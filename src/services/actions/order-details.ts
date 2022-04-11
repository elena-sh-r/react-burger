import { setOrder } from '../../utils/IngredientsApi';
import { AppDispatch, AppThunk } from '../types';

import {
  GET_ORDER_DETAILS_UNAUTH_START,
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAILED,
  RESET_ORDER_DETAILS,
} from '../constants';

import { TIngredientType, TOrderDetailsType } from '../types/data';
import { getToken } from 'utils/UserApi';
import { getTokenActionSuccess } from './user';

export interface IGetOrderDetailsUnauthStart {
  readonly type: typeof GET_ORDER_DETAILS_UNAUTH_START;
}

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
  IGetOrderDetailsUnauthStart
  | IGetOrderDetailsRequest
  | IGetOrderDetailsSuccess
  | IGetOrderDetailsFailed
  | IResetOrderDetails;

export const getOrderDetailsUnauthStart = (): IGetOrderDetailsUnauthStart => ({
  type: GET_ORDER_DETAILS_UNAUTH_START,
});

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

export const getOrderDetailsThunk: AppThunk = ( refreshToken: string, accessToken: string, ingredients: ReadonlyArray<TIngredientType> ) => (dispatch: AppDispatch | AppThunk) => {
  dispatch(getOrderDetailsAction(ingredients));

  if (!refreshToken){
    dispatch(getOrderDetailsActionFailed());
    return;
  }

  if (!accessToken){
    getToken(refreshToken).then(res => {
      if (res && res.success) {
        localStorage.setItem('refreshToken', res.refreshToken);
        accessToken = res.accessToken;
        dispatch(getTokenActionSuccess(accessToken));
        dispatch(getOrderDetailsThunk(refreshToken, accessToken, ingredients));
      } else {
        dispatch(getOrderDetailsActionFailed());
        return;
      }
    })
    .catch(() =>  dispatch(getOrderDetailsActionFailed()));
    return;
  }

  setOrder(ingredients).then(res => {
    if (res && res.success) {
      dispatch(getOrderDetailsActionSuccess(res.order));
    } else if (res && !res.success && res.message === 'jwt expired') {
      dispatch(getOrderDetailsThunk(refreshToken, null, ingredients));
    } else {
      dispatch(getOrderDetailsActionFailed());
    }
  })
  .catch(() =>  dispatch(getOrderDetailsActionFailed()));
};