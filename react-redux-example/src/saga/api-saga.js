import {takeEvery, call, put} from 'redux-saga/effects'
import * as constants from '../constants/action_types'

export default function* watcherSaga(){
    yield takeEvery(constants.DATA_REQUESTED, workerSaga)
}

function *workerSaga() {
    try {
        const payload = yield call(getData);
        yield put({type: constants.DATA_LOADED, payload});
    } catch (error) {
        yield put({type: constants.API_ERRORED, payload: error})
    }
}

async function getData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
}