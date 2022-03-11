import { TIngredientType } from '../types/data';

import {
  GET_BURGER_INGREDIENTS_REQUEST,
  GET_BURGER_INGREDIENTS_SUCCESS,
  GET_BURGER_INGREDIENTS_FAILED,
} from '../constants';

import { TBurgerIngredientsActions } from 'services/actions/burger-ingredients';

export type TBurgerIngredientsState = {
  burgerIngredients: ReadonlyArray<TIngredientType>;
  burgerIngredientsRequest: boolean;
  burgerIngredientsFailed: boolean;
};

const initialState = {
  burgerIngredients: [],
  burgerIngredientsRequest: false,
  burgerIngredientsFailed: false,
};

export const burgerIngredientsReducer = (
  state = initialState, 
  action: TBurgerIngredientsActions
  ): TBurgerIngredientsState => {
  switch (action.type) {
    case GET_BURGER_INGREDIENTS_REQUEST: {
      return {
        ...state,
        burgerIngredientsRequest: true,
      };
    }
    case GET_BURGER_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        burgerIngredientsFailed: false,
        burgerIngredients: action.burgerIngredients,
        burgerIngredientsRequest: false,
      };
    }
    case GET_BURGER_INGREDIENTS_FAILED: {
      return {
        ...state,
        burgerIngredientsFailed: true,
        burgerIngredientsRequest: false,
      };
    }
    default: {
      return state;
    }
  }
}