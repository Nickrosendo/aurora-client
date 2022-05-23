import React from 'react';
import renderer from 'react-test-renderer';
import { Footer } from '@root/components';

it('should render Footer component matching snapshot', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
