import {UserDashBoardView, mapStateToProps} from './userDashBoardView';
import { shallow } from 'enzyme';
import React from 'react';

import {getUserOrdersAction} from "../../actions/userOrdersActions/userOrderActions";

const props={
    getUserOrdersAction:jest.fn(),
    userOrdersState: {
        payload:[{}]
    }
}
describe('<UserDashBoardView/>', () => {
    it('should render without crushing',()=>{
        let wrapper =shallow(<UserDashBoardView {...props}/>)
        expect(wrapper).toMatchSnapshot()
    });

    it('should map state to props', () => {
        expect(mapStateToProps({UserOrders:{}})).toEqual({userOrdersState:{}})
    })
})
