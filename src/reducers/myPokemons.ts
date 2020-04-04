import { Actions } from '../actions/index';
import { ActionTypes } from '../actions/actionTypes';
import { Pokemons } from '../actions/thunks/types/fetchPokemons';

const initialState: Pokemons = [];

const myPokemons = (state = initialState, action: Actions): Pokemons => {
  switch (action.type) {
    case ActionTypes.ADD_POKEMON:
      return [action.pokemon, ...state];
    case ActionTypes.DELETE_POKEMON:
      return state.filter((pokemon) => pokemon.id !== action.pokemon.id);
    default:
      return state;
  }
};

export default myPokemons;
