import React from 'react';
import { shallow } from 'enzyme';
import Rateweeklyjournal from './rateweeklyjournal';

describe('<Rateweeklyjournal />', () => {
  test('renders', () => {
    const wrapper = shallow(<Rateweeklyjournal />);
    expect(wrapper).toMatchSnapshot();
  });
});
