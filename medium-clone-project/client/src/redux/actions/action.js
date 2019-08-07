import axios from 'axios'
import * as constant from '../../constants/constant_action_type'
//const url = "http://localhost:5000/api/"
const url = process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:5000/api/'
export const loadArticles = () => async (dispatch) => {
    try {
        const response = await axios.get(`${url}articles`);
        const articles = response.data;
        dispatch({type: constant.LOAD_ARTICLES, payload: {articles}})
    } catch (error) {
        console.log(`LOAD_ARTICLES ACTION ERROR: ${error}`);
    }
}

export const getUser = async (_id) => {
    try {
        const response = await axios.get(`${url}user/${_id}`);
        const user = response.data;
        return user;
    } catch (error) {
        console.log(`getUser ERROR: ${error}`);
    }
}

export const getUserProfile = (_id) => async (dispatch) => {
    try {
        const response = await axios.get(`${url}user/profile/${_id}`);
        const profile = response.data;
        dispatch({type: constant.SET_PROFILE, payload: {profile}})
    } catch (error) {
        console.log(`getUserProfile ERROR: ${error}`);
    }
}

export const getArticle = (article_id) => async (dispatch) => {
    try {
        const response = await axios.get(`${url}article/${article_id}`);
        const article = response.data;
        dispatch({type: constant.VIEW_ARTICLE, payload: {article}})
    } catch (error) {
        console.log(`getArticle ERROR: ${error}`);
    }
}

// article_id, author_id, comment
export const getComment = () => (dispatch) => {

}

//req.body.article_id
export const clap = (article_id) => async (dispatch) => {
    try {
        const response = await axios.post(`${url}article/clap`,{article_id})
        dispatch({type: constant.CLAP_ARTICLE})
    } catch (error) {
        console.log(`clap ERROR: ${error}`);
    }
}

//id, user_id
export const follow = (id, user_id) => async (dispatch) => {
    try {
        const response = await axios.post(`${url}user/follow`,{id,user_id});
        const user = response.data
        dispatch({type: constant.FOLLOW_USER,payload: {user_id}})
    } catch (error) {
        console.log(`follow ERROR: ${error}`);
    }
}

export const SignInUser = (user_data) => async (dispatch) => {
    try {
        const response = await axios.post(`${url}user`,user_data);
        const user = response.data;
        localStorage.setItem('Auth',JSON.stringify(user))
        dispatch({type: constant.SET_USER, payload:{user}})

    } catch (error) {
        console.log(`SignInUser ERROR: ${error}`);
    }
}

export const toggleClose = () => (dispatch) => {
    dispatch({type: constant.TOGGLE_MODAL,payload: {modalMode: false}})
}

export const toggleOpen = () => (dispatch) => {
    dispatch({type: constant.TOGGLE_MODAL, payload: {modalMode: true}})
}

