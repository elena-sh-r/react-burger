import { setOrder } from '../../utils/IngredientsApi';

export const GET_ORDER_DETAILS_REQUEST = 'GET_ORDER_DETAILS_REQUEST';
export const GET_ORDER_DETAILS_SUCCESS = 'GET_ORDER_DETAILS_SUCCESS';
export const GET_ORDER_DETAILS_FAILED = 'GET_ORDER_DETAILS_FAILED';
export const RESET_ORDER_DETAILS = 'RESET_ORDER_DETAILS';

export function getOrderDetails({ ingredients }) {
  return function(dispatch) {
    dispatch({
      type: GET_ORDER_DETAILS_REQUEST,
    });
    setOrder(ingredients).then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_ORDER_DETAILS_SUCCESS,
          orderDetails: res.order,
        });
      } else {
        dispatch({
          type: GET_ORDER_DETAILS_FAILED,
        })
      }
    })
    .catch(() =>  dispatch({
      type: GET_ORDER_DETAILS_FAILED,
    }))
  }
}

export function resetOrderDetails() {
  return function(dispatch) {
    dispatch({
      type: RESET_ORDER_DETAILS,
    });
  }
}