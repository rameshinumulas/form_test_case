import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';


describe('Form in React', () => {

test('Render Basic HTML Tags', () => {
  // RENDER THE PAGE
  render(<App />);
  const titleElement = screen.getByText("Form in React");
  expect(titleElement).toBeInTheDocument();
  const nameElement = screen.getByPlaceholderText("Enter First Name");
  expect(nameElement).toBeInTheDocument();
  const lastNameElement = screen.getByPlaceholderText("Enter Last Name");
  expect(lastNameElement).toBeInTheDocument();
  const emailElement = screen.getByPlaceholderText("Enter email");
  expect(emailElement).toBeInTheDocument();
  const mblElement = screen.getByPlaceholderText("Enter Mobile number");
  expect(mblElement).toBeInTheDocument();
  const genElement = screen.getByText("Gender*");
  expect(genElement).toBeInTheDocument();
  const buttonElement = screen.getByText("Submit");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass('btn');

});

// THIS IS THE TEST CASE TO CHECK SPECIFIC INPUT FIELD
test('Check input fileds', async() => {
  render(<App />);
  const inputVal = screen.getByTestId("firstname");
  // fireEvent.change(inputVal, {
  //   target: { value : 'Sachin'} // THIS IS ONE WAY TO CHECK THE USER ENTERING DATA OR NOT
  // })

  await userEvent.type(inputVal, 'Sachin'); // THIS IS ANOTHER WAY TO TEST
  // It simulates real user typing.
  // It triggers all necessary browser events (like keydown, keypress, and keyup). 

  expect(inputVal.value).toBe('Sachin');
})

});

// THIS IS THE TEST CASE TO TEST ALL OF THE INPUT FIELDS AT A TIME

test('should allow user to type into all text-based input fields', async () => {
  render(<App />);
  const inputFieldsList = [
    { testId: 'firstname', value: 'Sachin' },
    { testId: 'lastname', value: 'Tendulkar' },
    { testId: 'email', value: 'sachin.tendulkar' },
    { testId: 'contact', value: '1234567890' },
    { testId: 'userDescription', value: 'This is a sample description' },
  ]
  for (const { testId, value } of inputFieldsList) {
    const inputVal = screen.getByTestId(testId);
    await userEvent.type(inputVal, value);
    expect(inputVal.value).toBe(value);
  }

  // THIS IS FOR SELECTION FIELD
  const inputVal = screen.getByTestId('userCourse');
  await userEvent.selectOptions(inputVal, '1');
  expect(inputVal.value).toBe('1');
})

test('should allow user to select option in checkobx and radio buttons', async() => {
  render(<App />);
  const inputRadioList = [
    { testId: 'male'},
    { testId: 'female'},
    { testId: 'other'}
  ]

  for (const { testId } of inputRadioList) {
    const inputVal = screen.getByTestId(testId);
    await userEvent.click(inputVal);
    expect(inputVal.checked).toBe(true);
  }

  const inputCheckboxList = [
    { testId: 'english'},
    { testId: 'maths' },
    { testId: 'physics' },
  ]

  for (const { testId } of inputCheckboxList) {
    const inputVal = screen.getByTestId(testId);
    fireEvent.change(inputVal, { target: { checked: true } });
  }
})
