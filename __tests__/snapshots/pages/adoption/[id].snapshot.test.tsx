import React from 'react';
import renderer from 'react-test-renderer';
import AdoptionDetail from '@root/pages/adoption/[id]';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

jest.mock('@root/components', () => ({
  ThemeContainer: jest.fn().mockImplementation(() => <>ThemeContainer</>),
  Header: jest.fn().mockImplementation(() => <>Header</>),
}));

it('should render homepage matching snapshot', () => {
  const tree = renderer.create(<AdoptionDetail />).toJSON();
  expect(tree).toMatchSnapshot();
});
