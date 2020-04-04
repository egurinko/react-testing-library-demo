import { fetchPokemonsStart, fetchPokemonsSuccess, fetchPokemonsFailure } from '../index';
import { RootThunkAction } from './thunkTypes';
import fetcher from '../../utils/fetcher';
import { Pokemon } from './types/fetchPokemons';

export const fetchPokemonsThunk = (): RootThunkAction<Promise<void>> => (dispatch) => {
  const fetchers = [];

  for (let i = 1; i < 31; i++) {
    fetchers.push(fetcher<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${i}`));
  }

  dispatch(fetchPokemonsStart());
  return Promise.all(fetchers)
    .then((pokemons) => {
      dispatch(fetchPokemonsSuccess(pokemons));
    })
    .catch((error) => {
      dispatch(fetchPokemonsFailure());
    });
};
