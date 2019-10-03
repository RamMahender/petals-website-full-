import React from 'react';
import { shallow } from 'enzyme';
import TabsExamples from './tabs-examples';

describe('<TabsExamples />', () => {
  test('renders', () => {
    const wrapper = shallow(<TabsExamples />);
    expect(wrapper).toMatchSnapshot();
  });
});
