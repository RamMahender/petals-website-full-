import React from 'react';
import { shallow } from 'enzyme';
import Classlist from './classlist';

describe('<Classlist />', () => {
  test('renders', () => {
    const wrapper = shallow(<Classlist />);
    expect(wrapper).toMatchSnapshot();
  });
});
