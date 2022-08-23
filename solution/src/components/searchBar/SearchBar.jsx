import React from "react";
import { useRef, useState } from "react";

const SearchBar = ({ getData }) => {
  const inputRef = useRef();
  const selectRef = useRef();

  const handleSubmit = () => {
    getData(inputRef.current.value, selectRef.current.value);
  };
  return (
    <div className="searchBarContainer">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input className="srcInput" ref={inputRef} type="text" />
        <button className="btnSearch" type="submit">SEARCH</button>
        <select className="slcInput" ref={selectRef} name="" id="dropdown">
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
          <option value="teatime">Teatime</option>
        </select>
      </form>
    </div>
  );
};

export default SearchBar;
