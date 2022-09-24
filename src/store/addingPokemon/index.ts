import { createSlice } from '@reduxjs/toolkit';
import type { PokemonState } from '@/store/pokemons/types';
import type { AddingPokemonState } from './types';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = null as AddingPokemonState;

export const addingPokemonSlice = createSlice({
  name: 'addingPokemon',
  initialState,
  reducers: {
    setAddingPokemon: (_state, action: PayloadAction<PokemonState>) =>
      action.payload
  }
});

export const { setAddingPokemon } = addingPokemonSlice.actions;
