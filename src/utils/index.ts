export const getResponse = (res: Response) => (res.ok
  ? res.json()
  : res.json()
      .then((err: Error) => Promise.reject(new Error(`${err.message} (${res.status} ${res.statusText})`))));