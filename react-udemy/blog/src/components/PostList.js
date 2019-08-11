import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../action'

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render(){
        return (
            <div>Post List</div>
        )
    }
}

const mapDispatchToProp = {
    fetchPosts
}

export default connect(null, mapDispatchToProp)(PostList);