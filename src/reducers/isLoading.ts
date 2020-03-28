import { Actions } from '../actions/index';
import { ActionTypes } from '../actions/actionTypes';

const isLoading = (state = false, action: Actions): boolean => {
  switch (action.type) {
    default:
      return state;
  }
};

export default isLoading;
