import * as constant from '../../constants/constant_action_type'

const initialState = {
    articles:[],
    article: {}
}

export default (state = initialState, action) => {
    switch(action.type){
        case constant.LOAD_ARTICLES:
            return {
                ...state,
                articles: action.payload.articles
            }
        case constant.VIEW_ARTICLE:
            return {
                ...state,
                article: action.payload.article
            }
        case constant.CLAP_ARTICLE:
            // let article = Object.assign({},state.article)
            // article.claps++;
            // console.log(article);
            return {
                ...state,
                article: action.payload.article
            }
        // case constant.LOAD_ARTICLES_REQUEST:
        case constant.ALL_ARTICLES_RECEIVED:
            return {
                ...state,
                articles: action.payload.articles
            }
        default:
            return state;
    }
}