import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styled component for Result Container
const ResultContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1rem;
  width: 100%;
`;

// Styled component for Result text
const ResultText = styled.span`
  text-align: start;
  margin-bottom: 1rem;
`;

// Styled Component for Try again button
const TryAgainButton = styled.span`
  text-decoration: underline;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const Result = ({ onResetResult, results }) => {
  const yesNumbers = results.filter(item => item === 'yes').length;
  return (
    <ResultContainer className="ResultContainer">
      <h1>Result</h1>
      <ResultText className="ResultText">
        {yesNumbers !== 0
          ? `You answered 'yes' ${yesNumbers} times. That indicates you could have
        some use of our product. We Recommed trying our free trial.`
          : `You didn't answere any 'yes'. That indicates you could try other product.`}
      </ResultText>
      <TryAgainButton className="TryAgainhref" onClick={onResetResult}>
        Try Again
      </TryAgainButton>
    </ResultContainer>
  );
};

Result.propTypes = {
  onResetResult: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired
};

export default Result;
