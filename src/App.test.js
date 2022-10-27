import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading text', () => {
  render(<App />);
  const linkElement = screen.getByText(/She Techs Front End/i);
  expect(linkElement).toBeInTheDocument();
});
