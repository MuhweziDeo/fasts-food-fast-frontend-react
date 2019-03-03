import React from 'react';
import SignUp from './signUp';
import {shallow} from  'enzyme';

describe('<SignUp/>', () =>{
    it('should render without crushing ',  () => {
        let wrapper =shallow(<SignUp/>)
        expect(wrapper).toMatchSnapshot()
    });
})
