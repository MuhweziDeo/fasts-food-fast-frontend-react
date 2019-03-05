import BASE_URL from '../../constants';
import types from '../../actions/types';
import { toast } from 'react-toastify';

export const getMenuActions = () => dispatch => {
    return fetch(`${BASE_URL}/menu`).then(
        res=>res.json()
    ).then(
        data=>{
            console.log(data.menu)
            if(data.menu){
                dispatch({
                    type:types.GET_MENU_SUCCESS,
                    payload:data.menu
                })

            }
            else{
                dispatch({
                    type:types.GET_MENU_FAIL,
                    payload:data
                })
                toast.error('Something Occured can get Menu')
            }
        }
    );

};
