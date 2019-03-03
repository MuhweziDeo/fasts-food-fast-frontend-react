import React from 'react';
import  { shallow } from 'enzyme';
import  NavBarView  from  './NavBarView';

describe('<NavBarView/>',() => {
    it('should render without crushing', () => {
        let wrapper = shallow(<NavBarView/>)
        expect(wrapper).toMatchSnapshot()

    } );
    it('should render on state change', () => {
        let wrapper = shallow(<NavBarView/>)

        wrapper.setState({
            IsAuth:true
        })
        localStorage.setItem('token','token')
        expect(wrapper).toMatchSnapshot()

    } );
})
