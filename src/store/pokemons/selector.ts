import type { RootState } from '@/store/types';
import { adapter } from './index';
import type { PokemonsState } from './types';

const selectors = adapter.getSelectors<RootState>((state) => state.pokemons);

export const selectPokemons = (state: RootState): PokemonsState =>
  selectors.selectAll(state);
