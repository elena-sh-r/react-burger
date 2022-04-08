import { TIngredientType } from '../types/data';

import {
  SET_INGREDIENT_DETAILS,
  RESET_INGREDIENT_DETAILS,
  SET_MODAL_OPENED,
  RESET_MODAL_OPENED,
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
    case SET_MODAL_OPENED: {
      return {
        ...state,
        modalOpened: true,
      };
    }
    case RESET_MODAL_OPENED: {
      return {
        ...state,
        modalOpened: false,
      }
    }
    default: {
      return state;
    }
  }
}