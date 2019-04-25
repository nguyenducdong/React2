import React, {useState} from 'react'

const initialList = [
    'React',
    'Java',
    'dotNet'
]

const ListWithAddItem = () => {

    const [value, setValue] = useState()
    const [list, setList] = useState(initialList)


    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        if(value) {
            setList(list.concat(value))
        }
        setValue('')
        event.preventDefault();
        
    }

    return (
        <div>
            <ul>
                {list.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange}/>
                <button type='submit'>Add item</button>
            </form>
        </div>

    )
}

export default ListWithAddItem;