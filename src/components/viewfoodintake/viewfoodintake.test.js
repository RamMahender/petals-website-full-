import React from 'react';
import { shallow } from 'enzyme';
import Viewfoodintake from './viewfoodintake';

describe('<Viewfoodintake />', () => {
  test('renders', () => {
    const wrapper = shallow(<Viewfoodintake />);
    expect(wrapper).toMatchSnapshot();
  });
});
