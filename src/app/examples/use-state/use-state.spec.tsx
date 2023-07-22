import { render } from '@testing-library/react';

import UseState from './use-state';

describe('UseState', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseState />);
    expect(baseElement).toBeTruthy();
  });
});
