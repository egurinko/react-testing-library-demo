import { Actions } from '../actions/index';
import { ActionTypes } from '../actions/actionTypes';

const isLoading = (state = false, action: Actions): boolean => {
  switch (action.type) {
    case ActionTypes.FETCH_POKEMONS_START:
      return true;
    case ActionTypes.FETCH_POKEMONS_SUCCESS:
    case ActionTypes.FETCH_POKEMONS_FAILURE:
      return false;
    default:
      return state;
  }
};

export default isLoading;
