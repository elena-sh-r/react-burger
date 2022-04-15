import { PATHS } from "./constants";

import { TIngredientType } from 'services/types/data';

const getResponse = (res: Response) => (res.ok
  ? res.json()
  : res.json()
      .then((err: Error) => Promise.reject(new Error(`${err.message} (${res.status} ${res.statusText})`))));

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