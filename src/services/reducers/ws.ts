import { TWsActions } from '../actions/ws';
import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE
} from '../constants/index';

export type TWsState = {
  wsConnected: boolean;
  message: any;
};

const initialState = {
  wsConnected: false,
  message: null,
};

export const wsReducer = (state: TWsState = initialState, 
  action: TWsActions) => {
  switch (action.type) {
    case WS_CONNECTION_START:
      return {
        ...state,
        message: null,
      };

    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
      };

    case WS_CONNECTION_CLOSE:
    return {
      ...state,
      message: null,
    };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
      };

    case WS_GET_MESSAGE:
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};