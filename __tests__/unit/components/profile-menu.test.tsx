/**
 * jest environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProfileMenu } from '@root/components';

describe('ProfileMenu component tests', () => {
  it('should render without crashing', () => {
    render(<ProfileMenu />);
    const element = screen.getByTitle('profile-menu');
    expect(element).toBeInTheDocument();
  });
});
