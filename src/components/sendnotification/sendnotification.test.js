import React from 'react';
import { shallow } from 'enzyme';
import Sendnotification from './sendnotification';

describe('<Sendnotification />', () => {
  test('renders', () => {
    const wrapper = shallow(<Sendnotification />);
    expect(wrapper).toMatchSnapshot();
  });
});
