import { Actions } from '../actions/index';
import ActionTypes from '../actions/actionTypes';
import { Pokemon } from '../actions/thunks/types/fetchPokemons';

export type AddingPokemon = Pokemon | null;

const initialState = null;

const addingPokemon = (state = initialState, action: Actions): AddingPokemon => {
  switch (action.type) {
    case ActionTypes.SET_ADDING_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

export default addingPokemon;
