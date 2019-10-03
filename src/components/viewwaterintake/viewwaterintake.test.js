import React from 'react';
import { shallow } from 'enzyme';
import Viewwaterintake from './viewwaterintake';

describe('<Viewwaterintake />', () => {
  test('renders', () => {
    const wrapper = shallow(<Viewwaterintake />);
    expect(wrapper).toMatchSnapshot();
  });
});
