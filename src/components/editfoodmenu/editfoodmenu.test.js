import React from 'react';
import { shallow } from 'enzyme';
import Editfoodmenu from './editfoodmenu';

describe('<Editfoodmenu />', () => {
  test('renders', () => {
    const wrapper = shallow(<Editfoodmenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
