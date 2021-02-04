import React from 'react';
import  './Search.css';

export default function Input(props) {
  let params = props;
  console.log(props);

  return (
    <div className="form-group-input">
      <input
        value={params.value}
        onChange={params.onChange}
        autoFocus
        type="text"
        className="form-control"
        id={params.name}
        name={params.name}
        aria-describedby="searchHelp"
        placeholder="Search by ingredient..."
      />
    </div>
  );
}

{
  /* <label htmlFor={params.name}>{params.label}</label> */
}
