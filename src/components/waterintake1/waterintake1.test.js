import React from 'react';
import { shallow } from 'enzyme';
import Waterintake1 from './waterintake1';

describe('<Waterintake1 />', () => {
  test('renders', () => {
    const wrapper = shallow(<Waterintake1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
