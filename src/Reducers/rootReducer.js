import { combineReducers } from 'redux';
import signupReducer from './signUpReducer/signUpReducer';
import loginReducer from './LoginReducer/LoginReducer';
import userOrdersReducer from './userOrdersReducer/userOrdersReducer';

export default combineReducers({
  SignUpState:signupReducer,
  LoginState:loginReducer,
  UserOrders:userOrdersReducer
})
