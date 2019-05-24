import * as constants from '../constants/action_types'
const initialState = {
    articles: ['dong','nhi'],
    remoteArticles: []
}

const rootReducer = (state=initialState, action) => {
    if(action.type === constants.ADD_ARTICLE){
        // state.articles.push(action.payload)
        return Object.assign({},state,{
            articles: state.articles.concat(action.payload)
        })
    }
    if(action.type === constants.DATA_LOADED) {
        return Object.assign({},state,{
            remoteArticles: state.remoteArticles.concat(action.payload)
        })
    }
    return state;
}

export default rootReducer;