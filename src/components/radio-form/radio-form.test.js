import React from 'react';
import { shallow } from 'enzyme';
import RadioForm from './radio-form';

describe('<RadioForm />', () => {
  test('renders', () => {
    const wrapper = shallow(<RadioForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
