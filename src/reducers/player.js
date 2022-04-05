import { SAVE_EMAIL, SAVE_USER } from '../actions';

const INITIAL_STATE = {
  name: null,
  assertions: null,
  score: null,
  gravatarEmail: null,
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EMAIL:
    return {
      ...state,
      gravatarEmail: action.payload,
    };
  case SAVE_USER:
    return {
      ...state,
      name: action.payload,
    };
  default:
    return state;
  }
};

export default player;
