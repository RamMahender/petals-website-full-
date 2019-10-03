import React from 'react';
import { shallow } from 'enzyme';
import Foodintake from './foodintake';

describe('<Foodintake />', () => {
  test('renders', () => {
    const wrapper = shallow(<Foodintake />);
    expect(wrapper).toMatchSnapshot();
  });
});
