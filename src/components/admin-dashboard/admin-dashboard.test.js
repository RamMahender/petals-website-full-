import React from 'react';
import { shallow } from 'enzyme';
import AdminDashboard from './admin-dashboard';

describe('<AdminDashboard />', () => {
  test('renders', () => {
    const wrapper = shallow(<AdminDashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
