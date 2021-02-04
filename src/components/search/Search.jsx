import React, { useState } from 'react';
import Input from './Input';
import  './Search.css';

export default function Search() {
  const [searchArgument, setSearchArgument] = useState('');

  const handleChange = (e) => {
    setSearchArgument(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchArgument);
    window.location.href = `/search/${searchArgument}`;
  };

  return (
    <div id="search-form">
      <form onSubmit={handleSubmit}>
        <Input name="search" value={searchArgument} onChange={handleChange} />
        <small id="emailHelp" className="form-text text-muted"></small>
      </form>
    </div>
  );
}
