import {takeEvery, all} from 'redux-saga/effects'
import * as actionType from '../constants/actionType'
import {handleFetchStories} from './storySaga'

 export default function *watchAll() {
    yield all([
        takeEvery(actionType.STORY_FETCH, handleFetchStories)
    ])
}