import types from '../types';
import  BASE_URL from '../../constants';
import {toast} from 'react-toastify';

const RegisterUser= (payload) => dispatch =>{
    console.log(payload.username)
    return fetch(`${BASE_URL}/auth/signup`,{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(payload)
    }).then(res=>res.json()
    ).then(
       data=>{
            console.log(data)
           if(data.response){
               dispatch({
                   type:types.REGISTER_SUCCESS,
                   payload:data.response.message
               })
            toast.success('Signup successful')
               window.location.reload()
               localStorage.setItem('token',data.token)
               localStorage.setItem('username',data.username)
           }
           else  {
               dispatch({
                   type:types.REGISTER_FAILS,
                   payload:data
               })
               toast.error(data.message)
           };

       }
    );
};
export  default  RegisterUser;

