import { render } from '@testing-library/react';

import Error404 from './error404';

describe('Error404', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Error404 />);
    expect(baseElement).toBeTruthy();
  });
});
