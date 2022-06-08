/*
 * jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { AuthContainer } from '@root/components';

describe('AuthContainer component tests', () => {
  it('should render without crashing', () => {
    render(<AuthContainer isOpen={true} />);
    const element = screen.getByTitle('auth-container');
    expect(element).toBeInTheDocument();
  });

  it('should render initially with signIn tab active', () => {
    render(<AuthContainer isOpen={true} />);
    const element = screen.getByTitle('sign-in-tab');
    expect(element).toBeInTheDocument();
  });

  it('should render with singUp tab active', () => {
    render(<AuthContainer isOpen={true} initialAuthType={1} />);
    const element = screen.getByTitle('sign-up-tab');
    expect(element).toBeInTheDocument();
  });
});
