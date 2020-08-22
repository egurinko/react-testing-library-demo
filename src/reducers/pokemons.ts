import { Actions } from '../actions/index';
import ActionTypes from '../actions/actionTypes';
import { Pokemons } from '../actions/thunks/types/fetchPokemons';

const initialState: Pokemons = [];

const pokemons = (state = initialState, action: Actions): Pokemons => {
  switch (action.type) {
    case ActionTypes.FETCH_POKEMONS_SUCCESS:
      return action.pokemons;
    default:
      return state;
  }
};

export default pokemons;
