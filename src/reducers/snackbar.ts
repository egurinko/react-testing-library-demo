import { Actions } from '../actions/index';
import { ActionTypes } from '../actions/actionTypes';

export type Snackbar = {
  isOpen: boolean;
  success: boolean;
  message: string;
};

const initialState: Snackbar = {
  isOpen: false,
  success: true,
  message: '',
};

const snackbar = (state = initialState, action: Actions): Snackbar => {
  switch (action.type) {
    case ActionTypes.ADD_POKEMON:
    case ActionTypes.DELETE_POKEMON:
      return {
        isOpen: true,
        success: true,
        message: 'Success',
      };
    case ActionTypes.CLOSE_SNACKBAR:
      return {
        isOpen: false,
        success: true,
        message: '',
      };
    default:
      return state;
  }
};

export default snackbar;
