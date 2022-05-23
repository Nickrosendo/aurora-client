import React from 'react';
import renderer from 'react-test-renderer';
import { SignIn } from '@root/components';

it('should render SignIn component matching snapshot', () => {
  const tree = renderer.create(<SignIn />).toJSON();
  expect(tree).toMatchSnapshot();
});
