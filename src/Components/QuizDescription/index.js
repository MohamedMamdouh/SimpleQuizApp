import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

//Styled Component for Quiz Description Container
const QuizDescriptionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1rem;
`;

//Styled component for Description text
const Description = styled.p`
  text-align: start;
  font-size: 0.75rem;
  margin-bottom: 2rem;
`;

const QuizDescription = ({ title, description }) => {
  return (
    <QuizDescriptionContainer className="QuizDescriptionContainer">
      <h1>{title}</h1>
      <Description>{description}</Description>
    </QuizDescriptionContainer>
  );
};

QuizDescription.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default QuizDescription;
