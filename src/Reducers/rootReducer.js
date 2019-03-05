import { combineReducers } from 'redux';
import signupReducer from './signUpReducer/signUpReducer';
import loginReducer from './LoginReducer/LoginReducer';
import userOrdersReducer from './userOrdersReducer/userOrdersReducer';
import menuReducer from './menuReducer/menuReducer';

export default combineReducers({
  SignUpState:signupReducer,
  LoginState:loginReducer,
  UserOrders:userOrdersReducer,
  Menu:menuReducer,
})
