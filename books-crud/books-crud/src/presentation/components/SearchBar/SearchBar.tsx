import React, { ChangeEvent } from "react";
import "./SearchBar.css";

interface props {
  searchText: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ searchText, placeholder, onChange }: props) => {
  return (
    <div className="search-bar-container">
      <input
        className="search-input"
        value={searchText}
        placeholder={placeholder}
        onChange={onChange}
      />
      <span className="search-icon">
        <i className="fas fa-magnifying-glass"></i>
      </span>
    </div>
  );
};

export default SearchBar;
