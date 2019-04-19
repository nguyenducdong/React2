import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Component/Search'
import Table from './Component/Table'
import * as constant from './Constants/Constants'
import Button from './Component/Button'
import axios from 'axios'


const list = [
  {
    title: 'React',
    url: 'https:google.com',
    author: 'Facebook',
    objectID: 0
  },
  {
    title: 'Java',
    url: 'https:google.com',
    author: 'Oracle',
    objectID: 1
  }
]


const isSearched = searchTerm => item => 
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {

  constructor(prop) {
    super(prop);
    this.user = "";
    this.state = {
      result: null,
      searchKey: '',
      searchTerm: constant.DEFAULT_QUERY,
      error: null,
      isLoading: false
    };

    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
    
  }

  needsToSearchTopStories(searchTerm){
    const flag = this.state.result[searchTerm];
    return !flag;
  }

  componentDidMount(){
    const {searchTerm} = this.state;
    this.setState({searchKey: searchTerm});
    this.fetchSearchTopStories(searchTerm);

  }

  onSearchSubmit(event){
    const {searchTerm} = this.state
    this.setState({searchKey: searchTerm})
    if(this.needsToSearchTopStories(searchTerm)){
      this.fetchSearchTopStories(searchTerm)
    }
    event.preventDefault();
  }

  setSearchTopStories(json) {
    // this.setState({result});
    const { hits, page } = json;
    const {searchKey, result} = this.state;

    const oldHits = result && result[searchKey] ? result[searchKey].hits : [];
    const updatedHits = [
      ...oldHits,
      ...hits
    ];

    this.setState({
      result: {
        ...result,
        [searchKey] : {hits: updatedHits, page}
      },
      isLoading: false
    })

    // const oldHits = page !== 0
    //   ? this.state.result.hits
    //   : [];
    // const updatedHits = [
    //   ...oldHits,
    //   ...hits
    // ];
    // this.setState({
    //   result: { hits: updatedHits, page }
    // });
  }

  fetchSearchTopStories(searchTerm, page=0){
    this.setState({isLoading: true});
    const url = `${constant.PATH_BASE}${constant.PATH_SEARCH}?${constant.PARAM_SEARCH}${searchTerm}&${constant.PARAM_PAGE}${page}&${constant.PARAM_HPP}${constant.DEFAULT_HPP}`;
    // fetch(url)
    // .then(response => response.json())
    // .then(result => this.setSearchTopStories(result))
    // .catch(error => this.setState({error: error}));
    axios(url).then(result => this.setSearchTopStories(result.data))
    .catch(error => this.setState({error: error}));
  }

  onSearchChange(event) {
    // const filterList = this.state.result.hits.filter(isSearched(event.target.value));
    // this.setState({result: filterList,searchTerm: event.target.value})
    this.setState({searchTerm: event.target.value})
    // this.fetchSearchTopStories(event.target.value)
  }

  onDismiss(id) {

    const { searchKey, result} = this.state;
    const { hits, page } = result[searchKey];
    const isNotId = item => item.objectID !==id;
    const updatedHits = hits.filter(isNotId);
    this.setState({
      result: {
        ...result,
        [searchKey] : {hits: updatedHits, page}
      }
    });
    // const isNotId = item => item.objectID !== id;
    // const updatedList = this.state.result.hits.filter(isNotId); 
    // this.setState({ result: updatedList, searchTerm: this.state.searchTerm });
    

  }



  render() {
    const {searchTerm, result, searchKey, error, isLoading} = this.state;
    // const page = (result && result.page) || 0
    const page = (result && result[searchKey] && result[searchKey].page) || 0
    const list = (result && result[searchKey] && result[searchKey].hits) || [];

    return (
      
      <div className="page">
        <div className="interactions">
          <Search value={searchTerm} onChange={this.onSearchChange} onSubmit={this.onSearchSubmit}>Search</Search>
        </div>

        {
          error 
          ? <div>
            <p>Something went wrong</p>
          </div> 
          : <Table list={list} onDismiss={this.onDismiss}/>
        }
        {/* {result && 
          <Table list={list} onDismiss={this.onDismiss}/>
        } */}

        <div className="interactions">
          {
            isLoading
            ? <Loading/>
            :<Button onClick={()=>this.fetchSearchTopStories(searchKey,page+1)}>More</Button>
          }
          
        </div>

      </div>
    );
  }
}

// Staless Component 
const SearchComponent = ({value, onChange, children}) =>
  <form>
    {children}<input type="text" value={value} onChange={onChange}/>
  </form>

const Loading = () => 
  <div>Loading....</div>

export default App;


