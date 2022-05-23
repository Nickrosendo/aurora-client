/*
 * jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { SignUp } from '@root/components';

describe('SignUp component tests', () => {
  it('should render without crashing', () => {
    render(<SignUp />);
    const element = screen.getByTitle('sign-up');
    expect(element).toBeInTheDocument();
  });
});
