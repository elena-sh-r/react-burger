import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../store';
import { TConstructorIngredientActions } from '../actions/burger-constructor';
import { TBurgerIngredientsActions } from '../actions/burger-ingredients';
import { TOrderDetailsActions } from 'services/actions/order-details';
import { TIngredintsDetailsActions } from 'services/actions/ingredient-details';

type TApplicationActions =
  TConstructorIngredientActions
  | TBurgerIngredientsActions
  | TIngredintsDetailsActions
  | TOrderDetailsActions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;