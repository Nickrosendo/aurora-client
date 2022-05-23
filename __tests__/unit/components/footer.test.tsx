/*
 * jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { Footer } from '@root/components';

describe('Footer component tests', () => {
  it('should render without crashing', () => {
    render(<Footer />);
    const element = screen.getByTitle('footer');
    expect(element).toBeInTheDocument();
  });
});
