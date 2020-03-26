import React, { useState, useEffect } from "react";
import "./ComponentStyles.scss";

const SearchBar = ({ setInput, searchButton }) => {
  return (
    <div className="SearchContainer">
      선규웹
      <div className="SearchBar">
        <input
          className="SearchInpput"
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={searchButton}>검색</button>
      </div>
    </div>
  );
};

export default SearchBar;
