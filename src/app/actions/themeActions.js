import {THEME_GET, THEME_SET} from './types';
export const setTheme = (primary, secondary) => dispatch => {
  dispatch({
    type: THEME_SET,
    payload: {primary: primary, secondary: secondary},
  });
};
