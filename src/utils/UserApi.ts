import { getResponse } from "utils";
import { PATHS } from "./constants";

const requestPasswordReset = ( email: string ) => fetch(`${ PATHS.baseUrl.path }/password-reset`, {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email,
  })
})
.then((res) => getResponse(res))

const createUser = ( email: string, password: string, name: string ) => fetch(`${ PATHS.baseUrl.path }/auth/register`, {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email,
    password,
    name,
  })
})
.then((res) => getResponse(res))

const loginUser = ( email: string, password: string ) => fetch(`${ PATHS.baseUrl.path }/auth/login`, {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email,
    password,
  })
})
.then((res) => getResponse(res))

const getToken = ( token: string ) => fetch(`${ PATHS.baseUrl.path }/auth/token`, {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    token,
  })
})
.then((res) => getResponse(res))

const getUser = ( accessToken: string ) => fetch(`${ PATHS.baseUrl.path }/auth/user`, {
  method: 'GET',
  headers: {
    "Authorization" : accessToken
  },
})
.then((res) => getResponse(res))

const exitUser = ( token: string ) => fetch(`${ PATHS.baseUrl.path }/auth/logout`, {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    token,
  })
})
.then((res) => getResponse(res))

const setPassword = ( password: string, token: string ) => fetch(`${ PATHS.baseUrl.path }/password-reset/reset`, {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    password,
    token,
  })
})
.then((res) => getResponse(res))

const setUser = ( accessToken: string, name: string, email: string, password: string ) => fetch(`${ PATHS.baseUrl.path }/auth/user`, {
  method: 'PATCH',
  headers: {
    "Authorization" : accessToken,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name,
    email,
    password,
  })
})
.then((res) => getResponse(res))

export {
  requestPasswordReset,
  setPassword,
  createUser,
  loginUser,
  getToken,
  getUser,
  exitUser,
  setUser,
}