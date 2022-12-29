import { screen, render } from '@testing-library/react';

import { Footer } from './Footer';

describe('Footer component', () => {
  it('should match snapshot', () => {
    render(<Footer />);

    expect(screen).toMatchSnapshot();
  });
});
