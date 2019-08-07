import React from 'react'

const Search = ({value, children, onSearch}) => (
    <div>
        {children}
        <input type="text" value={value} onChange={onSearch}/>
    </div>
)

export default Search;