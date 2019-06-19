import {put, call} from 'redux-saga/effects'
import * as api from '../api/api'
import {doFollow, doGetUser, doSignInUser, doGetUserProfile} from '../redux/actions/action'

export function* handleFollowUser(action){
    try {
        const {id, user_id} = action.payload
        const result = yield call(api.fetchFollow_API,id,user_id);
        yield put(doFollow(result));
    } catch (error) {
        //
    }
}

export function* handleGetUser(action){
    try {
        const { _id }= action.payload;
        const result = yield call(api.fetchUser_API,_id);
        yield put(doGetUser(result))
    } catch (error) {
        
    }
}

export function* handleSignInUser(action) {
    try {
        const {user_data} = action.payload;
        const result = yield call(api.SignInUser,user_data);
        yield put(doSignInUser(result))
    } catch (error) {
        
    }
}

export function* handleGetProfile(action) {
    try {
        const {_id} = action.payload;
        const result = yield call(api.fetchUserProfile_API,_id);
        yield put(doGetUserProfile(result));
    } catch (error) {
        
    }
}