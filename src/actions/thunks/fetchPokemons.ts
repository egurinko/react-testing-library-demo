import { fetchPokemonsStart, fetchPokemonsSuccess, fetchPokemonsFailure } from '../index';
import { RootThunkAction } from './thunkTypes';
import fetcher from '../../utils/fetcher';

export type FetchPokemonResponse = {
  count: number;
  next: string;
  previous: null;
  results: Pokemon[];
};

export type Pokemon = { name: string; url: string };

export const fetchPokemonsThunk = (): RootThunkAction<Promise<void>> => (dispatch) => {
  dispatch(fetchPokemonsStart());

  return fetcher<FetchPokemonResponse>('https://pokeapi.co/api/v2/pokemon')
    .then((response) => {
      dispatch(fetchPokemonsSuccess(response.results));
    })
    .catch((error) => {
      dispatch(fetchPokemonsFailure());
    });
};
