import { createUser, requestPasswordReset, setPassword, loginUser, getToken, getUser, exitUser, setUser } from '../../utils/UserApi';
import { AppDispatch, AppThunk } from '../types';

import {
  REQUEST_PASSWORD_RESET_REQUEST,
  REQUEST_PASSWORD_RESET_SUCCESS,
  REQUEST_PASSWORD_RESET_FAILED,
  RESET_REQUEST_PASSWORD_RESET,
  SET_PASSWORD_REQUEST,
  SET_PASSWORD_SUCCESS,
  SET_PASSWORD_FAILED,
  RESET_SET_PASSWORD,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  RESET_CREATE_USER,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  RESET_LOGIN_USER,
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILED,
  RESET_GET_TOKEN,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  RESET_GET_USER,
  EXIT_USER_REQUEST,
  EXIT_USER_SUCCESS,
  EXIT_USER_FAILED,
  PATCH_USER_REQUEST,
  PATCH_USER_SUCCESS,
  PATCH_USER_FAILED,
  RESET_PATCH_USER,
} from '../constants';

import { TUserInfoType } from '../types/data';

// Типизация экшенов forgot-password

export interface IRequestPasswordResetRequest {
  readonly type: typeof REQUEST_PASSWORD_RESET_REQUEST;
  readonly email: string;
}

export interface IRequestPasswordResetSuccess {
  readonly type: typeof REQUEST_PASSWORD_RESET_SUCCESS;
  readonly message: string;
}

export interface IRequestPasswordResetFailed {
  readonly type: typeof REQUEST_PASSWORD_RESET_FAILED;
}

export interface IResetRequestPasswordReset {
  readonly type: typeof RESET_REQUEST_PASSWORD_RESET;
}

// Типизация экшенов reset-password

export interface ISetPasswordRequest {
  readonly type: typeof SET_PASSWORD_REQUEST;
  readonly password: string;
  readonly token: string;
}

export interface ISetPasswordSuccess {
  readonly type: typeof SET_PASSWORD_SUCCESS;
  readonly message: string;
}

export interface ISetPasswordFailed {
  readonly type: typeof SET_PASSWORD_FAILED;
}

export interface IResetSetPassword {
  readonly type: typeof RESET_SET_PASSWORD;
}

// Типизация экшенов register

export interface ICreateUserRequest {
  readonly type: typeof CREATE_USER_REQUEST;
  readonly email: string;
  readonly password: string;
  readonly name: string;
}

export interface ICreateUserSuccess {
  readonly type: typeof CREATE_USER_SUCCESS;
  readonly user: TUserInfoType;
  readonly accessToken: string;
}

export interface ICreateUserFailed {
  readonly type: typeof CREATE_USER_FAILED;
}

export interface IResetCreateUser {
  readonly type: typeof RESET_CREATE_USER;
}

// Типизация экшенов login

export interface ILoginUserRequest {
  readonly type: typeof LOGIN_USER_REQUEST;
  readonly email: string;
  readonly password: string;
}

export interface ILoginUserSuccess {
  readonly type: typeof LOGIN_USER_SUCCESS;
  readonly user: TUserInfoType;
  readonly accessToken: string;
}

export interface ILoginUserFailed {
  readonly type: typeof LOGIN_USER_FAILED;
}

export interface IResetLoginUser {
  readonly type: typeof RESET_LOGIN_USER;
}

// Типизация экшенов get token

export interface IGetTokenRequest {
  readonly type: typeof GET_TOKEN_REQUEST;
  readonly token: string;
}

export interface IGetTokenSuccess {
  readonly type: typeof GET_TOKEN_SUCCESS;
  readonly accessToken: string;
}

export interface IGetTokenFailed {
  readonly type: typeof GET_TOKEN_FAILED;
}

export interface IResetGetToken {
  readonly type: typeof RESET_GET_TOKEN;
}

// Типизация экшенов get user

export interface IGetUserRequest {
  readonly type: typeof GET_USER_REQUEST;
  readonly refreshToken: string;
  readonly accessToken: string;
}

