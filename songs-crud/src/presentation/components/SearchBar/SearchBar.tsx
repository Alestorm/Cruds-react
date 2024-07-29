import React from 'react'
import './SearchBar.css';

interface props{
    value:string;
    placeholder:string;
    onChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchBar = ({value,placeholder,onChange}:props) => {
  return (
    <div className='search-bar-container'>
      <input className='search-input' value={value} placeholder={placeholder} onChange={onChange} />
      <span className='search-icon'><i className="fas fa-magnifying-glass"></i></span>
    </div>
  )
}

export default SearchBar