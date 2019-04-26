import React from 'react';
import logo from './logo.svg';
import './App.css';

const KEY_STORAGE = 'dongnd'

const App = () => {

  const [query, setQuery] = React.useState('');
  const [data, setData] = React.useState([]);


  const onChange = event => {
    setQuery(event.target.value);
  }

  const onSearch = event => {
    event.preventDefault()
    if(query === '') {
      return
    }
    const cacheData = localStorage.getItem(query);
    if (cacheData) {
      setData(JSON.parse(cacheData));
    } else {
      fetch('https://hn.algolia.com/api/v1/search?query=' + query)
      .then(response => response.json())
      .then(result => onSetResult(query, result.hits))
    }
  }

  const onSetResult = (key, result) => {
    localStorage.setItem(key,result);
    setData(result);
  }

  return (
    <div className="App">
      <h1>Search Hacker News with Local Storage</h1>
      <p>
        There shouldn't be a second network request, when you search
        for a keyword twice.
      </p>
      {/* search input */}
      <form onSubmit={onSearch}>
        <input type="text" onChange={onChange}/>
        <button type="submit">Search</button>
      </form>
      {/* result */}
        <ul>
          {data.map(item => (
            <li key={item.objectID}>{item.title}</li>
          ))}
        </ul>
    </div>
  );
}

export default App;
