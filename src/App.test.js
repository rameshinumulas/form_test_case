import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // RENDER THE PAGE
  render(<App />);
  const titleElement = screen.getByText("Form in React");
  const nameElement = screen.getByPlaceholderText("Enter First Name");
  const lastNameElement = screen.getByPlaceholderText("Enter Last Name");
  const emailElement = screen.getByPlaceholderText("Enter email");
  const mblElement = screen.getByPlaceholderText("Enter Mobile number");
  const genElement = screen.getByText("Gender*");
  expect(nameElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
  expect(mblElement).toBeInTheDocument();
  expect(lastNameElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
  expect(genElement).toBeInTheDocument();
});
