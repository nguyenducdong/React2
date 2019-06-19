import {takeLatest, all,takeEvery} from 'redux-saga/effects'
import {handleFetchArticle, handleClapArticle, handleViewArticle} from './articleSagas'
import {handleFollowUser, handleGetUser, handleSignInUser, handleGetProfile} from './userSagas'
import * as actionType from '../constants/constant_action_type'

export default function *watchAll() {
    yield all([
        takeLatest(actionType.REQUEST_ALL_ARTICLES,handleFetchArticle),
        takeLatest(actionType.REQUEST_CLAP_ARTICLE,handleClapArticle),
        takeLatest(actionType.REQUEST_FOLLOW_USER, handleFollowUser),
        takeLatest(actionType.REQUEST_VIEW_ARTICLE,handleViewArticle),
        takeLatest(actionType.REQUEST_GET_USER,handleGetUser),
        takeLatest(actionType.REQUEST_SIGN_USER,handleSignInUser),
        takeLatest(actionType.REQUEST_SET_PROFILE,handleGetProfile)
    ])
}
