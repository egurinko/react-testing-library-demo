import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addingPokemonSlice } from './addingPokemon';
import { myPokemonsSlice } from './myPokemons';
import { pokemonsSlice } from './pokemons';

const rootReducer = combineReducers({
  [pokemonsSlice.name]: pokemonsSlice.reducer,
  [myPokemonsSlice.name]: myPokemonsSlice.reducer,
  [addingPokemonSlice.name]: addingPokemonSlice.reducer
});

export const store = configureStore({ reducer: rootReducer });
