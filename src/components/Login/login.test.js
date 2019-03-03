import React from  'react'
import {shallow} from "enzyme";
import Login from './login';

describe('<Login/>', () => {
    it('should render without crushing', () => {
        let wrapper= shallow(<Login/>)
        expect(wrapper).toMatchSnapshot()
    })
})
