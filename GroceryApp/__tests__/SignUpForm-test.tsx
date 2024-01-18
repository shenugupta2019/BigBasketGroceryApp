import React from 'react';
import renderer from 'react-test-renderer';
import {SignUpForm} from '../SignUpForm';

test('renders correctly', () => {
  const tree = renderer.create(<SignUpForm />);
  expect(tree).toMatchSnapshot();
});
