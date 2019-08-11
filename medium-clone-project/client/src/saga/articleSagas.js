import {put, call} from 'redux-saga/effects'
import * as api from '../api/api'
import {doReceivedAllArticle, doClap, doViewArticle} from '../redux/actions/action'

export function *handleFetchArticle(action) {
    try {
        const result = yield call(api.fetchArticle_API);
        yield put(doReceivedAllArticle(result))
    } catch (error) {
        // xu ly loi
    }
}

export function* handleClapArticle(action) {
    try {
        const article_id = action.payload.article_id;
        const result = yield call(api.fetchClap_API,article_id);
        yield put(doClap(result));
    } catch (error) {
        
    }
}

export function* handleViewArticle(action) {
    try {
        const {article_id} = action.payload;
        const result = yield call(api.fetchArticleDetail_API,article_id)
        yield put(doViewArticle(result))
    } catch (error) {
        //
    }
}
