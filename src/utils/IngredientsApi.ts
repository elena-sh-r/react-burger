import { PATHS } from "./constants";

import { TIngredientType } from 'services/types/data';
import { getResponse } from "utils";

const getIngredients = () => fetch(`${ PATHS.baseUrl.path }/ingredients`, {
  headers: {
      'Content-Type': 'application/json',
  },
})
  .then((res) => getResponse(res))

const setOrder = ( ingredients: ReadonlyArray<TIngredientType>, accessToken: string ) => fetch(`${ PATHS.baseUrl.path }/orders`, {
  method: 'POST',
  headers: {
      "Authorization" : accessToken,
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    ingredients: ingredients,
  })
})
.then((res) => getResponse(res))

export {
  getIngredients,
  setOrder,
}