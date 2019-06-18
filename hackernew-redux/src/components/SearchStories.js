import React from 'react'
import * as actionType from '../constants/actionType'
import {doFetchStory} from '../actions/storyAction'
import {connect} from 'react-redux'




const SearchStories = ({onFetchStories}) => {
    const [getQuery, setQuery] = React.useState('');

    const handleChange = (event) => {
        const {value} = event.target;
        setQuery(value);
    }

    const handleSearch = (query) => {
        onFetchStories(query)
        
    }

    return (
        <div>
            <input type="text" value={getQuery} onChange={handleChange}/>
            <button type="button" onClick={() => handleSearch(getQuery)}>Search</button>
        </div>
    )

}

const mapDispatchToProp = dispatch => {
    return {
        onFetchStories: query => dispatch(doFetchStory(query))
    }
}

export default connect(null,mapDispatchToProp)(SearchStories)