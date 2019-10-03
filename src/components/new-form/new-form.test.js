import React from 'react';
import { shallow } from 'enzyme';
import NewForm from './new-form';

describe('<NewForm />', () => {
  test('renders', () => {
    const wrapper = shallow(<NewForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
