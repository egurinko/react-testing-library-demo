import { ActionTypes } from './actionTypes';
import { Pokemons, Pokemon } from './thunks/types/fetchPokemons';

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

export const addPokemon = (pokemon: Pokemon) =>
  ({
    type: ActionTypes.ADD_POKEMON,
    pokemon,
  } as const);

export type Actions =
  | ReturnType<typeof fetchPokemonsStart>
  | ReturnType<typeof fetchPokemonsSuccess>
  | ReturnType<typeof fetchPokemonsFailure>
  | ReturnType<typeof addPokemon>;
