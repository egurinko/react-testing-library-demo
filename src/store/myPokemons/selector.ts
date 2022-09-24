import { createSelector } from '@reduxjs/toolkit';
import type { PokemonsState } from '@/store/pokemons/types';
import type { RootState } from '@/store/types';
import { adapter } from './index';

const selectors = adapter.getSelectors<RootState>((state) => state.myPokemons);

export const selectMyPokemons = (state: RootState): PokemonsState =>
  selectors.selectAll(state);

export const selectHasMyPokemons = createSelector(
  [selectMyPokemons],
  (pokemons): boolean => pokemons.length <= 0
);
