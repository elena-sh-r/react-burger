import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

import { compose } from 'redux';
import { socketMiddleware } from './middleware/socketMiddleware';
import { WS_CONNECTION_CLOSED, WS_CONNECTION_CLOSE, WS_CONNECTION_ERROR, WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE } from './constants';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const wsUrl = 'wss://norma.nomoreparties.space/orders';

const wsActions = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  wsClose: WS_CONNECTION_CLOSE,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE,
};

const enhancer = composeEnhancers(applyMiddleware(thunk), applyMiddleware(socketMiddleware({wsUrl, wsActions})));

export const store = createStore(rootReducer, enhancer);