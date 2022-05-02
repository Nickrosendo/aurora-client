/**
 * jest environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import { MainMenu } from '@root/components';

describe('Main menu component tests', () => {
  it('should render without crashing', () => {
    render(<MainMenu />);
    const element = screen.getByTitle('main-menu');
    expect(element).toBeInTheDocument();
  });
});
