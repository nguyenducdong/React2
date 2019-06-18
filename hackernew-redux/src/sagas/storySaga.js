import {call, put} from 'redux-saga/effects'
import {doAddStory, doFetchErrorStories} from '../actions/storyAction'
import {fetchStoriesAPI} from '../api/storyAPI'

 export function* handleFetchStories(action) {
    const query = action.payload.query

    try {
        const result = yield call(fetchStoriesAPI,query);
        yield put(doAddStory(result.hits))
    } catch (error) {
        yield put(doFetchErrorStories(error))
    }
}