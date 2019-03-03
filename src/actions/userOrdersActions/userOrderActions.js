import types from '../types';
import  BASE_URL from '../../constants';
import {toast} from 'react-toastify';

const token = localStorage.getItem('token')
export const getUserOrdersAction = () => dispatch =>{
    return(
        fetch(`${BASE_URL}/users/orders`,{
            method:"GET",
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then(
            res=>res.json()

        ).then(
            data=>{
                if(data.user_orders){
                    dispatch({
                        type:types.GET_ORDERS_SUCCESS,
                        payload:data.user_orders
                    })

                }
                else if(data.message ==='You havent placed any orders yet'){
                    dispatch({
                        type:types.NO_ORDERS_FOR_USER,
                        payload:data.message
                    })
                }
                else{
                    dispatch({
                        type:types.GET_ORDERS_FAIL,
                        payload:data.message
                    })
                }
            }
        )
    )
};