export interface IGetUserSuccess {
  readonly type: typeof GET_USER_SUCCESS;
  readonly user: TUserInfoType;
}

export interface IGetUserFailed {
  readonly type: typeof GET_USER_FAILED;
}

export interface IResetGetUser {
  readonly type: typeof RESET_GET_USER;
}

// Типизация экшенов exit

export interface IExitUserRequest {
  readonly type: typeof EXIT_USER_REQUEST;
  readonly refreshToken: string;
}

export interface IExitUserSuccess {
  readonly type: typeof EXIT_USER_SUCCESS;
  readonly message: string;
}

export interface IExitUserFailed {
  readonly type: typeof EXIT_USER_FAILED;
}

// Типизация экшенов patch user

export interface IPatchUserRequest {
  readonly type: typeof PATCH_USER_REQUEST;
}

export interface IPatchUserSuccess {
  readonly type: typeof PATCH_USER_SUCCESS;
  readonly user: TUserInfoType;
}

export interface IPatchUserFailed {
  readonly type: typeof PATCH_USER_FAILED;
}

export interface IResetPatchUser {
  readonly type: typeof RESET_PATCH_USER;
}

// объединение в Union

export type TUserActions =
  IRequestPasswordResetRequest
  | IRequestPasswordResetSuccess
  | IRequestPasswordResetFailed
  | IResetRequestPasswordReset
  | ISetPasswordRequest
  | ISetPasswordSuccess
  | ISetPasswordFailed
  | IResetSetPassword
  | ICreateUserRequest
  | ICreateUserSuccess
  | ICreateUserFailed
  | IResetCreateUser
  | ILoginUserRequest
  | ILoginUserSuccess
  | ILoginUserFailed
  | IResetLoginUser
  | IGetTokenRequest
  | IGetTokenSuccess
  | IGetTokenFailed
  | IResetGetToken
  | IGetUserRequest
  | IGetUserSuccess
  | IGetUserFailed
  | IResetGetUser
  | IExitUserRequest
  | IExitUserSuccess
  | IExitUserFailed
  | IPatchUserRequest
  | IPatchUserSuccess
  | IPatchUserFailed
  | IResetPatchUser;

// Экшены forgot-password

export const requestPasswordResetAction = (email: string): IRequestPasswordResetRequest => ({
  type: REQUEST_PASSWORD_RESET_REQUEST,
  email,
});

export const requestPasswordResetActionSuccess = (message: string): IRequestPasswordResetSuccess => ({
  type: REQUEST_PASSWORD_RESET_SUCCESS,
  message,
});

export const requestPasswordResetActionFailed = (): IRequestPasswordResetFailed => ({
  type: REQUEST_PASSWORD_RESET_FAILED,
});

export const resetRequestPasswordResetAction = (): IResetRequestPasswordReset => ({
  type: RESET_REQUEST_PASSWORD_RESET,
});

// Экшены reset-password

export const setPasswordAction = (password: string, token: string): ISetPasswordRequest => ({
  type: SET_PASSWORD_REQUEST,
  password,
  token,
});

export const setPasswordActionSuccess = (message: string): ISetPasswordSuccess => ({
  type: SET_PASSWORD_SUCCESS,
  message,
});

export const setPasswordActionFailed = (): ISetPasswordFailed => ({
  type: SET_PASSWORD_FAILED,
});

export const resetSetPasswordAction = (): IResetSetPassword => ({
  type: RESET_SET_PASSWORD,
});

// Экшены register

export const createUserAction = ( email: string, password: string, name: string): ICreateUserRequest => ({
  type: CREATE_USER_REQUEST,
  email,
  password,
  name,
});

export const createUserActionSuccess = (user: TUserInfoType, accessToken: string): ICreateUserSuccess => ({
  type: CREATE_USER_SUCCESS,
  user,
  accessToken,
});

export const createUserActionFailed = (): ICreateUserFailed => ({
  type: CREATE_USER_FAILED,
});

export const resetCreateUserAction = (): IResetCreateUser => ({
  type: RESET_CREATE_USER,
});

