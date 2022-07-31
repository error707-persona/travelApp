import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './style.css';


const SearchBar = ({value, changeInput}) => {

  return (
    <div className='searchBar-wrap'>
      <SearchIcon className='searchBar-icon'></SearchIcon>
      <input type="text"
      placeholder='Woodland Hills'
      value={value}
      onChange={changeInput}
      ></input>
    </div>
  )
}

export default SearchBar