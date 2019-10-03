import React from 'react';
import { shallow } from 'enzyme';
import Createchild from './createchild';

describe('<Createchild />', () => {
  test('renders', () => {
    const wrapper = shallow(<Createchild />);
    expect(wrapper).toMatchSnapshot();
  });
});
