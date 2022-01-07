import { v4 as uuidv4 } from 'uuid';

import {
  ADD_CONSTRUCTOR_INGREDIENT,
  DELETE_CONSTRUCTOR_INGREDIENT,
  SORT_CONSTRUCTOR_INGREDIENT,
} from '../actions/burger-constructor';

const initialState = {
  constructorIngredients: [],
};

export const burgerConstructorReducer = (state = initialState, { type, constructorIngredient, ingredientIndex, ingredientIndexFrom, ingredientIndexTo }) => {
  switch (type) {
    case ADD_CONSTRUCTOR_INGREDIENT: {
      return {
        ...state,
        constructorIngredients: constructorIngredient.type === 'bun'
          ? [...state.constructorIngredients.filter(x => x.type !== 'bun'), { ...constructorIngredient, uniqueId: uuidv4() }]
          : [...state.constructorIngredients, { ...constructorIngredient, uniqueId: uuidv4() }],
      };
    }
    case DELETE_CONSTRUCTOR_INGREDIENT: {
      return {
        ...state,
        constructorIngredients: [...state.constructorIngredients.slice(0, ingredientIndex), ...state.constructorIngredients.slice(ingredientIndex + 1)],
      }
    }
    case SORT_CONSTRUCTOR_INGREDIENT: {
      return {
        ...state,
        constructorIngredients:
          ingredientIndexTo > ingredientIndexFrom
          ? [...state.constructorIngredients.slice(0, ingredientIndexFrom), ...state.constructorIngredients.slice(ingredientIndexFrom + 1, ingredientIndexTo), state.constructorIngredients[ingredientIndexFrom], ...state.constructorIngredients.slice(ingredientIndexTo)]
          : [...state.constructorIngredients.slice(0, ingredientIndexTo), state.constructorIngredients[ingredientIndexFrom], ...state.constructorIngredients.slice(ingredientIndexTo, ingredientIndexFrom), ...state.constructorIngredients.slice(ingredientIndexFrom + 1)]
      }
    }
    default: {
      return state;
    }
  }
}