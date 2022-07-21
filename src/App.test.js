import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

function setup() {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
}

test('renders App', () => {
  setup();
});

describe('Header', () => {
  test('"Header Logo" links to correct url', () => {
    setup();
    const link = screen.getByRole('link', { name: /logo-header/i });
    userEvent.click(link);

    expect(
      screen.getByRole('heading', { name: /Home Page/i }),
    ).toBeInTheDocument();
  });
});

describe('<Footer>', () => {
  test('"Footer Logo" links to correct url', () => {
    setup();
    const link = screen.getByRole('link', { name: /logo-footer/i });

    userEvent.click(link);

    expect(
      screen.getByRole('heading', { name: /Home Page/i }),
    ).toBeInTheDocument();
  });
});
