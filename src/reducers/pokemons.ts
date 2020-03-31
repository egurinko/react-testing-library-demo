import { Actions } from '../actions/index';
import { ActionTypes } from '../actions/actionTypes';
import { Pokemon } from '../actions/thunks/fetchPokemons';

const pokemons = (state = [], action: Actions): Pokemon[] => {
  switch (action.type) {
    case ActionTypes.FETCH_POKEMONS_SUCCESS:
      return action.pokemons;
    default:
      return state;
  }
};

export default pokemons;
