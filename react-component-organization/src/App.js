import React from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './components/Search'
import Articles from './components/Articles'
import {ARTICLES} from './constants/article'


// const applyFilter = (searchTerm) => (article) => {
//   return article.title.toLowerCase().includes(searchTerm.toLowerCase())
// }

// const applySearchTern = (searchTerm) => () => ({searchTerm,})

// class App extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       searchTerm: ''
//     }
//     this.onSearch = this.onSearch.bind(this);
//   }
  
//   onSearch(event) {
//     const {value} = event.target
//     this.setState(applySearchTern(value));
//   }

//   render(){
//     const {searchTerm} = this.state
//     return (
//       <div>
//         <Search value={searchTerm} onSearch={this.onSearch}><p>Search</p></Search>

//         <Articles articles={ARTICLES.filter(applyFilter(searchTerm))} />
//         <p>Found in <a href="https://roadtoreact.com/">the Road to learn React</a></p>

//       </div>
//     )
//   }
// }

const App = () => {

  const [searchTerm, setSearchTerm] = React.useState('');

  const applyFilter = searchTerm => article => {
    return article.title.toLowerCase().includes(searchTerm.toLowerCase())
  }

  const handleSearch = event => {
    const {value} = event.target
    setSearchTerm(value)
  }
  return (
    <div>
      <Search value={searchTerm} onSearch={handleSearch}><p>Search</p></Search>
      <Articles articles={ARTICLES.filter(applyFilter(searchTerm))} />
      <p>Found in <a href="https://roadtoreact.com/">the Road to learn React</a></p>
    </div>
  )

}

export default App;
