import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
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
  test('"Header Logo" links to correct route', () => {
    setup();
    const link = screen.getByRole('link', { name: /logo-header/i });
    userEvent.click(link);

    expect(
      screen.getByRole('heading', { name: /No reactions to your reddit posts/i }),
    ).toBeInTheDocument();
  });
});

describe('Footer', () => {
  test('"Footer Logo" links to correct route', () => {
    setup();
    const link = screen.getByRole('link', { name: /logo-footer/i });
    userEvent.click(link);

    expect(
      screen.getByRole('heading', { name: /No reactions to your reddit posts/i }),
    ).toBeInTheDocument();
  });

  test('"profy.dev" links to the correct external url', () => {
    setup();
    const footer = screen.getByRole('contentinfo');
    const link = within(footer).getByRole('link', { name: /profy.dev/i });
    userEvent.click(link);

    expect(link).toHaveAttribute('href', 'https://profy.dev/employers');
  });
});

describe('Homepage', () => {
  test('"profy.dev" links to the correct external url', () => {
    setup();
    const main = screen.getByRole('main');
    const link = within(main).getByRole('link', { name: /profy.dev/i });
    userEvent.click(link);

    expect(link).toHaveAttribute('href', 'https://profy.dev');
  });

  test('"Click here for more information" links to the correct external url', () => {
    setup();
    const main = screen.getByRole('main');
    const link = within(main).getByRole('link', { name: /Click here for more information/i });
    userEvent.click(link);

    expect(link).toHaveAttribute('href', 'https://profy.dev/employers');
  });
});
