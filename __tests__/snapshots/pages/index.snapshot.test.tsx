import React from 'react';
import renderer from 'react-test-renderer';
import Index from '@root/pages/index';

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
  AdoptionList: jest.fn().mockImplementation(() => <>AdoptionList</>),
  Header: jest.fn().mockImplementation(() => <>Header</>),
}));

it('should render homepage matching snapshot', () => {
  const tree = renderer.create(<Index />).toJSON();
  expect(tree).toMatchSnapshot();
});
