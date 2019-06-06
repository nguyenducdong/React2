import articles from './articles'
import authUser from './authUser'
import common from './common'
import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

const rootReducer = (history) => combineReducers(
    {
        articles,
        authUser,
        common,
        router: connectRouter(history),
    }
);
export default rootReducer;