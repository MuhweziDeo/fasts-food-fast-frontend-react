import types from  '../../actions/types';

const intiState={
    isSuccessful:false,
    payload:""
};
const signUpReducer =(state=intiState,action)=>{
    switch (action.type) {
        case(types.REGISTER_SUCCESS):
            return{
                ...state,
                isSuccessful: true,
                payload: action.payload

            };
        case (types.REGISTER_FAILS):
            return{
                ...state,
                payload:action.payload,
                isSuccessful:false
            }
        default:
            return state

    }

};
export default signUpReducer;
