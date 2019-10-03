import React from 'react';
import { shallow } from 'enzyme';
import Createweeklyjournal1 from './createweeklyjournal1';

describe('<Createweeklyjournal1 />', () => {
  test('renders', () => {
    const wrapper = shallow(<Createweeklyjournal1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
