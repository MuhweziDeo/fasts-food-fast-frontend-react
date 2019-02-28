import {HomeView, mapStateToProps} from './HomeView';
import { shallow } from 'enzyme';
import React from 'react';

describe('<HomeView', () =>{
    it('should render without crushing' ,() => {
        let wrapper =shallow(<HomeView/>)
        expect(wrapper).toMatchSnapshot()
    });

})
