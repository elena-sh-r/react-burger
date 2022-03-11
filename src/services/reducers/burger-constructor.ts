import { TIngredientType } from '../types/data';

import {
  ADD_CONSTRUCTOR_INGREDIENT,
  DELETE_CONSTRUCTOR_INGREDIENT,
  SORT_CONSTRUCTOR_INGREDIENT,
} from '../constants';

import type { TConstructorIngredientActions } from '../actions/burger-constructor';

export type TBurgerConstructorState = {
  constructorIngredients: Array<TIngredientType>;
};

const initialState = {
  constructorIngredients: [],
};

export const burgerConstructorReducer = (
  state = initialState, 
  action: TConstructorIngredientActions
  ): TBurgerConstructorState => {
  switch (action.type) {
    case ADD_CONSTRUCTOR_INGREDIENT: {
      return {
        ...state,
        constructorIngredients: action.constructorIngredient.type === 'bun'
          ? [...state.constructorIngredients.filter( (x: {type: string}) => x.type !== 'bun'), action.constructorIngredient]
          : [...state.constructorIngredients, action.constructorIngredient],
      };
    }
    case DELETE_CONSTRUCTOR_INGREDIENT: {
      return {
        ...state,
        constructorIngredients: [...state.constructorIngredients.slice(0, action.ingredientIndex), ...state.constructorIngredients.slice(action.ingredientIndex + 1)],
      }
    }
    case SORT_CONSTRUCTOR_INGREDIENT: {
      return {
        ...state,
        constructorIngredients:
        action.ingredientIndexTo > action.ingredientIndexFrom
          ? [...state.constructorIngredients.slice(0, action.ingredientIndexFrom), ...state.constructorIngredients.slice(action.ingredientIndexFrom + 1, action.ingredientIndexTo + 1), state.constructorIngredients[action.ingredientIndexFrom], ...state.constructorIngredients.slice(action.ingredientIndexTo + 1)]
          : [...state.constructorIngredients.slice(0, action.ingredientIndexTo), state.constructorIngredients[action.ingredientIndexFrom], ...state.constructorIngredients.slice(action.ingredientIndexTo, action.ingredientIndexFrom), ...state.constructorIngredients.slice(action.ingredientIndexFrom + 1)]
      }
    }
    default: {
      return state;
    }
  }
}