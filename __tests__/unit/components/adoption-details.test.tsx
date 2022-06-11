/*
 * jest-environment jsdom
 */
import { screen, render } from '@testing-library/react';
import { AdoptionDetails } from '@root/components';

describe('AdoptionDetail component tests', () => {
  it('should render without crashing', () => {
    render(<AdoptionDetails adoptionId={'foo'} />);
    const element = screen.getByTitle('adoption-details');
  });
});
