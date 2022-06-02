import {API_COUPONS_GET} from '../actions/types';

const initialState = {
  coupons: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case API_COUPONS_GET: {
      return {
        ...state,
        coupons: action.payload,
      };
    }
    default:
      return state;
  }
}
