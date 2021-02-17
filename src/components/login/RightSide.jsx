import React from 'react';

export default function RightSide(props) {
  console.log("in right side");
console.log(props);

  return (
    <div
      className={`right-side ${props.side}`}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
}
