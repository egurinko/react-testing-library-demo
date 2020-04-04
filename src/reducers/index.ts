import { combineReducers, Action } from 'redux';
import { Reducer } from 'react';
import isLoading from './isLoading';
import pokemons from './pokemons';
import myPokemons from './myPokemons';
import snackbar from './snackbar';

const rootReducer = combineReducers({
  isLoading,
  pokemons,
  myPokemons,
  snackbar,
});

export default rootReducer;

type StateType<T> = T extends Reducer<infer S, Action> ? S : never;

export type RootState = StateType<typeof rootReducer>;
