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
          ? [...state.constructorIngredients.filter(x => x.type !== 'bun'), constructorIngredient]
          : [...state.constructorIngredients, constructorIngredient],
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
          ? [...state.constructorIngredients.slice(0, ingredientIndexFrom), ...state.constructorIngredients.slice(ingredientIndexFrom + 1, ingredientIndexTo + 1), state.constructorIngredients[ingredientIndexFrom], ...state.constructorIngredients.slice(ingredientIndexTo + 1)]
          : [...state.constructorIngredients.slice(0, ingredientIndexTo), state.constructorIngredients[ingredientIndexFrom], ...state.constructorIngredients.slice(ingredientIndexTo, ingredientIndexFrom), ...state.constructorIngredients.slice(ingredientIndexFrom + 1)]
      }
    }
    default: {
      return state;
    }
  }
}