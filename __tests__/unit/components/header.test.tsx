/**
 *  @jest-environment jsdom
 */

import React from 'react';

import { render, screen } from '@testing-library/react';
import { Header } from '@root/components';

describe('Header component tests', () => {
  it('should render without crashing', () => {
    render(<Header />);
    const element = screen.getByTitle('header');
    expect(element).toBeInTheDocument();
  });
});
