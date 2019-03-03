import  types from '../types';
import  BASE_URL from '../../constants';
import {toast} from 'react-toastify';

const loginAction = payload => dispatch =>{
    return fetch(`${BASE_URL}/auth/login`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(payload)
    }).then(
        res=>res.json()
    ).then(
        data=>{
            if(data.token){
                dispatch({
                    type:types.LOGIN_SUCCESS,
                    payload:data
                })
                toast.success('Login Successful')
                window.location.reload()
                localStorage.setItem('token',data.token)
                localStorage.setItem('username',data.username)
            }
            else {
                dispatch({
                    type:types.LOGIN_FAILS,
                    payload:data.message
                })
                toast.error(data.message)
            }
        }
    )
}

export  default loginAction;

