import React from 'react';
import './style.css';

const result = ['yes', 'no', 'current', undefined];

const ProgressCircles = () => {
  return (
    <div className="CirclesContainer">
      {result.map((result, i) => {
        if (result === 'yes') {
          return (
            <span key={result + i} className="YesCircle">
              ●
            </span>
          );
        }
        if (result === 'no') {
          return (
            <span key={result + i} className="NoCircle">
              ●
            </span>
          );
        }
        if (result === 'current') {
          return (
            <span key={result + i} className="CurrentCircle">
              〇
            </span>
          );
        }
        if (result === undefined) {
          return (
            <span key={result + i} className="UndefinedCircle">
              ○
            </span>
          );
        }
        return null;
      })}
    </div>
  );
};

export default ProgressCircles;
