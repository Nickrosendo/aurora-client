import React from 'react';
import renderer from 'react-test-renderer';
import { SignUp } from '@root/components';

it('should render SignUp component matching snapshot', () => {
  const tree = renderer.create(<SignUp />).toJSON();
  expect(tree).toMatchSnapshot();
});
