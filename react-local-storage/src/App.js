import React from 'react';
import logo from './logo.svg';
import './App.css';

const useStateWithLocalStorage = localStrorageKey => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStrorageKey) || ''
  );

  React.useEffect(()=>{
    localStorage.setItem(localStrorageKey,value)
  },[value]);

  return [value, setValue];
}

const App= () => {
  const [value, setValue] = useStateWithLocalStorage('DONGND');
  const handleChange = event => setValue(event.target.value);

  return (
    <div>
      <h2>Hello React in local Strorage</h2>
      <input value={value} type="text" onChange={handleChange}/>
    </div>
  );
}

export default App;
