import React from 'react'


const list = [
    {
      id: 'a',
      firstname: 'Robin',
      lastname: 'Wieruch',
      year: 1988,
    },
    {
      id: 'b',
      firstname: 'Dave',
      lastname: 'Davidds',
      year: 1990,
    },
];

const ComplexList = () => {
    return (
        <ul>
            {list.map(item => {
                return (
                    <li key={item.id}>
                        <div>{item.id}</div>
                        <div>{item.firstname}</div>
                        <div>{item.lastname}</div>
                        <div>{item.year}</div>
                    </li>
                );
            })}
        </ul>
    );

}

export default ComplexList