import {
  ADD_CONSTRUCTOR_INGREDIENT,
  DELETE_CONSTRUCTOR_INGREDIENT,
  SORT_CONSTRUCTOR_INGREDIENT,
} from '../actions/burger-constructor';

const initialState = {
  constructorIngredients: [],
};

const arraySort = (array, indexFrom, indexTo) => {
  if (indexTo >= array.length) {
      var k = indexTo - array.length + 1;
      while (k--) {
        array.push(undefined);
      }
  }
  array.splice(indexTo, 0, array.splice(indexFrom, 1)[0]);
  return array;
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
        constructorIngredients: [...arraySort(state.constructorIngredients, ingredientIndexFrom, ingredientIndexTo)],
      }
    }
    default: {
      return state;
    }
  }
}