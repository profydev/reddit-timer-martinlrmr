import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const setup = (initialPath = '/') => render(
  <MemoryRouter initialEntries={[initialPath]}>
    <App />
  </MemoryRouter>,
);

test('contains link pointing to profy employers page', () => {
  setup();

  const profyLink = screen.getByRole('link', { name: 'profy.dev' });
  expect(profyLink.getAttribute('href')).toEqual('https://profy.dev/employers');
});

test('navigates to home page when logo is clicked', () => {
  setup('/search/javascript');

  const logoLink = screen.getByRole('link', { name: /logo-footer\.svg/i });
  userEvent.click(logoLink);

  expect(screen.getByText(/home page/i)).toBeInTheDocument();
});

test('navigates to terms page when terms link is clicked', () => {
  setup('/search/javascript');

  const termsLink = screen.getByRole('link', { name: /terms & privacy/i });
  userEvent.click(termsLink);

  expect(screen.getByText(/terms page/i)).toBeInTheDocument();
});
