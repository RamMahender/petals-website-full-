import React from 'react';
import { shallow } from 'enzyme';
import Foodintake1 from './foodintake1';

describe('<Foodintake1 />', () => {
  test('renders', () => {
    const wrapper = shallow(<Foodintake1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
