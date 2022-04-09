import { TIngredientType } from '../types/data';

import {
  SET_INGREDIENT_DETAILS,
  RESET_INGREDIENT_DETAILS,
} from '../constants';

import { TIngredintsDetailsActions } from 'services/actions/ingredient-details';

export type TIngredientDetailsState = {
  ingredientDetails: TIngredientType | null;
  modalOpened: boolean;
};

const initialState = {
  ingredientDetails: null,
  modalOpened: false,
};

export const ingredientDetailsReducer = (
  state: TIngredientDetailsState = initialState, 
  action: TIngredintsDetailsActions
  ): TIngredientDetailsState => {
  switch (action.type) {
    case SET_INGREDIENT_DETAILS: {
      return {
        ...state,
        ingredientDetails: action.ingredientDetails,
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