import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../reducers';
import { Actions } from '../index';

export type RootThunkAction<R, E = undefined> = ThunkAction<R, RootState, E, Actions>;

export type RootThunkDispatch<E = undefined> = ThunkDispatch<RootState, E, Actions>;
