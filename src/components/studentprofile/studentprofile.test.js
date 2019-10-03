import React from 'react';
import { shallow } from 'enzyme';
import Studentprofile from './studentprofile';

describe('<Studentprofile />', () => {
  test('renders', () => {
    const wrapper = shallow(<Studentprofile />);
    expect(wrapper).toMatchSnapshot();
  });
});
