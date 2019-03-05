import {UserDashBoardView, mapStateToProps} from './userDashBoardView';
import { shallow } from 'enzyme';
import React from 'react';

const props={
    getUserOrdersAction:jest.fn(),
    userOrdersState: {
        payload:[{}]
    },
    getMenuActions:jest.fn(),
    menuState:{
        payload:[{}]
    },
    postAnOrderAction:jest.fn()
}
jest.useFakeTimers();
describe('<UserDashBoardView/>', () => {
    it('should render without crushing',()=>{
        let wrapper =shallow(<UserDashBoardView {...props}/>)
        expect(wrapper).toMatchSnapshot()
    });

    it('should handleSubmit',() => {
        let wrapper =shallow(<UserDashBoardView {...props}/>)
        const e ={
            preventDefault:()=>{}
        }
        wrapper.instance().handleSubmit(e);
        jest.runAllTimers()
        expect(props.postAnOrderAction).toBeCalled();
    });

    it('should handle change',() => {
        let wrapper =shallow(<UserDashBoardView {...props}/>)
        const e ={
            target:{     
            }
        }
        wrapper.instance().handleChange(e);
        expect(wrapper.instance().state).toEqual({
            meal:"",
            location:"",
            quantity:""
        });
    });

    it('should map state to props', () => {
        expect(mapStateToProps({UserOrders:{}})).toEqual({userOrdersState:{}})
    })
})
