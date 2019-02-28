import { combineReducers } from 'redux';
import signupReducer from './signUpReducer/signUpReducer';


export default combineReducers({
  SignUpState:signupReducer
})
