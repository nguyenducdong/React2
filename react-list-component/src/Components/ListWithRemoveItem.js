import React from 'react'
const initialList = [
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
const ListWithRemoveItem = () => {

    const [list, setList] = React.useState(initialList)
    const handleRemoveItem = (id) => {
        setList(list.filter(item => {
            return item.id !== id
        }))
    }

    return (
        <ul>
            {list.map(item => (
                <li key={item.id}>
                    <label>
                        {item.firstname}
                    </label>
                    <button type="button" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                </li>

            ))}
        </ul>
    );
}

export default ListWithRemoveItem;