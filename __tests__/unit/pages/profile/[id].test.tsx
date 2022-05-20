/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
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

describe('ProfileDetail page tests', () => {
  it('renders the header component', () => {
    render(<ProfileDetail />);

    const element = screen.getByRole('main');

    expect(element).toBeInTheDocument();
  });
});
