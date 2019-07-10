// @flow
import * as constant from '../../constants/constant_action_type'
const initialState = {
    user: {},
    isAuth: false,
    profile: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case constant.SET_USER:
            return {
                ...state,
                isAuth: Object.keys(action.payload.user).length > 0 ? true : false,
                user: action.payload.user
            }
        case constant.FOLLOW_USER:
            let userObj = Object.assign({}, state.user);
            userObj.following.push(action.payload.user_id);
            return {
                ...state,
                user: userObj
            }
        case constant.SET_PROFILE:
            return {
                ...state,
                profile: action.payload.profile
            }
        default:
            return state;
    }
}