import React from 'react'

const Select = ({value, children, onSelectChange}) => {
    const handleSelectChange = event => {
        onSelectChange(event.target.value)
    }
    return (
        <label>
            {children}: 
            <select value={value} onChange={handleSelectChange}>
            <option value="Java">Java</option>
            <option value="iOS">iOS</option>
            <option value="React">React</option>
            <option value="Node JS">Node JS</option>
        </select>
        </label>
    );
}

export default Select