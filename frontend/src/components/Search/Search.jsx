import React from 'react'
import style from './Search.module.css';

function Search(props) {
  return (
    <div className={style.container}>
        <input type="text" placeholder='Search...' onChange={(e) => {props.setSearchTerm(e.target.value)}} />
    </div>
  )
}

export default Search