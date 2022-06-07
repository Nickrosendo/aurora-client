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
});
