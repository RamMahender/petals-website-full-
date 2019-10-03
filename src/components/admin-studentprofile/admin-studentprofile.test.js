import React from 'react';
// import { shallow } from 'enzyme';
import AdminStudentprofile from './admin-studentprofile';

describe('<AdminStudentprofile />', () => {
  test('renders', () => {
    const wrapper = shallow(<AdminStudentprofile />);
    expect(wrapper).toMatchSnapshot();
  });
});
