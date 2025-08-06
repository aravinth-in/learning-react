import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import for useful assertions
import Counter from '../components/Counter';

// A test suite for the Counter component
describe('Counter Component', () => {

  // Test case 1: Check if the component renders with initial state
  test('should render with initial count of 0', () => {
    // Render the component into a virtual DOM
    render(<Counter />);
    // Find the heading that displays the count
    const countHeading = screen.getByText(/Count: 0/i);
    // Assert that the heading is in the document
    expect(countHeading).toBeInTheDocument();
  });

  // Test case 2: Check if the increment button works
  test('should increment the count when the Increment button is clicked', () => {
    render(<Counter />);
    // Find the buttons by their text content
    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    const countHeading = screen.getByText(/Count: 0/i);

    // Simulate a user clicking the increment button
    fireEvent.click(incrementButton);

    // Assert that the count heading has updated
    expect(countHeading).toHaveTextContent('Count: 1');
  });

  // Test case 3: Check if the decrement button works
  test('should decrement the count when the Decrement button is clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });
    const countHeading = screen.getByText(/Count: 0/i);
    
    // Simulate a user clicking the decrement button
    fireEvent.click(decrementButton);
    
    // Assert that the count heading has updated to the correct value
    expect(countHeading).toHaveTextContent('Count: -1');

    fireEvent.click(decrementButton);

    expect(countHeading).toHaveTextContent('Count: -2');
  });

});