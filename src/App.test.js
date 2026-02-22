import { render, screen } from '@testing-library/react';
import App from './App';

test('renders smart kids quiz title', () => {
  render(<App />);
  const linkElement = screen.getByText(/smart kids quiz/i);
  expect(linkElement).toBeInTheDocument();
});
