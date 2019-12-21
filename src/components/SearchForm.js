import React, { useState } from "react";

export default function SearchForm({ query, setQuery, setCharacters, characters }) {


 const submitHandler = e => {
   e.preventDefault();
   const searchedCharacters = characters.filter(char =>
    char.name.toLowerCase().includes(query.toLowerCase())
    );
    setCharacters(searchedCharacters);
 };

 const queryHandler = e => {
   setQuery(e.target.value)
 };

  return (
    <section className="search-form">
     <form onSubmit={submitHandler}>
       <input 
        type='text'
        aria-label='search form'
        name='search'
        id='search'
        placeholder='search'
        autoComplete='off'
        value={query}
        onChange={queryHandler}
       />
       <button type='submit'>Search!</button>
     </form>
    </section>
  );
}
