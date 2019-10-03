import React from 'react';
import { shallow } from 'enzyme';
import Waterintake from './waterintake';

describe('<Waterintake />', () => {
  test('renders', () => {
    const wrapper = shallow(<Waterintake />);
    expect(wrapper).toMatchSnapshot();
  });
});
