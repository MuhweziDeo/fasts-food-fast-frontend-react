import React from 'react';
import UserDashboard from './userDashboard';
import {shallow} from 'enzyme';

describe('<UserDashboard/>',() => {
    it('should render without crushing', () => {
        const props ={
            orderList:[{}],
            menu:[{}]
        }
        let wrapper = shallow(<UserDashboard {...props}/>)
        expect(wrapper).toMatchSnapshot()
    })
})
