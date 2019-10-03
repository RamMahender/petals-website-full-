import React from 'react';
import { shallow } from 'enzyme';
import CardsStudentview from './cards-studentview';

describe('<CardsStudentview />', () => {
  test('renders', () => {
    const wrapper = shallow(<CardsStudentview />);
    expect(wrapper).toMatchSnapshot();
  });
});
