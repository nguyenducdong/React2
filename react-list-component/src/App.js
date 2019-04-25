import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleList from './Components/SimpleList'
import ComplexList from './Components/ComplexList'
import ListWithAddItem from './Components/ListWithAddItem'
import ListWithUpdateItem from './Components/ListWithUpdateItem'
import ListWithRemoveItem from './Components/ListWithRemoveItem'
import NestedList from './Components/NestedList'
import ListScrollToItem from './Components/ListScrollToItem'
import ListWithUnstableIndex from './Components/ListWithUnstableIndex'
import ListScrollToItemOutside from './Components/ListScrollToItemOutside'

const App = () => {
  return (
    <div>
      <h1>List simple in react</h1>
      <h2>"Simple List" - example</h2>
      <SimpleList />
      <hr/>
      <h2>"Complex List" - example</h2>
      <ComplexList/>
      <hr/>
      <h2>"List add item" - example</h2>
      <ListWithAddItem/>
      <hr/>
      <h2>"Update item" - example</h2>
      <ListWithUpdateItem/>
      <hr/>
      <h2>"Remove item" - example</h2>
      <ListWithRemoveItem/>
      <hr/>
      <h2>"Nested list" - example</h2>
      <NestedList/>
      <hr/>
      <h2>"ListScrollToItem" - example</h2>
      <ListScrollToItem/>
      <hr/>
      <h2>"ListWithUnstableIndex" - example</h2>
      <ListWithUnstableIndex/>

      <hr/>
      <h2>"ListScrollToItemOutside" - example</h2>
      <ListScrollToItemOutside/>
    </div>
  );
}

export default App;
