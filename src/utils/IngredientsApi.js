import { PATHS } from "./constants";

const getResponse = (res) => (res.ok
  ? res.json()
  : res.json()
      .then((err) => Promise.reject(new Error(`${err.message} (${res.status} ${res.statusText})`))));

const getIngredients = () => fetch(`${ PATHS.ingredients.path }`, {
  headers: {
      'Content-Type': 'application/json',
  },
})
  .then((res) => getResponse(res))

const setOrder = ( ingredients ) => fetch(`${ PATHS.orders.path }`, {
  method: 'POST',
  headers: {
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