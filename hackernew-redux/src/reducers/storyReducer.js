import * as actionType from '../constants/actionType'

const INITIAL_STATE = {
    stories: [],
    error: null
}

const applyAddStories = (state, action) => {
    return {
        stories: action.payload.stories,
        error: null
    }
}

const applyFetchErrorStories = (state, action) => {
    return {
        stories: [],
        error: action.payload.error
    }
}

const storyReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionType.STORIES_ADD:
            return applyAddStories(state, action);
        case actionType.STORIES_FETCH_ERROR:
            return applyFetchErrorStories(state, action);
        default: return state;
    }
}

export default storyReducer;