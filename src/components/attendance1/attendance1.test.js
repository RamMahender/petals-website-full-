import React from 'react';
import { shallow } from 'enzyme';
import Attendance1 from './attendance1';

describe('<Attendance1 />', () => {
  test('renders', () => {
    const wrapper = shallow(<Attendance1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
