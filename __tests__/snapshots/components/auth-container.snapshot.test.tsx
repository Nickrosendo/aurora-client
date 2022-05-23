import React from 'react';
import renderer from 'react-test-renderer';
import { AuthContainer } from '@root/components';

it('should render AuthContainer component matching snapshot', () => {
  const tree = renderer.create(<AuthContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
