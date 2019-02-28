import React from 'react';
import {shallow} from 'enzyme';
import Home from './Home';

describe('<Home/>', () => {
    it('should render without crushing', () => {
          let wrapper = shallow(<Home/>);
        expect(wrapper).toMatchSnapshot()
    });

});
