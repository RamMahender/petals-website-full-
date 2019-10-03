import React from 'react';
import { shallow } from 'enzyme';
import Createweeklyjournal from './createweeklyjournal';

describe('<Createweeklyjournal />', () => {
  test('renders', () => {
    const wrapper = shallow(<Createweeklyjournal />);
    expect(wrapper).toMatchSnapshot();
  });
});
