import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './not-found';

describe('<NotFound />', () => {
  test('renders', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
