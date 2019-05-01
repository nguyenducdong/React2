import React from 'react'

const Select = ({value, onchange, children}) => (
    <select value={value} onChange={event => onchange(event.target.value)}>
        {children}
    </select>
)

export default Select