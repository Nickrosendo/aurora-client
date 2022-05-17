/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
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

describe('AdoptionDetail page tests', () => {
  it('renders the header component', () => {
    render(<AdoptionDetail />);

    const element = screen.getByRole('main');

    expect(element).toBeInTheDocument();
  });
});
