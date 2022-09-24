import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchPokemonsThunk } from './thunk';
import type { PokemonState } from './types';
import type { PayloadAction } from '@reduxjs/toolkit';

export const adapter = createEntityAdapter<PokemonState>();

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: adapter.getInitialState(),
  reducers: {
    addPokemon: (state, action: PayloadAction<PokemonState>) => {
      adapter.addOne(state, action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonsThunk.fulfilled, (state, action) => {
      const pokemons = action.payload.map((fullPokemon) => ({
        id: fullPokemon.id,
        name: fullPokemon.name,
        stats: fullPokemon.stats,
        sprite: fullPokemon.sprites.front_default
      }));
      adapter.setAll(state, pokemons);
    });
  }
});

export const { addPokemon } = pokemonsSlice.actions;
