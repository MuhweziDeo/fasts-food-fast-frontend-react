import { combineReducers } from 'redux';
import signupReducer from './signUpReducer/signUpReducer';
import loginReducer from './LoginReducer/LoginReducer';


export default combineReducers({
  SignUpState:signupReducer,
  LoginState:loginReducer
})
