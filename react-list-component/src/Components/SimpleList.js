import React from 'react'


const list = ['a', 'b', 'c', 'd']
const SimpleList = () => (
    <ul>
        {list.map(item => {
            return (<li key={item}>{item}</li>)
        })}
    </ul>
)

export default SimpleList
