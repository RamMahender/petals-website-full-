import React from 'react';
import { shallow } from 'enzyme';
import Foodmenu from './foodmenu';

describe('<Foodmenu />', () => {
  test('renders', () => {
    const wrapper = shallow(<Foodmenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
