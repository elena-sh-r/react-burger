import {
  SET_INGREDIENT_DETAILS,
  RESET_INGREDIENT_DETAILS,
} from '../actions/ingredient-details';

const initialState = {
  ingredientDetails: null,
};

export const ingredientDetailsReducer = (state = initialState, { type, ingredientDetails }) => {
  switch (type) {
    case SET_INGREDIENT_DETAILS: {
      return {
        ...state,
        ingredientDetails,
      };
    }
    case RESET_INGREDIENT_DETAILS: {
      return {
        ...state,
        ingredientDetails: null,
      }
    }
    default: {
      return state;
    }
  }
}