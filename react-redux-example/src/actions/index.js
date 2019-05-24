
import * as constants from '../constants/action_types'

export const addArticle = (payload) => {
    return {type: constants.ADD_ARTICLE, payload}
}

/*
//su dung redux-thunk
export const getData = () => async (dispatch) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        return dispatch({type: constants.DATA_LOADED, payload: data});
    } catch (error) {
        console.log(`log: ${error}`);
        return;
    }
}
*/

export const getData = () => {
    return {type: constants.DATA_REQUESTED}
}