import {LOGIN, LOGOUT} from './action';
var initState = {
  login: false,
  user: '',
};
export default function loginReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.data,
        login: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: '',
        login: false,
      };
    default:
      return state;
  }
}
