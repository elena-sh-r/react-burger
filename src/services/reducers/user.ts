import { TUserInfoType } from '../types/data';

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

import { TUserActions } from 'services/actions/user';

export type TUserState = {
  message: string | null;
  requestPasswordResetRequest: boolean;
  requestPasswordResetSuccess: boolean;
  requestPasswordResetFailed: boolean;
  setPasswordRequest: boolean;
  setPasswordSuccess: boolean;
  setPasswordFailed: boolean;
  user: TUserInfoType | null;
  createUserRequest: boolean;
  createUserSuccess: boolean;
  createUserFailed: boolean;
  loginUserRequest: boolean;
  loginUserSuccess: boolean;
  loginUserFailed: boolean;
  accessToken: string | null;
  exitUserRequest: boolean;
  exitUserSuccess: boolean;
  exitUserFailed: boolean;
  patchUserRequest: boolean;
  patchUserSuccess: boolean;
  patchUserFailed: boolean;
};

const initialState = {
  message: null,
  requestPasswordResetRequest: false,
  requestPasswordResetSuccess: false,
  requestPasswordResetFailed: false,
  setPasswordRequest: false,
  setPasswordSuccess: false,
  setPasswordFailed: false,
  user: null,
  createUserRequest: false,
  createUserSuccess: false,
  createUserFailed: false,
  loginUserRequest: false,
  loginUserSuccess: false,
  loginUserFailed: false,
  accessToken: null,
  exitUserRequest: false,
  exitUserSuccess: false,
  exitUserFailed: false,
  patchUserRequest: false,
  patchUserSuccess: false,
  patchUserFailed: false,
};

export const userReducer = (state: TUserState = initialState, 
  action: TUserActions
  ) => {
  switch (action.type) {
    case REQUEST_PASSWORD_RESET_REQUEST: {
      return {
        ...state,
        requestPasswordResetRequest: true,
      };
    }
    case REQUEST_PASSWORD_RESET_SUCCESS: {
      return {
        ...state,
        requestPasswordResetFailed: false,
        requestPasswordResetSuccess: true,
        message: action.message,
        requestPasswordResetRequest: false,
      };
    }
    case REQUEST_PASSWORD_RESET_FAILED: {
      return {
        ...state,
        requestPasswordResetFailed: true,
        requestPasswordResetRequest: false,
        requestPasswordResetSuccess: false,
      };
    }
    case RESET_REQUEST_PASSWORD_RESET: {
      return {
        ...state,
        requestPasswordResetFailed: false,
        requestPasswordResetRequest: false,
        requestPasswordResetSuccess: false,
      };
    }
    case SET_PASSWORD_REQUEST: {
      return {
        ...state,
        setPasswordRequest: true,
      };
    }
    case SET_PASSWORD_SUCCESS: {
      return {
        ...state,
        setPasswordFailed: false,
        setPasswordSuccess: true,
        message: action.message,
        setPasswordRequest: false,
      };
    }
    case SET_PASSWORD_FAILED: {
      return {
        ...state,
        setPasswordFailed: true,
        setPasswordRequest: false,
        setPasswordSuccess: false,
      };
    }
    case RESET_SET_PASSWORD: {
      return {
        ...state,
        setPasswordFailed: false,
        setPasswordRequest: false,
        setPasswordSuccess: false,
      };
    }
    case CREATE_USER_REQUEST: {
      return {
        ...state,
        createUserRequest: true,
        accessToken: null,
      };
    }
    case CREATE_USER_SUCCESS: {
      return {
        ...state,
        createUserRequest: false,
        createUserSuccess: true,
        user: action.user,
        createUserFailed: false,
        accessToken: action.accessToken,
      };
    }
    case CREATE_USER_FAILED: {
      return {
        ...state,
        createUserFailed: true,
        createUserRequest: false,
        createUserSuccess: false,
      };
    }
    case RESET_CREATE_USER: {
      return {
        ...state,
        createUserFailed: false,
        createUserRequest: false,
        createUserSuccess: false,
      };
    }
    case LOGIN_USER_REQUEST: {
      return {
        ...state,
        loginUserRequest: true,
        accessToken: null,
      };
    }
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        loginUserRequest: false,
        loginUserSuccess: true,
        user: action.user,
        loginUserFailed: false,
        accessToken: action.accessToken,
      };
    }
    case LOGIN_USER_FAILED: {
      return {
        ...state,
        loginUserFailed: true,
        loginUserRequest: false,
        loginUserSuccess: false,
      };
    }
    case RESET_LOGIN_USER: {
      return {
        ...state,
        loginUserFailed: false,
        loginUserRequest: false,
        loginUserSuccess: false,
      };
    }
    case GET_TOKEN_REQUEST: {
      return {
        ...state,
        getTokenRequest: true,
        accessToken: null,
      };
    }
    case GET_TOKEN_SUCCESS: {
      return {
        ...state,
        getTokenRequest: false,
        getTokenSuccess: true,
        getTokenFailed: false,
        accessToken: action.accessToken,
      };
    }
    case GET_TOKEN_FAILED: {
      return {
        ...state,
        getTokenFailed: true,
        getTokenRequest: false,
        getTokenSuccess: false,
      };
    }
    case RESET_GET_TOKEN: {
      return {
        ...state,
        getTokenFailed: false,
        getTokenRequest: false,
        getTokenSuccess: false,
      };
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
        getUserRequest: true,
        user: null,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        getUserFailed: false,
        getUserSuccess: true,
        getUserRequest: false,
        user: action.user,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        getUserFailed: true,
        getUserRequest: false,
        getUserSuccess: false,
      };
    }
    case RESET_GET_USER: {
      return {
        ...state,
        getUserFailed: false,
        getUserRequest: false,
        getUserSuccess: false,
      };
    }
    case EXIT_USER_REQUEST: {
      return {
        ...state,
        exitUserRequest: true,
      };
    }
    case EXIT_USER_SUCCESS: {
      return {
        ...state,
        exitUserRequest: false,
        exitUserSuccess: true,
        user: null,
        exitUserFailed: false,
        accessToken: null,
      };
    }
    case EXIT_USER_FAILED: {
      return {
        ...state,
        exitUserFailed: true,
        exitUserRequest: false,
        exitUserSuccess: false,
      };
    }
    case PATCH_USER_REQUEST: {
      return {
        ...state,
        patchUserRequest: true,
      };
    }
    case PATCH_USER_SUCCESS: {
      return {
        ...state,
        patchUserFailed: false,
        patchUserSuccess: true,
        patchUserRequest: false,
        user: action.user,
      };
    }
    case PATCH_USER_FAILED: {
      return {
        ...state,
        patchUserFailed: true,
        patchUserRequest: false,
        patchUserSuccess: false,
      };
    }
    case RESET_PATCH_USER: {
      return {
        ...state,
        patchUserFailed: false,
        patchUserRequest: false,
        patchUserSuccess: false,
      };
    }
    default: {
      return state;
    }
  }
}