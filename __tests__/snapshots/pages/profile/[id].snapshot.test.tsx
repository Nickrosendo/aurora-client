import React from 'react';
import renderer from 'react-test-renderer';
import ProfileDetail from '@root/pages/profile/[id]';

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

it('should render profile detail matching snapshot', () => {
  const tree = renderer.create(<ProfileDetail />).toJSON();
  expect(tree).toMatchSnapshot();
});
