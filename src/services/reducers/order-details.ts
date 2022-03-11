import { TOrderDetailsType } from '../types/data';

import {
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAILED,
  RESET_ORDER_DETAILS,
} from '../constants';

import { TOrderDetailsActions } from 'services/actions/order-details';

export type TOrderDetailsState = {
  orderDetails: TOrderDetailsType | null;
  orderDetailsRequest: boolean;
  orderDetailsFailed: boolean;
};

const initialState = {
  orderDetails: null,
  orderDetailsRequest: false,
  orderDetailsFailed: false,
};

export const orderDetailsReducer = (state: TOrderDetailsState = initialState, 
  action: TOrderDetailsActions
  ) => {
  switch (action.type) {
    case GET_ORDER_DETAILS_REQUEST: {
      return {
        ...state,
        orderDetailsRequest: true,
      };
    }
    case GET_ORDER_DETAILS_SUCCESS: {
      return {
        ...state,
        orderDetailsFailed: false,
        orderDetails: action.orderDetails,
        orderDetailsRequest: false,
      };
    }
    case GET_ORDER_DETAILS_FAILED: {
      return {
        ...state,
        orderDetailsFailed: true,
        orderDetailsRequest: false,
      };
    }
    case RESET_ORDER_DETAILS: {
      return {
        ...state,
        orderDetails: null,
        orderDetailsFailed: false,
      }
    }
    default: {
      return state;
    }
  }
}