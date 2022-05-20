/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import NewAdoption from '@root/pages/adoption/new';

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

describe('NewAdoption page tests', () => {
  it('renders the header component', () => {
    render(<NewAdoption />);

    const element = screen.getByRole('main');

    expect(element).toBeInTheDocument();
  });
});
