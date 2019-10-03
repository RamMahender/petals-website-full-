import React from 'react';
import { shallow } from 'enzyme';
import ReactSidebar from './react-sidebar';

describe('<ReactSidebar />', () => {
  test('renders', () => {
    const wrapper = shallow(<ReactSidebar />);
    expect(wrapper).toMatchSnapshot();
  });
});