// Экшены login

export const loginUserAction = ( email: string, password: string ): ILoginUserRequest => ({
  type: LOGIN_USER_REQUEST,
  email,
  password,
});

export const loginUserActionSuccess = (user: TUserInfoType, accessToken: string): ILoginUserSuccess => ({
  type: LOGIN_USER_SUCCESS,
  user,
  accessToken,
});

export const loginUserActionFailed = (): ILoginUserFailed => ({
  type: LOGIN_USER_FAILED,
});

export const resetLoginUserAction = (): IResetLoginUser => ({
  type: RESET_LOGIN_USER,
});

// Экшены get token

export const getTokenAction = ( token: string ): IGetTokenRequest => ({
  type: GET_TOKEN_REQUEST,
  token,
});

export const getTokenActionSuccess = ( accessToken: string ): IGetTokenSuccess => ({
  type: GET_TOKEN_SUCCESS,
  accessToken,
});

export const getTokenActionFailed = (): IGetTokenFailed => ({
  type: GET_TOKEN_FAILED,
});

export const resetGetTokenAction = (): IResetGetToken => ({
  type: RESET_GET_TOKEN,
});

// Экшены get user

export const getUserAction = ( refreshToken: string, accessToken: string ): IGetUserRequest => ({
  type: GET_USER_REQUEST,
  refreshToken,
  accessToken,
});

export const getUserActionSuccess = ( user: TUserInfoType ): IGetUserSuccess => ({
  type: GET_USER_SUCCESS,
  user,
});

export const getUserActionFailed = (): IGetUserFailed => ({
  type: GET_USER_FAILED,
});

export const resetGetUserAction = (): IResetGetUser => ({
  type: RESET_GET_USER,
});

// Экшены exit

export const exitUserAction = ( refreshToken: string ): IExitUserRequest => ({
  type: EXIT_USER_REQUEST,
  refreshToken,
});

export const exitUserActionSuccess = ( message: string ): IExitUserSuccess => ({
  type: EXIT_USER_SUCCESS,
  message,
});

export const exitUserActionFailed = (): IExitUserFailed => ({
  type: EXIT_USER_FAILED,
});

// Экшены patch user

export const patchUserAction = ( ): IPatchUserRequest => ({
  type: PATCH_USER_REQUEST,
});

export const patchUserActionSuccess = (user: TUserInfoType): IPatchUserSuccess => ({
  type: PATCH_USER_SUCCESS,
  user,
});

export const patchUserActionFailed = (): IPatchUserFailed => ({
  type: PATCH_USER_FAILED,
});

export const resetPatchUserAction = (): IResetPatchUser => ({
  type: RESET_PATCH_USER,
});

// Типизированный thunk forgot-password

export const requestPasswordResetThunk: AppThunk = ( email: string ) => (dispatch: AppDispatch) => {
  dispatch(requestPasswordResetAction(email));
  requestPasswordReset(email).then(res => {
    if (res && res.success) {
      dispatch(requestPasswordResetActionSuccess(res.message));
    } else {
      dispatch(requestPasswordResetActionFailed());
    }
  })
  .catch(() =>  dispatch(requestPasswordResetActionFailed()));
};

// Типизированный thunk reset-password

export const setPasswordThunk: AppThunk = ( password: string, token: string ) => (dispatch: AppDispatch) => {
  dispatch(setPasswordAction(password, token));
  setPassword(password, token).then(res => {
    if (res && res.success) {
      dispatch(setPasswordActionSuccess(res.message));
    } else {
      dispatch(setPasswordActionFailed());
    }
  })
  .catch(() =>  dispatch(setPasswordActionFailed()));
};

// Типизированный thunk register

export const createUserThunk: AppThunk = ( email: string, password: string, name: string ) => (dispatch: AppDispatch) => {
  dispatch(createUserAction(email, password, name));
  createUser(email, password, name).then(res => {
    if (res && res.success) {
      localStorage.setItem('refreshToken', res.refreshToken);
      dispatch(createUserActionSuccess(res.user, res.accessToken));
    } else {
      dispatch(createUserActionFailed());
    }
  })
  .catch(() =>  dispatch(createUserActionFailed()));
};

