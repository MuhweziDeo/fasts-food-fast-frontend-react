import {SignUpView, mapStateToProps} from './signUpView';
import { shallow } from 'enzyme';
import React from 'react';

let push =jest.fn()
const props={
    RegisterUser:jest.fn(),
    history:{push}

}
describe('<HomeView', () =>{
    it('should render without crushing' ,() => {
        let wrapper =shallow(<SignUpView {...props} />)
        expect(wrapper).toMatchSnapshot()
    });

    it('should handle change ', () => {
        let wrapper =shallow(<SignUpView {...props} />)
        const e ={
            target:{
            },
            preventDefault:()=>{}
        }
        wrapper.instance().setState =jest.fn()
        wrapper.instance().handleChange(e)
        expect(wrapper.instance().setState).toBeCalled()

    });
    it('should handle submit ', () => {
        let wrapper =shallow(<SignUpView {...props} />)
        const e ={
            target:{
            },
            preventDefault:()=>{}
        }
        wrapper.instance().setState =jest.fn()
        wrapper.instance().handleSubmit(e)
        expect(props.RegisterUser).toBeCalled()

    });
    it('should map state to props',() => {
        expect(mapStateToProps({})).toEqual({signup:undefined})
    });

    it('should redirect on successful login',() => {
    let wrapper =shallow(<SignUpView {...props} />)
    wrapper.setProps({
        signup:{
            isSuccessful:true
        }
        })
        expect(props.history.push).toBeCalled()
    });
})
