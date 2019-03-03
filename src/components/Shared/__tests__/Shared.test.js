import React from 'react';
import {shallow,mount} from "enzyme/build";
import  NavBar from  '../NavBar/NavBar';
import Banner from '../Banner';
import DropdownImageTrigger from '../NavBar/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Shared/>', () => {
    it('should render without crushing', () => {
        let wrapper = shallow(<NavBar/>);
        expect(wrapper).toMatchSnapshot()
    });
    it('should render without crushing', () => {
        let wrapper = shallow(<Banner/>);
        expect(wrapper).toMatchSnapshot()
    });

    it('should render without crushing', () => {

    });



});
