import { ActionTypes } from './actionTypes';
import { Pokemons } from './thunks/types/fetchPokemons';

export const fetchPokemonsStart = () =>
  ({
    type: ActionTypes.FETCH_POKEMONS_START,
  } as const);

export const fetchPokemonsSuccess = (pokemons: Pokemons) =>
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
