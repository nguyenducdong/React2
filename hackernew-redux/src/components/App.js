import React from 'react'
import './App.css'
import Stories from './Stories'
import SearchStories from './SearchStories'


class App extends React.Component {
    render(){
        return(
            <div className="app">
                <SearchStories/>
                <Stories/>
            </div>
        )
    }
}




export default App;