import { render, screen, fireEvent } from '@testing-library/react';
import { logRoles } from '@testing-library/dom';
import { replaceCamelWithSpaces } from './App';
import App from './App';

test('button has correct initial color', () => {

  // Log roles help me to identify the role of my elements.
  // const { container } = render(<App />);
  // logRoles(container);

  render(<App />);

  // we can use regular expressions in the name blue/i
  // it is a good practice to give it a name
  const colorBtn = screen.getByRole('button', { name: 'Change to Midnight Blue'});
  expect(colorBtn).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

test('button turns blue when clicked', () => {
  render(<App />);
  // it is recommended to type again what we are learning to get used to the syntax.
  const colorBtn = screen.getByRole('button', { name: 'Change to Midnight Blue'});

  // click element
  fireEvent.click(colorBtn);
  // bg color should change to blue
  expect(colorBtn).toHaveStyle({ backgroundColor: 'MidnightBlue'});

  //expect the btn text to be 'change to red'
  expect(colorBtn).toHaveTextContent('Change to Medium Violet Red');
});

test('Checkbox should exist and be uncheck, the button should be enabled', () => {

  render(<App/>);
  // Button should be enabled
  const colorBtn = screen.getByRole('button', { name: 'Change to Midnight Blue'});
  expect(colorBtn).toBeEnabled();

  // Checkbox is unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('When the checkbox is checked, button should be disabled', () => {

  render(<App/>);
  // initially checkbox should be unchecked
  // RTL is smart to know that an id that also belongs to a label is referencing the same component
  const checkbox = screen.getByRole('checkbox', { name: "Disable button"});
  const btnColor = screen.getByRole('button');

  expect(checkbox).not.toBeChecked();

  // After click should be checked and button disabled.
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(btnColor).toBeDisabled();
})


test('Button gets grey when is disabled', () => {

  render(<App/>);
  // initially checkbox should be unchecked
  // RTL is smart to know that an id that also belongs to a label is referencing the same component
  const checkbox = screen.getByRole('checkbox', { name: "Disable button"});
  const btnColor = screen.getByRole('button');

  // Click checkbox to disabled it
  fireEvent.click(checkbox);
  expect(btnColor).toHaveStyle({ backgroundColor: 'gray'});

  // Click checkbox to enable it
  fireEvent.click(checkbox);
  expect(btnColor).toHaveStyle({ backgroundColor: 'MediumVioletRed'});
})

// with describe with define a scope of code more complex where we are going to test more than one functionality result
// this is also the way a functionality which work with a function exported from other file
describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});