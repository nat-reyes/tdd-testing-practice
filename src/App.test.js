import { render, screen, fireEvent } from '@testing-library/react';
import { logRoles } from '@testing-library/dom';
import App from './App';

test('button has correct initial color', () => {

  // Log roles help me to identify the role of my elements.
  // const { container } = render(<App />);
  // logRoles(container);

  render(<App />);

  // we can use regular expressions in the name blue/i
  // it is a good practice to give it a name
  const colorBtn = screen.getByRole('button', { name: 'Change to blue'});
  expect(colorBtn).toHaveStyle({ backgroundColor: 'red' });
});

test('button turns blue when clicked', () => {
  render(<App />);
  // it is recommended to type again what we are learning to get used to the syntax.
  const colorBtn = screen.getByRole('button', { name: 'Change to blue'});

  // click element
  fireEvent.click(colorBtn);
  // bg color should change to blue
  expect(colorBtn).toHaveStyle({ backgroundColor: 'blue'});

  //expect the btn text to be 'change to red'
  expect(colorBtn).toHaveTextContent('Change to red');
});

test('Checkbox should exist and be uncheck, the button should be enabled', () => {

  render(<App/>);
  // Button should be enabled
  const colorBtn = screen.getByRole('button', { name: 'Change to blue'});
  expect(colorBtn).toBeEnabled();

  // Checkbox is unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('When the checkbox is checked, button should be disabled', () => {

  render(<App/>);
  // initially checkbox should be unchecked
  // RTL is smart to know that an id that also belongs to a label is referencing the same component
  const checkbox = screen.getByRole('checkbox', { name: "Disable bgutton"});
  const btnColor = screen.getByRole('button');

  expect(checkbox).not.toBeChecked();

  // After click should be checked and button disabled.
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(btnColor).toBeDisabled();
})

