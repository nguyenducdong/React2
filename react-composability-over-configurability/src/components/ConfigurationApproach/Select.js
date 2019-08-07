import React from 'react';

const Select = ({value, options, onchange}) => 
    <select value={value} onChange={event => onchange(event.target.value)}>
        {
            options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            
        )}
    </select>

export default Select