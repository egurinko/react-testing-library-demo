import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { PokemonState } from '@/store/pokemons/types';
import type { MyPokemonState } from './types';
import type { PayloadAction } from '@reduxjs/toolkit';

export const adapter = createEntityAdapter<MyPokemonState>();

export const myPokemonsSlice = createSlice({
  name: 'myPokemons',
  initialState: adapter.getInitialState(),
  reducers: {
    addToMyPokemon: (state, action: PayloadAction<PokemonState>) => {
      adapter.addOne(state, action.payload);
    }
  }
});

export const { addToMyPokemon } = myPokemonsSlice.actions;
