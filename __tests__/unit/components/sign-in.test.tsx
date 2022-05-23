/*
 * jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { SignIn } from '@root/components';

describe('SignIn component tests', () => {
  it('should render without crashing', () => {
    render(<SignIn />);
    const element = screen.getByTitle('sign-in');
    expect(element).toBeInTheDocument();
  });
});
