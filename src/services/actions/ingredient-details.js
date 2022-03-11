export const SET_INGREDIENT_DETAILS = 'SET_INGREDIENT_DETAILS';
export const RESET_INGREDIENT_DETAILS = 'RESET_INGREDIENT_DETAILS';

export function setIngredientDetails({ ingredient }) {
  return function(dispatch) {
    dispatch({
      type: SET_INGREDIENT_DETAILS,
      ingredientDetails: ingredient,
    });
  }
}

export function resetIngredientDetails() {
  return function(dispatch) {
    dispatch({
      type: RESET_INGREDIENT_DETAILS,
    });
  }
}