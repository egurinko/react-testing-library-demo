import { ActionTypes } from './actionTypes';
import { Pokemon } from './thunks/fetchPokemons';

export const fetchPokemonsStart = () =>
  ({
    type: ActionTypes.FETCH_POKEMONS_START,
  } as const);

export const fetchPokemonsSuccess = (pokemons: Pokemon[]) =>
  ({
    type: ActionTypes.FETCH_POKEMONS_SUCCESS,
    pokemons,
  } as const);

export const fetchPokemonsFailure = () =>
  ({
    type: ActionTypes.FETCH_POKEMONS_FAILURE,
  } as const);

export type Actions =
  | ReturnType<typeof fetchPokemonsStart>
  | ReturnType<typeof fetchPokemonsSuccess>
  | ReturnType<typeof fetchPokemonsFailure>;
