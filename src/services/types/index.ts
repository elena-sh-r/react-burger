import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../store';
import { TConstructorIngredientActions } from '../actions/burger-constructor';
import { TBurgerIngredientsActions } from '../actions/burger-ingredients';
import { TOrderDetailsActions } from 'services/actions/order-details';
import { TIngredintsDetailsActions } from 'services/actions/ingredient-details';
import { TUserActions } from 'services/actions/user';
import { TWsActions } from 'services/actions/ws';

// Типизация всех экшенов приложения

type TApplicationActions =
  TConstructorIngredientActions
  | TBurgerIngredientsActions
  | TIngredintsDetailsActions
  | TOrderDetailsActions
  | TUserActions
  | TWsActions;

export type RootState = ReturnType<typeof store.getState>;

// Типизация метода dispatch для проверки на валидность отправляемого экшена

export type AppDispatch = typeof store.dispatch;

// Типизация thunk в приложении

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;