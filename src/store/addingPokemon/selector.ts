import type { RootState } from '@/store/types';
import type { AddingPokemonState } from './types';

export const selectAddingPokemon = (state: RootState): AddingPokemonState =>
  state.addingPokemon;
