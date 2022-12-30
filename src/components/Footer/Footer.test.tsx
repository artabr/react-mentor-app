import { screen, render } from '@testing-library/react';

import { Footer } from './Footer';

describe('Footer component', () => {
  it('should match snapshot', () => {
    render(<Footer />);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    expect(screen).toMatchSnapshot();
  });
});
