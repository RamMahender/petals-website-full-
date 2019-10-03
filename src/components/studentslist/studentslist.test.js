import React from 'react';
import { shallow } from 'enzyme';
import Studentslist from './studentslist';

describe('<Studentslist />', () => {
  test('renders', () => {
    const wrapper = shallow(<Studentslist />);
    expect(wrapper).toMatchSnapshot();
  });
});
