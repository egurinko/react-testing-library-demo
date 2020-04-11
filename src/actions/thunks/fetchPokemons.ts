import { fetchPokemonsStart, fetchPokemonsSuccess, fetchPokemonsFailure } from '../index';
import { RootThunkAction } from './thunkTypes';
import fetcher from '../../utils/fetcher';
import { FullPokemon } from './types/fetchPokemons';

export const fetchPokemonsThunk = (): RootThunkAction<Promise<void>> => (dispatch) => {
  const fetchers = [];

  for (let i = 1; i < 31; i++) {
    fetchers.push(fetcher<FullPokemon>(`https://pokeapi.co/api/v2/pokemon/${i}`));
  }

  dispatch(fetchPokemonsStart());
  return Promise.all(fetchers)
    .then((fullPokemons) => {
      const pokemons = fullPokemons.map((fullPokemon) => ({
        id: fullPokemon.id,
        name: fullPokemon.name,
        stats: fullPokemon.stats,
        sprite: fullPokemon.sprites.front_default,
      }));
      dispatch(fetchPokemonsSuccess(pokemons));
    })
    .catch((error) => {
      dispatch(fetchPokemonsFailure());
    });
};
