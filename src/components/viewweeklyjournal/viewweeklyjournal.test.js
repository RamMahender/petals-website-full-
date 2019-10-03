import React from 'react';
import { shallow } from 'enzyme';
import Viewweeklyjournal from './viewweeklyjournal';

describe('<Viewweeklyjournal />', () => {
  test('renders', () => {
    const wrapper = shallow(<Viewweeklyjournal />);
    expect(wrapper).toMatchSnapshot();
  });
});
