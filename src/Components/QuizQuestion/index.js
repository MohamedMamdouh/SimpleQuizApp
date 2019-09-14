import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styled component for Question Container
const QuizQuestionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1vw;
  width: 100%;
`;

// Styled component for Question Text
const QuestionText = styled.span`
  text-align: start;
  height: 22vh;
`;

// Styled component for Buttons Container
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

// Styled Component for Yes and No Buttons
const Button = styled.button`
  border: none;
  outline: none;
  display: flex;
  width: 5rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin: 1rem;
  margin-left: 0rem;
  cursor: pointer;
  user-select: none;
  ${props => props.isYes && 'background-color: sandybrown;'}
  ${props => props.isNo && 'background-color: #000;'}
`;

// Styled component for Buttons
const BtnText = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

// handle Yes or No Button Click using useCallback react hook
const QuizQuestion = ({
  question: { id, text },
  questionNumber,
  onAnswerClick
}) => {
  const handleYesClick = useCallback(() => {
    onAnswerClick({ id, answer: 'yes' });
  }, [id, onAnswerClick]);

  const handleNoClick = useCallback(() => {
    onAnswerClick({ id, answer: 'no' });
  }, [id, onAnswerClick]);

  return (
    <QuizQuestionContainer>
      <h1 className="QuestionNumber">{questionNumber}.</h1>
      <QuestionText>{text}</QuestionText>
      <ButtonsContainer>
        <Button onClick={handleNoClick} isNo>
          <BtnText>No &nbsp; ⮀</BtnText>
        </Button>
        <Button onClick={handleYesClick} isYes>
          <BtnText>Yes &nbsp; ⮀</BtnText>
        </Button>
      </ButtonsContainer>
    </QuizQuestionContainer>
  );
};

QuizQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  questionNumber: PropTypes.number.isRequired,
  onAnswerClick: PropTypes.func.isRequired
};

export default QuizQuestion;
