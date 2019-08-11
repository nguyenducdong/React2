import axios from 'axios'
import * as constant from '../../constants/constant_action_type'
//const url = "http://localhost:5000/api/"
const url = process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:5000/api/'


export const doReceivedAllArticle = (articles) => {
    return {
        type: constant.ALL_ARTICLES_RECEIVED,
        payload: {articles}
    }
}

export const doRequestAllArticle = () => {
    return {
        type: constant.REQUEST_ALL_ARTICLES
    }
}

export const doClap = (article) => {
    return {
        type: constant.CLAP_ARTICLE,
        payload: {article}
    }
}

export const doRequestClapArticle = (article_id) => {
    return {
        type: constant.REQUEST_CLAP_ARTICLE,
        payload: {article_id}
    }
}


export const doFollow = (user_id) => {
    return {
        type: constant.FOLLOW_USER,
        payload: {user_id}
    }
}

export const doRequestFollow = (id, user_id) => {
    return {
        type:constant.REQUEST_FOLLOW_USER,
        payload: {id,user_id}
    }
}

export const doViewArticle = (article) => {
    return {
        type: constant.VIEW_ARTICLE,
        payload: {article}
    }
}

export const doRequestViewArticle = (article_id) => {
    return {
        type:constant.REQUEST_VIEW_ARTICLE,
        payload: {article_id}
    }
}

export const doToggleOpen = () => {
    return{
        type: constant.TOGGLE_MODAL,
        payload: {modalMode: true}
    }
}

export const doToggleClose = () => {
    return{
        type: constant.TOGGLE_MODAL,
        payload: {modalMode: false}
    }
}

export const doSignInUser = (user) => {

    localStorage.setItem('Auth',JSON.stringify(user))

    return {
        type: constant.SET_USER, 
        payload:{user}
    };
}

export const doRequestSignInUser = (user_data) => {
    return {
        type:constant.REQUEST_SIGN_USER,
        payload: {user_data}
    }
}

export const doGetUser = (user) => {
    localStorage.setItem('Auth',JSON.stringify(user))
    return {
        type: constant.SET_USER,
        payload: {user}
    }
}
export const doRequestGetUser = (_id) => {
    return {
        type: constant.REQUEST_GET_USER,
        payload: {_id}
    }
}

export const doGetUserProfile = (profile) => {
    return {
        type: constant.SET_PROFILE, 
        payload: {profile}
    }
}

export const doRequestUserProfile = (_id) => {
    return {
        type: constant.REQUEST_SET_PROFILE, 
        payload: {_id}
    }
}

