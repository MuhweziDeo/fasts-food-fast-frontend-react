import types from '../../actions/types';
import menuReducer from './menuReducer';


describe('MenuReducer', () => {
    it('should return initial state' , () => {
        expect(menuReducer(undefined,{})).toEqual({
            getMenuSuccess:false,
            payload:[]
        })
    });
    it('should update state on get menu success' , () => {
        expect(menuReducer(undefined,{
            type:types.GET_MENU_SUCCESS,
            payload:[]
        })).toEqual({
            getMenuSuccess:true,
            payload:[]
        })
    });
    it('should update state on get menu fail' , () => {
        expect(menuReducer(undefined,{
            type:types.GET_MENU_FAIL,
            payload:""
        })).toEqual({
            getMenuSuccess:false,
            payload:""
        })
    });

});