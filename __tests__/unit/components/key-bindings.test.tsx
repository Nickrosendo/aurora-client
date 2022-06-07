/*
 * jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { KeyBindings } from '@root/components';

describe('KeyBindings component tests', () => {
  it('should render without crashing', () => {
    render(<KeyBindings />);
    const element = screen.getByTitle('key-bindings');
    expect(element).toBeInTheDocument();
  });
});
