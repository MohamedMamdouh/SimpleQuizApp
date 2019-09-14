import React, { useState, useCallback } from 'react';
import QuizDescription from './Components/QuizDescription';
import QuizQuestion from './Components/QuizQuestion';
import Result from './Components/Result';
import ProgressCircles from './Components/ProgressCircles';
import styled from 'styled-components';
import './App.css';

// Mocking Quiz details data
const QUIZDETAILS = {
  TITLE: 'TEST YOURSELF',
  DESCRIPTION:
    'Answer 9 questions and get better understanding' +
    ' of how much you could benfite from our app'
};

// Mocking Quiz Questions

const QUIZQUESTIONS = [
  {
    id: 1,
    text:
      'Can you tell customers why they should buy from you instead of your competition?'
  },
  {
    id: 2,
    text:
      'Do you know how you will reach the people that would want to buy your product or service?'
  },
  {
    id: 3,
    text: 'Is the price you need to charge to be profitable competitive?'
  },
  {
    id: 4,
    text: 'Do you have the start-up cash to act now?'
  },
  {
    id: 5,
    text: 'Does your business idea serve a niche or growing market?'
  },
  {
    id: 6,
    text: 'Do you often meet and connect to new people'
  },
  {
    id: 7,
    text: 'Are you often relaying on other people to help you communicate'
  },
  {
    id: 8,
    text:
      'Do you regularly pass along customer compliments regarding your employees’ performance?'
  },
  {
    id: 9,
    text:
      'Do you provide employees with time off for training that will improve their skills and allow them to take on more responsibility?'
  }
];

// Styled Component for Quiz container
const QuizContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  border-width: 1px;
  border-color: #000;
  margin: 3rem;
  border-style: solid;
  height: 35vh;
`;

// Styled Component for the right section of quiz component
const QuizRightPartConainer = styled.div`
  display: flex;
  flex: 1
  align-items: center;
  flex-direction: column;
  padding-right:1vw;
`;

// styled Component for back button
const BackBtn = styled.button`
  font-size: 2rem;
  border: none;
  outline: none;
`;

//Styled component for backButton container
const BackButtonContainter = styled.div`
  flex: 0.2;
`;

// Initail state used in init the state or reset state
const INITIAL_STATE = {
  questions: QUIZQUESTIONS,
  currentQuestionIndex: 0,
  result: QUIZQUESTIONS.reduce((acc, question) => {
    const { id } = question;
    return { ...acc, [id]: undefined };
  }, {})
};

const App = () => {
  const [state, setState] = useState(INITIAL_STATE);

  //Handle on answer function to get yes or no from 'QuizQuestion' component
  const onAnswerClick = useCallback(
    ({ id, answer }) => {
      const doNotIncrement =
        state.currentQuestionIndex === state.questions.length;
      setState({
        ...state,
        currentQuestionIndex: doNotIncrement
          ? state.currentQuestionIndex
          : state.currentQuestionIndex + 1,
        result: {
          ...state.result,
          [id]: answer
        }
      });
    },
    [state]
  );

  // Handle back button
  const onBackClick = useCallback(() => {
    setState({
      ...state,
      currentQuestionIndex: state.currentQuestionIndex - 1
    });
  }, [state]);

  // Handle try again button button and reset the state
  const onReset = useCallback(() => {
    setState(INITIAL_STATE);
  }, [setState]);

  const { questions, currentQuestionIndex, result } = state;
  const currentQuestion = questions[currentQuestionIndex];
  const isLastItem = currentQuestionIndex === state.questions.length;
  const resultsList = Object.values(result);
  return (
    <div className="App">
      <QuizContainer>
        <QuizDescription
          title={QUIZDETAILS.TITLE}
          description={QUIZDETAILS.DESCRIPTION}
        />
        <BackButtonContainter>
          {currentQuestionIndex !== 0 && !isLastItem ? (
            <BackBtn onClick={onBackClick}>⮃</BackBtn>
          ) : null}
        </BackButtonContainter>
        <QuizRightPartConainer>
          <ProgressCircles
            results={resultsList}
            currentQuestionIndex={currentQuestionIndex}
          />
          {isLastItem ? (
            <Result onResetResult={onReset} results={resultsList} />
          ) : (
            <QuizQuestion
              onAnswerClick={onAnswerClick}
              question={currentQuestion}
              questionNumber={currentQuestionIndex + 1}
            />
          )}
        </QuizRightPartConainer>
      </QuizContainer>
    </div>
  );
};

export default App;
