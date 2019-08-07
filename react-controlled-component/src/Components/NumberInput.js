import React from 'react'


const getValue = (value, max, min) => {
    if (value > max){
        value = max
    }
    if(value < min) {
        value = min
    }
    return value;
}


const NumberInput = ({value, max, min,onNumberInputChange, children}) => {


    const handleChange = (event) => {
        onNumberInputChange(getValue(event.target.value, max, min))
    }

    const onIncrement = () => {
        onNumberInputChange(getValue(value+1, max, min))

    }

    const onDecrement = () => {
        onNumberInputChange(getValue(value-1, max, min))
    }

    return (
        <label>
            {children}
            <input
                type="number"
                min={min}
                max={max}
                value={value}
                onChange={handleChange}
            />
            <button type="button" onClick={onIncrement}>+</button>
            <button type="button" onClick={onDecrement}>-</button>
        </label>
    );
}

export default NumberInput;