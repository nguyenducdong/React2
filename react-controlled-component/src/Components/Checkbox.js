import React from 'react'

const Checkbox = ({value, onCheckboxChange,children}) => {

    const handleChange = (event) => {
        onCheckboxChange(event.target.checked)
    }

    return (
        <label>
            {children}
            <input type="checkbox" value={value} onChange={handleChange} checked={value}/>
        </label>
    );
}

export default Checkbox