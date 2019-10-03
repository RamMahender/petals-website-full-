import React from 'react';
import { shallow } from 'enzyme';
import Studentlist from './studentlist';

describe('<Studentlist />', () => {
  test('renders', () => {
    const wrapper = shallow(<Studentlist />);
    expect(wrapper).toMatchSnapshot();
  });
});
