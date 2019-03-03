import types from  '../../actions/types';

const intiState={
    getOrdersSuccessful:false,
    payload:[],
    message:''
};
const userOrdersReducer =(state=intiState,action)=>{
    switch (action.type) {
        case(types.GET_ORDERS_SUCCESS):

            return{
                ...state,
                getOrdersSuccessful: true,
                payload: action.payload

            };
        case (types.GET_ORDERS_FAIL):
            return{
                ...state,
                getOrdersSuccessful:false,
                message:action.payload
            }
        case (types.NO_ORDERS_FOR_USER):
            return{
                ...state,
                getOrdersSuccessful:true,
                message:action.payload

            }
        default:
            return state

    }

};
export default userOrdersReducer;
