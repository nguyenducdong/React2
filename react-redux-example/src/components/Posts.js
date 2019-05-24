import React from 'react'
import {connect} from 'react-redux'
import {getData} from '../actions/index'

class Posts extends React.Component {
    constructor() {
        super()
        var a = this.generatorLoop();
    }

    * generatorLoop(){
        for (var i = 0; i < 15; i++) {
            yield console.log(`dongnhi: ${i}`)
        }
    }
    componentDidMount() {
        this.props.getData()
    }

    render(){
        return (
            <ul className="list-group list-group-flush">
                {this.props.articles.map(article => (
                    <li className="list-group-item">{article.title}</li>
                ))}
            </ul>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(getData())
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.remoteArticles.slice(0, 10)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);