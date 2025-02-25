import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from '../app';

describe('render app component', () => {
  it('should be render app component', () => {
    const { container } = render(<App />);

    expect(container).toBeDefined();
  });
});
