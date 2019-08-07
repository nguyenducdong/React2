import storyReducer from './storyReducer'
import archiveReducer from './archiveReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    storyState: storyReducer,
    archiveState: archiveReducer,
})

export default rootReducer;