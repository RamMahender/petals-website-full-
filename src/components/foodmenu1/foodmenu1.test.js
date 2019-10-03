import React from 'react';
import { shallow } from 'enzyme';
import Foodmenu1 from './foodmenu1';

describe('<Foodmenu1 />', () => {
  test('renders', () => {
    const wrapper = shallow(<Foodmenu1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
