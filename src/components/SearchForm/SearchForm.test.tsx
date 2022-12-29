import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BrowserRouter, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import { SearchForm } from './SearchForm';

export function LocationDisplay() {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
}

describe('SearchForm component', () => {
  it('should match snapshot', () => {
    render(
      <MemoryRouter>
        <SearchForm />
      </MemoryRouter>,
    );

    expect(screen).toMatchSnapshot();
  });

  it('should navigate to correct route after search button click', async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<SearchForm />} />
          <Route path="/search/TextSearchText" element={<LocationDisplay />} />
        </Routes>
      </BrowserRouter>,
    );

    const input = screen.getByTestId('search-input');
    const button = screen.getByTestId('search-button');

    await user.type(input, 'TextSearchText');

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    expect(input).toHaveValue('TextSearchText');

    await user.click(button);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    expect(screen.getByTestId('location-display')).toHaveTextContent('TextSearchText');
  });
});
