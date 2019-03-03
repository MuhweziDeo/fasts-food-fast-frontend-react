import types from '../../actions/types';

const initialState={
    loginSuccessful:false,
    payload:""
}

const loginReducer = (state=initialState,action) =>{
    switch (action.type) {
        case(types.LOGIN_SUCCESS):
            return{
                ...state,
                loginSuccessful: true,
                payload: action.payload
            }
        case (types.LOGIN_FAILS):
                return{
                    ...state,
                    loginSuccessful:false,
                    payload:action.payload
                };
        default:
            return state

    }
};
export  default loginReducer;

