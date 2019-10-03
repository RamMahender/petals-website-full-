import React from 'react';
import { shallow } from 'enzyme';
import Attendance from './attendance';

describe('<Attendance />', () => {
  test('renders', () => {
    const wrapper = shallow(<Attendance />);
    expect(wrapper).toMatchSnapshot();
  });
});
