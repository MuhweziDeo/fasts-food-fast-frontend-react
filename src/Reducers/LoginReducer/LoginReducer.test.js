import LoginReducer from './LoginReducer';
import types from '../../actions/types'
describe('<LoginReducder', () => {
    it('should return initial state ',  () => {
        expect(LoginReducer(undefined,{})).toEqual({
            loginSuccessful:false,
            payload:""
        })
    });
    it('should update state on login success', () => {
        expect(LoginReducer(undefined,{
            type:types.LOGIN_SUCCESS,
            payload:{
                token:"token"
            }
        })).toEqual({
            loginSuccessful: true,
            payload:{
                token:'token'
            }
        })
    });

    it('should update state on login fail', () => {
        expect(LoginReducer(undefined,{
            type:types.LOGIN_FAILS,
            payload:"password verification failed"
        })).toEqual({
            loginSuccessful: false,
            payload:"password verification failed"
        })
    });
})
