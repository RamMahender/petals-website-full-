import React from 'react';
import { shallow } from 'enzyme';
import Viewattendance from './viewattendance';

describe('<Viewattendance />', () => {
  test('renders', () => {
    const wrapper = shallow(<Viewattendance />);
    expect(wrapper).toMatchSnapshot();
  });
});
