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
]

const nestList = [list,list]

const NestedList = () => {
    return (
        <ul>
            {nestList.map((items,index) => (
                <ui key={index}>
                    <h4>List {index + 1}</h4>
                    {items.map(ite => (
                        <li key={ite.id}>
                            <div>{ite.id}</div>
                            <div>{ite.firstname}</div>
                            <div>{ite.lastname}</div>
                            <div>{ite.year}</div>
                        </li>
                    ))}
                </ui>
            ))}
        </ul>
    );

}

export default NestedList