import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background-color: #c8e6c9; /* Light green */
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;
`;

const StyledTitle = styled.h2`
  color: #388e3c; /* Darker green */
  margin-bottom: 15px;
`;

// Define a styled component for the paragraph with a dynamic prop
const StyledParagraph = styled.p`
  font-size: 16px;
  color: ${props => (props.$isHighlight ? '#e91e63' : '#424242')}; /* Dynamic color based on prop */
  font-weight: ${props => (props.$isHighlight ? 'bold' : 'normal')};
  background-color: ${props => (props.$isHighlight ? '#ffeb3b' : 'transparent')};
  padding: 10px;
  border-radius: 5px;
`;

// Define a styled component for the button with hover effect
const StyledButton = styled.button`
  background-color: #4caf50; /* Green */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  font-size: 1em;
  transition: background-color 0.3s ease;

  &:hover { /* Pseudo-classes directly in CSS */
    background-color: #388e3c;
  }
`;

const StyledComponentsDemo = () => {
  const [highlight, setHighlight] = React.useState(false); // State for dynamic styling

  return (
    <StyledContainer>
      <StyledTitle>Styled Components Demo</StyledTitle>
      <StyledParagraph $isHighlight={highlight}> {/* Pass prop for dynamic styling */}
        This component uses Styled Components. Styles are defined directly in JavaScript.
        The paragraph color is dynamic based on state!
      </StyledParagraph>
      <StyledButton onClick={() => setHighlight(!highlight)}>
        Toggle Highlight
      </StyledButton>
    </StyledContainer>
  );
};

export default StyledComponentsDemo;