import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// styled component for circles container
const CirclesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin-left: 2rem;
  align-items: center;
  margin-top: 1rem;
`;

// styled component for diffrent circles shape
const Circle = styled.span`
  font-size: .75rem;
  ${props => props.isHighLighted && 'font-size: 1rem;'}
  ${props => props.isNo && `color: #000;`}
  ${props => props.isYes && 'color: sandybrown;'}
`;

// Circle shapes
const CIRCLES = {
  answered: '●',
  current: '〇',
  notAnswered: '○'
};

const ProgressCircles = ({ results, currentQuestionIndex }) => {
  return (
    <CirclesContainer className="CirclesContainer">
      {results.map((result, i) => {
        const isCurrentQuestion = i === currentQuestionIndex;
        if (i === results.length) {
          return null;
        }
        let currentCircleShape;
        if (!!result) {
          currentCircleShape = 'answered';
        } else if (!result) {
          currentCircleShape = 'notAnswered';
        } else if (isCurrentQuestion) {
          currentCircleShape = 'current';
        }

        return (
          <Circle
            key={i}
            isNo={result === 'no'}
            isYes={result === 'yes'}
            isHighLighted={isCurrentQuestion}
          >
            {CIRCLES[currentCircleShape]}
          </Circle>
        );
      })}
    </CirclesContainer>
  );
};

ProgressCircles.propTypes = {
  results: PropTypes.array.isRequired,
  currentQuestionIndex: PropTypes.number.isRequired
};

export default ProgressCircles;
