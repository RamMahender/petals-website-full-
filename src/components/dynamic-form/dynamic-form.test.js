import React from 'react';
import { shallow } from 'enzyme';
import DynamicForm from './dynamic-form';

describe('<DynamicForm />', () => {
  test('renders', () => {
    const wrapper = shallow(<DynamicForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
