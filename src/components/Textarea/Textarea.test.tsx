import { render, screen } from '@testing-library/react';

import { Textarea } from './Textarea';

describe('Textarea component', () => {
  const defaultProps = {
    title: 'Default title',
    placeholder: 'Default placeholder',
  };

  it('render with defaultProps', () => {
    render(<Textarea {...defaultProps} />);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    expect(screen.getByLabelText(defaultProps.title)).toBeInTheDocument();
  });
});
