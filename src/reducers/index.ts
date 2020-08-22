import { combineReducers, Action } from 'redux';
import { Reducer } from 'react';
import pokemons from './pokemons';
import myPokemons from './myPokemons';
import addingPokemon from './addingPokemon';

const rootReducer = combineReducers({
  pokemons,
  myPokemons,
  addingPokemon,
});

export default rootReducer;

type StateType<T> = T extends Reducer<infer S, Action> ? S : never;

export type RootState = StateType<typeof rootReducer>;
