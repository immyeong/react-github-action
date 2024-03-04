import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('counter starts at 0', () => {
  render(<App />);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(0);
});

test('minus button is correct', () => { 
  render(<App />);
  const textElement = screen.getByTestId('minus-button');
  expect(textElement).toHaveTextContent('-');
})

test('plus button is correct', () => {
  render(<App />);
  const textElement = screen.getByTestId('plus-button');
  expect(textElement).toHaveTextContent('+');
})

test('when the + button is pressed, count is changing', () => {
    render(<App />);
    const buttonElement = screen.getByTestId('plus-button');
    fireEvent.click(buttonElement);
    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toHaveTextContent(1);
})

test('on/off button has blue color', () => { 
    render(<App />);
    const buttonElement = screen.getByTestId('on/off-button');
    expect(buttonElement).toHaveStyle({ backgroundColor : "blue" });
})

test('Prevent +,- button for remaining, when on/off button is clicked', () => {
    render(<App />);
    const onOffButtonElement = screen.getByTestId('on/off-button');
    fireEvent.click(onOffButtonElement);
    const plusButtonElement = screen.getByTestId('plus-button');
    expect(plusButtonElement).toBeDisabled();
})