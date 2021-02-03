import React from "react";

export default function Input(props) {
  let params = props;

  return (
    <div className="form-group">
      <label htmlFor={params.name}>{params.label}</label>
      <input
        value={params.value}
        onChange={params.onChange}
        autoFocus
        type="text"
        className="form-control"
        id={params.name}
        name={params.name}
        aria-describedby="searchHelp"
        placeholder="Search city"
      />
    </div>
  );
}
