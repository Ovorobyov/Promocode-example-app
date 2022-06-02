import {THEME_GET, THEME_SET} from '../actions/types';

const initialState = {
  primary: '#573E77',
  secondary: '#ffffff',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case THEME_SET: {
      return {
        ...state,
        primary: action.payload.primary,
        secondary: action.payload.secondary,
      };
    }
    case THEME_GET: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
