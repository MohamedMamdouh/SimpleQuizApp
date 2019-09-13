import React from 'react';
import './style.css';

const QuizQuestion = () => {
  return (
    <div className="QuizQuestionContainer">
      <h1 className="QuestionNumber">1.</h1>
      <span className="QuestionText">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </span>
      <div className="ButtonsContainer">
        <div className={`NoBtn Btn`}>
          <span className="BtnText">No</span>
          <span>⮀</span>
        </div>
        <div className={`YesButton Btn`}>
          <span className="BtnText">yes</span>
          <span>⮀</span>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