// Типизированный thunk login

export const loginUserThunk: AppThunk = ( email: string, password: string ) => (dispatch: AppDispatch) => {
  dispatch(loginUserAction(email, password));
  loginUser(email, password).then(res => {
    if (res && res.success) {
      localStorage.setItem('refreshToken', res.refreshToken);
      dispatch(loginUserActionSuccess(res.user, res.accessToken));
    } else {
      dispatch(loginUserActionFailed());
    }
  })
  .catch(() =>  dispatch(loginUserActionFailed()));
};

// Типизированный thunk get token

export const getTokenThunk: AppThunk = ( token: string ) => (dispatch: AppDispatch) => {
  dispatch(getTokenAction(token));
  getToken(token).then(res => {
    if (res && res.success) {
      localStorage.setItem('refreshToken', res.refreshToken);
      dispatch(getTokenActionSuccess(res.accessToken));
    } else {
      dispatch(getTokenActionFailed());
    }
  })
  .catch(() =>  dispatch(getTokenActionFailed()));
};

// Типизированный thunk get user

export const getUserThunk: AppThunk = ( refreshToken: string, accessToken: string ) => (dispatch: AppDispatch | AppThunk) => {
  dispatch(getUserAction(refreshToken, accessToken));

  if (!refreshToken){
    dispatch(getUserActionFailed());
    return;
  }

  if (!accessToken){
    getToken(refreshToken).then(res => {
      if (res && res.success) {
        localStorage.setItem('refreshToken', res.refreshToken);
        accessToken = res.accessToken;
        dispatch(getTokenActionSuccess(accessToken));
        dispatch(getUserThunk(refreshToken, accessToken));
      } else {
        dispatch(getUserActionFailed());
        return;
      }
    })
    .catch(() =>  dispatch(getUserActionFailed()));
    return;
  }

  getUser(accessToken).then(res => {
    if (res && res.success) {
      dispatch(getUserActionSuccess(res.user));
    } else if (res && !res.success && res.message === 'jwt expired') {
      dispatch(getUserThunk(refreshToken, null));
    } else {
      dispatch(getUserActionFailed());
    }
  })
  .catch(() =>  dispatch(getUserActionFailed()));
};

// Типизированный thunk exit

export const exitUserThunk: AppThunk = ( refreshToken: string ) => (dispatch: AppDispatch) => {
  dispatch(exitUserAction(refreshToken));
  exitUser(refreshToken).then(res => {
    if (res && res.success) {
      localStorage.removeItem('refreshToken');
      dispatch(exitUserActionSuccess(res.message));
    } else {
      dispatch(exitUserActionFailed());
    }
  })
  .catch(() =>  dispatch(exitUserActionFailed()));
};

// Типизированный thunk patch user

export const patchUserThunk: AppThunk = ( refreshToken: string, accessToken: string, name: string, email: string, password: string ) => (dispatch: AppDispatch | AppThunk) => {
  dispatch(patchUserAction());

  if (!refreshToken){
    dispatch(patchUserActionFailed());
    return;
  }

  if (!accessToken){
    getToken(refreshToken).then(res => {
      if (res && res.success) {
        localStorage.setItem('refreshToken', res.refreshToken);
        accessToken = res.accessToken;
        dispatch(getTokenActionSuccess(accessToken));
        dispatch(patchUserThunk(refreshToken, accessToken, name, email, password));
      } else {
        dispatch(patchUserActionFailed());
        return;
      }
    })
    .catch(() =>  dispatch(patchUserActionFailed()));
    return;
  }

  setUser(accessToken, name, email, password).then(res => {
    if (res && res.success) {
      dispatch(patchUserActionSuccess(res.user));
    } else if (res && !res.success && res.message === 'jwt expired') {
      dispatch(patchUserThunk(refreshToken, null));
    } else {
      dispatch(patchUserActionFailed());
    }
  })
  .catch(() =>  dispatch(patchUserActionFailed()));
};