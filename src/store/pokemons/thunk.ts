import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AsyncThunkConfig } from '@/store/types';
import type { FullPokemons } from '@/utils/api/fetchPokemon';
import { fetchPokemon } from '@/utils/api/fetchPokemon';

export const fetchPokemonsThunk = createAsyncThunk<
  FullPokemons,
  undefined,
  AsyncThunkConfig<Error>
>('api/getClaimEstimateThunk', async () => {
  const fetchers = [];

  for (let i = 1; i < 31; i++) {
    fetchers.push(fetchPokemon(i));
  }

  return await Promise.all(fetchers);
});
