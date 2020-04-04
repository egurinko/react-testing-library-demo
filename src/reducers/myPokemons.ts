import { Actions } from '../actions/index';
import { ActionTypes } from '../actions/actionTypes';
import { Pokemons } from '../actions/thunks/types/fetchPokemons';

const initialState: Pokemons = [];

const myPokemons = (state = initialState, action: Actions): Pokemons => {
  switch (action.type) {
    default:
      return state;
  }
};

export default myPokemons;
