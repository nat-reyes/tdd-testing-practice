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