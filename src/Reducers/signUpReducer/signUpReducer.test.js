import signUpReducer from './signUpReducer';
import types from '../../actions/types';

describe('SignupReducer',() => {
    it('should return initState',  () => {
   expect(signUpReducer(undefined,{})).toEqual(
       {isSuccessful:false,payload:""});
    });

    it('should update state if signup is successful ',  () => {
        expect(signUpReducer(undefined,{
            type:types.REGISTER_SUCCESS,
            payload:""
        })).toEqual({
            isSuccessful: true,
            payload:""
        })

    });

    it('should update state if signup is fails ',  () => {
        expect(signUpReducer(undefined,{
            type:types.REGISTER_FAILS,
            payload:""
        })).toEqual({
            isSuccessful: false,
            payload:""
        });

    });
})
