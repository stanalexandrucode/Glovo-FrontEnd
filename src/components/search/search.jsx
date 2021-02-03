import React, { useState } from "react";
import Input from './input';


export default function Search(props) {
  const [searchArgument, setSearchArgument] = useState("");

  const handleChange = (e) => {
    setSearchArgument(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/search/${searchArgument}`;
  };

  return (
    <div id="search-form">
      <form onSubmit={handleSubmit} {...props}>
        <Input name="search" value={searchArgument} onChange={handleChange} />
        <small id="emailHelp" className="form-text text-muted"></small>
      </form>
    </div>
  );
}
