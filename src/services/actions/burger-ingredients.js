import { getIngredients } from '../../utils/IngredientsApi'

export const GET_BURGER_INGREDIENTS_REQUEST = 'GET_API_INGREDIENTS_REQUEST';
export const GET_BURGER_INGREDIENTS_SUCCESS = 'GET_API_INGREDIENTS_SUCCESS';
export const GET_BURGER_INGREDIENTS_FAILED = 'GET_API_INGREDIENTS_FAILED';

export function getBurgerIngredients() {
  return function(dispatch) {
    dispatch({
      type: GET_BURGER_INGREDIENTS_REQUEST,
    });
    getIngredients().then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_BURGER_INGREDIENTS_SUCCESS,
          burgerIngredients: res.data,
        });
      } else {
        dispatch({
          type: GET_BURGER_INGREDIENTS_FAILED,
        })
      }
    })
    .catch(() =>  dispatch({
      type: GET_BURGER_INGREDIENTS_FAILED,
    }))
  }
}