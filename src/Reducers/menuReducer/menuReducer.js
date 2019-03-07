import types from '../../actions/types';

const initialState={
    getMenuSuccess:false,
    payload:[]
}

const menuReducer = (state=initialState,action) => {
    switch (action.type) {
        case(types.GET_MENU_SUCCESS):
            return{
                ...state,
                getMenuSuccess: true,
                payload: action.payload
            }
        case(types.GET_MENU_FAIL):
        return{
            ...state,
            getMenuSuccess:false,
            payload:action.payload
        };
        default:
            return state

    }
};

export default menuReducer;

