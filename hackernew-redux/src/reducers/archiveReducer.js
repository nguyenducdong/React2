import * as actionType  from '../constants/actionType'

const INITIAL_STATE = []

const applyArchiveStory = (state, action) => {
    return [...state, action.payload.id];
}

const archiveReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionType.STORY_ARCHIVE:
            return applyArchiveStory(state,action)
        default: return state
    }
}

export default archiveReducer;