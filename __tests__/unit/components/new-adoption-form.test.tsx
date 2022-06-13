/*
 * jest-environment jsdom
 */

import { screen, render } from '@testing-library/react';
import { NewAdoptionForm } from '@root/components';

describe('NewAdoptionForm component tests', () => {
  it('should render without crashing', () => {
    render(<NewAdoptionForm />);
    const element = screen.getByTitle('new-adoption-form');
    expect(element).toBeInTheDocument();
  });
});
