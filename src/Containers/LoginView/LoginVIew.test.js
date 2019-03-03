import {LoginView, mapStateToProps} from './LoginView';
import { shallow } from 'enzyme';
import React from 'react';

let push =jest.fn()
const props={
    loginAction:jest.fn(),
    history:{push}

}

describe('<LoginView/>', () => {

    it('should redirect on successful login', () =>{
        const wrapper =shallow(<LoginView {...props} />)
        wrapper.setProps({
            loginState:{
                loginSuccessful:true
            }
        })
        expect(props.history.push).toBeCalled()
    });
    it('should change state on input', () => {
        const wrapper =shallow(<LoginView {...props} />)

        const e={
            target:{
                value:""
            }
        };
        wrapper.instance().setState = jest.fn()
        wrapper.instance().handleChange(e)
        expect(wrapper.instance().setState).toBeCalled()
    });

    it('should handle Submit', () => {
        const wrapper =shallow(<LoginView {...props} />)

        const e={
            preventDefault:()=>{}
        };
        wrapper.instance().handleSubmit(e)
        expect(props.loginAction).toBeCalled()
    });

    it('should map state to props', () => {
        expect(mapStateToProps({})).toEqual({loginState:undefined})
    });
})
