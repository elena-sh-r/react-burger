import { INGREDIENTS_API_URL } from './constants';

const getResponse = (res) => (res.ok
  ? res.json()
  : res.json()
      .then((err) => Promise.reject(new Error(`${err.message} (${res.status} ${res.statusText})`))));

export const getIngredients = () => fetch(`${ INGREDIENTS_API_URL }`, {
  headers: {
      'Content-Type': 'application/json',
  },
})
  .then((res) => getResponse(res))
