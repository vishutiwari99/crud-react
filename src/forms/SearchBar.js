import React from 'react'
import './SearchBar.css'
const SearchBar = (props) => {
    return (
        <div className="search_container">
            <input type="text" name="name" placeholder="Search in Table" onChange={(event) => props.filter(event.target.value)} />
        </div>
    )
}

export default SearchBar
