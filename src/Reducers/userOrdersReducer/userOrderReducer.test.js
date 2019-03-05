import userOrdersReducer from './userOrdersReducer';
import types from '../../actions/types';

describe('<userOrderReducer/>', () => {
    it('should return init state', () => {
        expect(userOrdersReducer(undefined,{})).toEqual({
            getOrdersSuccessful:false,
            payload:[],
            message:'',
            createOrdersSuccess: false,
        })
    });

    it('should change state on fetch user orders success', () => {
        expect(userOrdersReducer(undefined,{
            type:types.GET_ORDERS_SUCCESS,
            payload:[{}]
        })).toEqual({
            getOrdersSuccessful:true,
            payload:[{}],
            message:'',
            createOrdersSuccess: false,
        })
    });

    it('should change state on fetch user orders fail', () => {
        expect(userOrdersReducer(undefined,{
            type:types.GET_ORDERS_FAIL,
            payload:"message"
        })).toEqual({
            getOrdersSuccessful:false,
            payload:[],
            message:"message",
            createOrdersSuccess: false,
        })
    });

    it('should change state on fetch user orders not found', () => {
        expect(userOrdersReducer(undefined,{
            type:types.NO_ORDERS_FOR_USER,
            payload:"no orders placed"
        })).toEqual({
            getOrdersSuccessful:true,
            payload:[],
            message:"no orders placed",
            createOrdersSuccess: false,
        })
    });

    it('should change state on create order success', () => {
        expect(userOrdersReducer(undefined,{
            type:types.POST_ORDER_SUCCESS,
            payload:[{}]
        })).toEqual({
            getOrdersSuccessful:false,
            payload:[],
            createOrdersSuccess: true,
            message:""
        })
    });
    it('should change state on create order fail', () => {
        expect(userOrdersReducer(undefined,{
            type:types.POST_ORDER_FAIL,
            payload:""
        })).toEqual({
            getOrdersSuccessful:false,
            payload:[],
            createOrdersSuccess: false,
            message:""
        })
    });
})
