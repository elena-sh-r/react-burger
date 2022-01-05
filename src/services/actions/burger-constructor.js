export const ADD_CONSTRUCTOR_INGREDIENT = 'ADD_CONSTRUCTOR_INGREDIENT';
export const DELETE_CONSTRUCTOR_INGREDIENT = 'DELETE_CONSTRUCTOR_INGREDIENT';
export const SORT_CONSTRUCTOR_INGREDIENT = 'SORT_CONSTRUCTOR_INGREDIENT';

export function addConstructorIngredient({ ingredient }) {
  return function(dispatch) {
    dispatch({
      type: ADD_CONSTRUCTOR_INGREDIENT,
      constructorIngredient: ingredient,
    });
  }
}

export function deleteConstructorIngredient({ index }) {
  return function(dispatch) {
    dispatch({
      type: DELETE_CONSTRUCTOR_INGREDIENT,
      ingredientIndex: index,
    });
  }
}

export function sortConstructorIngredient({ indexFrom, indexTo }) {
  return function(dispatch) {
    dispatch({
      type: SORT_CONSTRUCTOR_INGREDIENT,
      ingredientIndexFrom: indexFrom,
      ingredientIndexTo: indexTo,
    });
  }
}